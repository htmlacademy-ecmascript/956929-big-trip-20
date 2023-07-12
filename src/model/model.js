import Observable from '../framework/observable.js';
import {getRandomPoint} from '../mock/point.js';
import {getMockOffers} from '../mock/offer.js';
import {getMockDestinations} from '../mock/destination.js';
import {POINT_COUNT} from '../const.js';

export default class TripsModel extends Observable {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);
  #offers = getMockOffers();
  #destinations = getMockDestinations();
  #destinationsLists = this.#destinations.map(({name}) => name);

  get trips() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  get destinationsList() {
    return this.#destinations.map(({name}) => name);
  }

  updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addPoint(updateType, update) {
    this.#points = [
      update,
      ...this.#points
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting trip');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1)
    ];

    this._notify(updateType);
  }


}
