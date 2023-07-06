import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import NoTripView from '../view/no-trip-view.js';
import {updateItem} from '../utils/trip.js';
import PointPresenter from './point-presenter.js';

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
  #sortComponent = new SortView();
  #noTripComponent = new NoTripView();

  constructor({tripPointEditContainer, tripsModel}) {
    this.#container = tripPointEditContainer;
    this.#tripsModel = tripsModel;
  }

  init() {
    this.#trips = [...this.#tripsModel.trips];
    this.#offers = {...this.#tripsModel.offers};
    this.#destinations = [...this.#tripsModel.destinations];
    this.#destinationsList = [...this.#tripsModel.destinationsList];

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
    render(this.#sortComponent, this.#container);
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
