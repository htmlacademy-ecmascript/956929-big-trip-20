import {getRandomArrayElement, getRandomInteger} from '../utils/trip.js';
import {TYPES, PRICE} from '../const.js';
import {nanoid} from 'nanoid';

const mockPoint = [
  {
    type: TYPES.TAXI,
    destination: getRandomInteger(0, 5),
    dateFrom: new Date(Date.parse('2023-07-03T13:12:44.845Z')),
    dateTo: new Date(Date.parse('2023-07-03T14:34:38.375Z')),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    offers: ['101', '102'],
    isFavorite: true
  },
  {
    type: TYPES.BUS,
    destination: getRandomInteger(0, 5),
    dateFrom: new Date(Date.parse('2023-07-03T13:12:44.845Z')),
    dateTo: new Date(Date.parse('2023-07-04T16:34:38.375Z')),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    offers: ['104'],
    isFavorite: false
  },
  {
    type: TYPES.TRAIN,
    destination: getRandomInteger(0, 5),
    dateFrom: new Date(Date.parse('2023-07-16T12:23:22.845Z')),
    dateTo: new Date(Date.parse('2023-07-27T14:45:45.375Z')),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    offers: [],
    isFavorite: false
  },
  {
    type: TYPES.SHIP,
    destination: getRandomInteger(0, 5),
    dateFrom: new Date(Date.parse('2023-12-13T05:03:02.845Z')),
    dateTo: new Date(Date.parse('2023-12-13T10:10:11.375Z')),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    offers: ['107', '108'],
    isFavorite: true
  }
];

function getRandomPoint() {
  return {id: nanoid(), ...getRandomArrayElement(mockPoint)};
}

export {getRandomPoint};

