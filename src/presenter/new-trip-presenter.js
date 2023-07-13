import {render, RenderPosition, remove} from '../framework/render.js';
// import {nanoid} from 'nanoid';
import PointEditView from '../view/point-edit-view.js';
import {USER_ACTION, UPDATE_TYPE} from '../const/const.js';

export default class NewTripPresenter {
  #tripListContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;

  #offers = null;
  #destinations = null;
  #destinationsList = null;

  #tripEditComponent = null;

  constructor({tripListContainer, onDataChange, onDestroy}) {
    this.#tripListContainer = tripListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init(offers, destinations, destinationsList) {
    this.#offers = offers;
    this.#destinations = destinations;
    this.#destinationsList = destinationsList;

    if (this.#tripEditComponent !== null) {
      return;
    }

    this.#tripEditComponent = new PointEditView({
      offers: this.#offers,
      destinations: this.#destinations,
      destinationsList: this.#destinationsList,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick
    });


    render(this.#tripEditComponent, this.#tripListContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#tripEditComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#tripEditComponent);
    this.#tripEditComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleFormSubmit = (trip) => {
    this.#handleDataChange(
      USER_ACTION.ADD_TRIP,
      UPDATE_TYPE.MINOR,
      trip
      //{ ...trip, id: nanoid()},
    );
    this.destroy();
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.destroy();
    }
  };

}
