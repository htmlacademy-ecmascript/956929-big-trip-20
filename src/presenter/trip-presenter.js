import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import NoTripView from '../view/no-trip-view.js';

import {render, replace} from '../framework/render.js';

export default class TripPresenter {
  #container = null;
  #tripsModel = null;
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
    this.#trips = [...this.#tripsModel.trips];
    this.#offers = {...this.#tripsModel.offers};
    this.#destinations = [...this.#tripsModel.destinations];
    this.#destinationsList = [...this.#tripsModel.destinationsList];


    for (let i = 0; i < this.#trips.length; i++) {
      this.#renderTrips(this.#trips[i], this.#offers, this.#destinations, this.#destinationsList);
    }

    if (this.#trips.length === 0) {
      render(new NoTripView(), this.#container);
    }
  }


  #renderTrips(trip, offers, destinations, destinationsList) {

    render(this.#sortComponent, this.#container);
    render(this.#tripListComponent, this.#container);

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToTrip();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({
      trip,
      offers,
      destinations,
      onEditClick: () => {
        replaceTripToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const eventFormComponent = new PointEditView({
      trip,
      offers,
      destinationsList,
      destinations,
      onEditClick: () => {
        replaceFormToTrip();
        document.addEventListener('keydown', escKeyDownHandler);
      },
      onRollUpButtonClick: () => {
        replaceFormToTrip();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    render(pointComponent, this.#tripListComponent.element);

    function replaceTripToForm() {
      replace(eventFormComponent, pointComponent);
    }

    function replaceFormToTrip() {
      replace(pointComponent, eventFormComponent);
    }

  }

}
