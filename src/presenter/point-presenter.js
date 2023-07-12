import {render, replace, remove} from '../framework/render.js';

import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

import {MODE, USER_ACTION, UPDATE_TYPE} from '../const.js';
import {isDatesEqual, isPriceEqual} from '../utils/trip.js';

export default class PointPresenter {
  #tripContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;

  #trip = null;
  #offers;
  #destinations;
  #destinationsList;
  #mode = MODE.DEFAULT;

  #tripComponent = null;
  #tripEditComponent = null;


  constructor({tripContainer, offers, destinations, destinationsList, onDataChange, onModeChange}) {
    this.#tripContainer = tripContainer;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#destinationsList = destinationsList;

    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(trip) {

    this.#trip = trip;

    const prevTripComponent = this.#tripComponent;
    const prevTripEditComponent = this.#tripEditComponent;

    this.#tripComponent = new PointView({
      trip: this.#trip,
      offers: this.#offers,
      destinations: this.#destinations,
      destinationsList: this.#destinationsList,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick
    });
    this.#tripEditComponent = new PointEditView({
      trip: this.#trip,
      offers: this.#offers,
      destinations: this.#destinations,
      destinationsList: this.#destinationsList,
      onFormSubmit: this.#handleFormSubmit,
      onRollUpButtonClick: this.#handleFormClick,
      onDeleteClick: this.#handleDeleteClick
    });

    if (prevTripEditComponent === null || prevTripComponent === null) {
      render(this.#tripComponent, this.#tripContainer);
      return;
    }

    if (this.#mode === MODE.EDITING) {
      replace(this.#tripEditComponent, prevTripEditComponent);
    }

    if (this.#mode === MODE.DEFAULT) {
      replace(this.#tripComponent, prevTripComponent);
    }

    remove(prevTripComponent);
    remove(prevTripEditComponent);

  }

  destroy() {
    remove(this.#tripComponent);
    remove(this.#tripEditComponent);
  }

  resetView() {
    if (this.#mode !== MODE.DEFAULT) {
      this.#tripEditComponent.reset(this.#trip);
      this.#replaceFormToTrip();
    }
  }

  #replaceFormToTrip() {
    replace(this.#tripComponent, this.#tripEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = MODE.DEFAULT;
  }

  #replaceTripToForm() {
    replace(this.#tripEditComponent, this.#tripComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = MODE.EDITING;

  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#tripEditComponent.reset(this.#trip);
      this.#replaceFormToTrip();
    }
  };

  #handleEditClick = () => {
    this.#replaceTripToForm();
  };

  #handleFormSubmit = (update) => {
    const isMinorUpdate =
    !isDatesEqual(this.#trip.dateFrom, update.dateFrom) ||
    !isDatesEqual(this.#trip.dateTo, update.dateTo) ||
    !isPriceEqual(this.#trip.basePrice, update.basePrice);

    this.#handleDataChange(
      USER_ACTION.UPDATE_TRIP,
      isMinorUpdate ? UPDATE_TYPE.MINOR : UPDATE_TYPE.PATCH,
      update,
    );
    this.#replaceFormToTrip();
  };

  #handleFormClick = () => {
    this.#tripEditComponent.reset(this.#trip);
    this.#replaceFormToTrip();

  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      USER_ACTION.UPDATE_TRIP,
      UPDATE_TYPE.MINOR,
      {...this.#trip, isFavorite: !this.#trip.isFavorite}
    );
  };

  #handleDeleteClick = (trip) => {
    this.#handleDataChange(
      USER_ACTION.DELETE_TRIP,
      UPDATE_TYPE.MINOR,
      trip
    );
  };

}
