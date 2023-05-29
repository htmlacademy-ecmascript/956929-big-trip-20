import {createElement} from '../render.js';
import {TYPES, DATE_FORMAT} from '../const.js';
import {upFirstLetter, humanizeTripDueDate} from '../utils.js';

function createEventTypeItemsTemplate(types) {
  return (`
    ${Object.values(types).map((type) =>
      `<div class="event__type-item">
        <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
        <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${upFirstLetter(type)}</label>
      </div>`).join('')}
  `);
}

function createDestinationsListOptionsTemplate(destinationsList) {
  return (`${destinationsList.map((value) => `<option value="${value}"></option>`).join('')}`);
}

function createEventDetailsTemplate(pointOffers, trip, pointDestinations) {

  const {destination} = trip;
  const tripDestination = pointDestinations.filter((value) => value.id === destination);
  const description = tripDestination[0].description;

  return (`
    <section class="event__details">
     

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>

        ${createOffersTemplate(pointOffers, trip)}
        ${createPhotoContainerTemplate(trip, pointDestinations)}
        
      </section>
    </section>
  `);
}

function createOffersTemplate(pointOffers, trip) {
  return (`
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        
      ${createOffersItemTemplate(pointOffers, trip)}
      
      </div>
    </section>
  `);
}

function createOffersItemTemplate(pointOffers, trip) {
  const currentOffers = pointOffers[Object.keys(pointOffers).filter((value) => value === trip.type)];
  return (`
    ${currentOffers.map(({title, price, id}) => `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}-1" type="checkbox" name="event-offer-${id}" checked="">
        <label class="event__offer-label" for="event-offer-${id}-1">
          <span class="event__offer-title">${title}</span>
          +€&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>`).join('')}
    `);
}

function createPhotoContainerTemplate(trip, pointDestinations) {
  const {destination} = trip;
  const tripDestination = pointDestinations.filter((value) => value.id === destination);
  const pictures = tripDestination[0].pictures;
  return (`
    <div class="event__photos-container">
      <div class="event__photos-tape">
      ${pictures.map(({src, description}) => `<img class="event__photo" src="${src}"
      alt="${description}"></img>`).join('')}</div>
      </div>
    </div>
  `);
}

function createPointEditViewTemplate(trip, pointOffers, destinationsList, pointDestinations) {
  const {type, destination, dateFrom, dateTo, basePrice} = trip;
  const tripDestination = pointDestinations.filter((value) => value.id === destination);
  const tripCity = tripDestination[0].name;
  return (`
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${createEventTypeItemsTemplate(TYPES)}
            </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${upFirstLetter(type)}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${tripCity}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${createDestinationsListOptionsTemplate(destinationsList)}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeTripDueDate(dateFrom, DATE_FORMAT.DAY_MONTH_YEAR_TIME_SLASHED)}">
            —
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeTripDueDate(dateTo, DATE_FORMAT.DAY_MONTH_YEAR_TIME_SLASHED)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              €
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        ${createEventDetailsTemplate(pointOffers, trip, pointDestinations)}
      </form>
     </li>
  `);
}

export default class PointEditView {

  constructor({trip, offers, destinationsList, destinations}) {
    this.trip = trip;
    this.pointOffers = offers;
    this.destinationsList = destinationsList;
    this.pointDestinations = destinations;
  }

  getTemplate() {
    return createPointEditViewTemplate(this.trip, this.pointOffers, this.destinationsList, this.pointDestinations);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
