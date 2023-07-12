import {render, remove} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import NoTripView from '../view/no-trip-view.js';
import PointPresenter from './point-presenter.js';
import {sortPoints} from '../utils/sort.js';
import NewTripPresenter from './new-trip-presenter.js';
import {SORT_TYPE, USER_ACTION, UPDATE_TYPE, FILTER_TYPE} from '../const.js';
import {filter} from '../utils/filter.js';

export default class TripPresenter {
  #container = null;
  #tripsModel = null;
  #offers = null;
  #destinations = null;
  #destinationsList = null;
  #filterModel = null;
  #newTripPresenter = null;
  #tripPresenters = new Map();

  #tripListComponent = new TripListView();
  #sortComponent = null;
  #noTripComponent = null;

  #currentSortType = SORT_TYPE.DAY;
  #filterType = FILTER_TYPE.EVERYTHING;

  constructor({tripPointEditContainer, tripsModel, filterModel, onNewTripDestroy}) {
    this.#container = tripPointEditContainer;
    this.#tripsModel = tripsModel;
    this.#filterModel = filterModel;

    this.#newTripPresenter = new NewTripPresenter({
      tripListContainer: this.#tripListComponent.element,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewTripDestroy
    });

    this.#tripsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

  }

  createTrip() {
    this.#currentSortType = SORT_TYPE.DAY;
    this.#filterModel.setFilter(UPDATE_TYPE.MAJOR, FILTER_TYPE.EVERYTHING);

    this.#newTripPresenter.init(this.#offers, this.#destinations, this.#destinationsList);
  }

  get trips() {
    this.#filterType = this.#filterModel.filter;
    const trip = this.#tripsModel.trips;
    const filteredTrips = filter[this.#filterType](trip);

    sortPoints(filteredTrips, this.#currentSortType);

    return filteredTrips;
  }

  init() {
    this.#offers = {...this.#tripsModel.offers};
    this.#destinations = [...this.#tripsModel.destinations];
    this.#destinationsList = [...this.#tripsModel.destinationsList];

    this.#renderBoard();
  }

  #renderBoard() {
    if (this.trips.length === 0) {
      this.#renderNoTrip();
      return;
    }
    this.#renderSort();
    this.#renderList();
    this.#renderTrips(this.trips, this.#offers, this.#destinations, this.#destinationsList);
  }

  #clearBoard({resetSortType = false} = {}) {
    this.#newTripPresenter.destroy();
    this.#tripPresenters.forEach((presenter) => presenter.destroy());
    this.#tripPresenters.clear();

    remove(this.#sortComponent);

    if (this.#noTripComponent) {
      remove(this.#noTripComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SORT_TYPE.DAY;
    }
  }

  #renderNoTrip() {
    this.#noTripComponent = new NoTripView({
      filterType: this.#filterType
    });

    render(this.#noTripComponent, this.#container);
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#sortComponent, this.#container);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearBoard();
    this.#renderBoard();
  };

  #renderList() {
    render(this.#tripListComponent, this.#container);
  }

  #renderTrips(trips, offers, destinations, destinationsList) {
    for (let i = 0; i < trips.length; i++) {
      this.#renderTrip(trips[i], offers, destinations, destinationsList);
    }
  }

  #renderTrip(trip, offers, destinations, destinationsList) {
    const tripPresenter = new PointPresenter({
      tripContainer: this.#tripListComponent.element,
      offers: offers,
      destinations: destinations,
      destinationsList: destinationsList,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });
    tripPresenter.init(trip);
    this.#tripPresenters.set(trip.id, tripPresenter);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case USER_ACTION.UPDATE_TRIP:
        this.#tripsModel.updatePoint(updateType, update);
        break;
      case USER_ACTION.ADD_TRIP:
        this.#tripsModel.addPoint(updateType, update);
        break;
      case USER_ACTION.DELETE_TRIP:
        this.#tripsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UPDATE_TYPE.PATCH:
        this.#tripPresenters.get(data.id).init(data);
        break;
      case UPDATE_TYPE.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UPDATE_TYPE.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
        break;
    }
  };

  #handleModeChange = () => {
    this.#newTripPresenter.destroy();
    this.#tripPresenters.forEach((presenter) => presenter.resetView());
  };

}
