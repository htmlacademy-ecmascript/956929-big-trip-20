import Observable from '../framework/observable.js';
import {UPDATE_TYPE} from '../const/const.js';

export default class TripsModel extends Observable {
  #points = [];
  #offers = [];
  #destinations = [];
  #destinationsList = [];
  #tripsApiService = null;

  constructor({tripsApiService}) {
    super();
    this.#tripsApiService = tripsApiService;


  }

  async init() {
    try {
      const points = await this.#tripsApiService.trips;
      const offers = await this.#tripsApiService.offers;
      const destinations = await this.#tripsApiService.destinations;

      this.#points = points.map(this.#adaptTripToClient);
      this.#offers = offers;
      this.#destinations = destinations.map(this.#adaptDestinationToClient);
      this.#destinationsList = this.#destinations.map(({name}) => name);

    } catch(err) {
      this.#points = [];
    }

    this._notify(UPDATE_TYPE.INIT);
  }


  #adaptOffers(offers) {
    return offers.reduce((result, item) => {
      result[item.type] = item.offers;
      return result;
    }, {});
  }

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

  async updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting trip');
    }

    try {
      const response = await this.#tripsApiService.updateTrips(update);
      const updatedPoint = this.#adaptTripToClient(response);

      this.#points = [
        ...this.#points.slice(0, index),
        updatedPoint,
        ...this.#points.slice(index + 1)
      ];
      this._notify(updateType, updatedPoint);

    } catch(err) {
      throw new Error('Can\'t update trip');
    }
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

  #adaptTripToClient(trip) {
    const adaptedTrip = {...trip,
      basePrice: trip['base_price'],
      dateFrom: trip['date_from'],
      dateTo: trip['date_to'],
      isFavorite: trip['is_favorite']
    };

    delete adaptedTrip['base_price'];
    delete adaptedTrip['date_from'];
    delete adaptedTrip['date_to'];
    delete adaptedTrip['is_favorite'];

    return adaptedTrip;
  }

  #adaptDestinationToClient(destination) {
    const adaptedDestination = {...destination,
      images: destination['pictures']
    };
    delete adaptedDestination['pictures'];
    return adaptedDestination;

  }

}
