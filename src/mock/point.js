import {getRandomArrayElement, getRandomInteger} from '../utils/trip.js';
import {TYPES, PRICE} from '../const.js';

const mockPoint = [
  {
    id: 0,
    type: TYPES.TAXI,
    destination: getRandomInteger(0, 5),
    dateFrom: new Date(Date.parse('2021-05-16T13:12:44.845Z')),
    dateTo: new Date(Date.parse('2021-05-16T14:34:38.375Z')),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    offers: [101, 102],
    isFavorite: true
  },
  {
    id: 1,
    type: TYPES.BUS,
    destination: getRandomInteger(0, 5),
    dateFrom: new Date(Date.parse('2023-06-20T13:12:44.845Z')),
    dateTo: new Date(Date.parse('2023-06-21T16:34:38.375Z')),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    offers: [104],
    isFavorite: false
  },
  {
    id: 2,
    type: TYPES.TRAIN,
    destination: getRandomInteger(0, 5),
    dateFrom: new Date(Date.parse('2021-09-26T12:23:22.845Z')),
    dateTo: new Date(Date.parse('2021-09-27T14:45:45.375Z')),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    offers: [],
    isFavorite: false
  },
  {
    id: 3,
    type: TYPES.SHIP,
    destination: getRandomInteger(0, 5),
    dateFrom: new Date(Date.parse('2021-12-13T05:03:02.845Z')),
    dateTo: new Date(Date.parse('2021-12-13T10:10:11.375Z')),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    offers: [107, 108],
    isFavorite: true
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoint);
}

export {getRandomPoint};

