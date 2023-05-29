import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

import {render} from '../render.js';

export default class TripPresenter {
  #container;
  #tripsModel;
  #trips;
  #offers;
  #destinations;
  #destinationsList;
  #tripListComponent = new TripListView();
  #sortComponent = new SortView();

  constructor({tripPointEditContainer, tripsModel}) {
    this.#container = tripPointEditContainer;
    this.#tripsModel = tripsModel;
  }

  init() {
    this.#trips = [...this.#tripsModel.getTrips()];
    this.#offers = {...this.#tripsModel.getOffers()};
    this.#destinations = [...this.#tripsModel.getDestinations()];
    this.#destinationsList = [...this.#tripsModel.getDestinationsList()];

    render(this.#sortComponent, this.#container);
    render(this.#tripListComponent, this.#container);
    render(new PointEditView({trip: this.#trips[0], offers: this.#offers, destinationsList: this.#destinationsList, destinations: this.#destinations}), this.#tripListComponent.getElement());

    for (let i = 1; i < this.#trips.length; i++) {
      render(new PointView({trip: this.#trips[i], offers: this.#offers, destinations: this.#destinations}), this.#tripListComponent.getElement());
    }
  }

}
