import {getRandomPoint} from '../mock/point.js';
import {getMockOffers} from '../mock/offer.js';
import {getMockDestinations} from '../mock/destination.js';
import {POINT_COUNT} from '../const.js';

export default class TripsModel {
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
    return this.#destinationsLists;
  }
}
