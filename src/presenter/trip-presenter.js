import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import NoTripView from '../view/no-trip-view.js';
import {updateItem} from '../utils/trip.js';
import PointPresenter from './point-presenter.js';
import {sorting} from '../utils/sort.js';
import {SORT_TYPE} from '../const.js';

import {render} from '../framework/render.js';

export default class TripPresenter {
  #container = null;
  #tripsModel = null;
  #trips;
  #offers;
  #destinations;
  #destinationsList;

  #tripPresenters = new Map();

  #tripListComponent = new TripListView();
  #sortComponent = null;
  #noTripComponent = new NoTripView();

  #currentSortType = SORT_TYPE.DAY;

  constructor({tripPointEditContainer, tripsModel}) {
    this.#container = tripPointEditContainer;
    this.#tripsModel = tripsModel;
  }

  init() {
    this.#trips = [...this.#tripsModel.trips];
    this.#offers = {...this.#tripsModel.offers};
    this.#destinations = [...this.#tripsModel.destinations];
    this.#destinationsList = [...this.#tripsModel.destinationsList];

    sorting(this.#trips, this.#currentSortType);

    if (this.#trips.length === 0) {
      this.#renderNoTrip();
    } else {
      this.#renderSort();
      this.#renderList();

      this.#renderTrips(this.#trips, this.#offers, this.#destinations, this.#destinationsList);
    }
  }

  #renderNoTrip() {
    render(this.#noTripComponent, this.#container);
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#sortComponent, this.#container);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortTrips(sortType);
    this.#clearTrips();
    this.#renderTrips(this.#trips, this.#offers, this.#destinations, this.#destinationsList);
  };

  #sortTrips(sortType) {
    sorting(this.#trips, sortType);
    this.#currentSortType = sortType;
  }


  #clearTrips() {
    this.#tripPresenters.forEach((presenter) => presenter.destroy());
    this.#tripPresenters.clear();
  }

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
      onDataChange: this.#handleTripChange,
      onModeChange: this.#handleModeChange,
    });
    tripPresenter.init(trip);
    this.#tripPresenters.set(trip.id, tripPresenter);
  }

  #handleTripChange = (updatedTrips) => {
    this.#trips = updateItem(this.#trips, updatedTrips);
    this.#tripPresenters.get(updatedTrips.id).init(updatedTrips);
  };

  #handleModeChange = () => {
    this.#tripPresenters.forEach((presenter) => presenter.resetView());
  };

}
