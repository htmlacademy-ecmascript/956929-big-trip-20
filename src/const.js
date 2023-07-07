const TYPES = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECK_IN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant'
};

const BLANK_POINT = {
  id: '',
  type: TYPES.TRAIN,
  destination: '',
  dateFrom: '',
  dateTo: '',
  basePrice: '',
  offers: [],
  isFavorite: ''
};

const PRICE = {
  MIN: 1,
  MAX: 95
};

const POINT_COUNT = 5;

const DATE_FORMAT = {
  HOUR_MINUTES: 'H:mm',
  MONTH_DAY : 'MMM D',
  YEAR_MONTH_DAY: 'YY-MM-DD',
  YEAR_MONTH_DAY_TIME: 'YYYY-MM-DDTHH:mm',
  DAY_MONTH_YEAR_TIME_SLASHED: 'DD/MM/YY HH:mm'
};

const FILTER_TYPE = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const MODE = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const SORT_TYPE = {
  DAY: 'day',
  EVENT:'event',
  TIME: 'time',
  PRICE:  'price',
  OFFERS:'offers',
};

export {TYPES, PRICE, POINT_COUNT, DATE_FORMAT, BLANK_POINT, FILTER_TYPE, MODE, SORT_TYPE};