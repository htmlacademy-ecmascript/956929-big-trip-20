import {getRandomInteger} from '../utils.js';
import {TYPES, PRICE} from '../const.js';

const mockOffer = [
  {
    type: TYPES.TAXI,
    offers: [
      {
        id: 101,
        title: `${TYPES.TAXI} comfort`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
      {
        id: 102,
        title: `${TYPES.TAXI} econom`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
    ]
  },
  {
    type: TYPES.BUS,
    offers: [
      {
        id: 103,
        title: `${TYPES.BUS} yellow`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
      {
        id: 104,
        title: `${TYPES.BUS} red`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
    ]
  },
  {
    type: TYPES.TRAIN,
    offers: [
      {
        id: 105,
        title: `${TYPES.TRAIN} fast`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
      {
        id: 106,
        title: `${TYPES.TRAIN} middle`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
    ]
  },
  {
    type: TYPES.SHIP,
    offers: [
      {
        id: 107,
        title: `${TYPES.SHIP} big`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
      {
        id: 108,
        title: `${TYPES.SHIP} little`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
    ]
  },
  {
    type: TYPES.FLIGHT,
    offers: [
      {
        id: 109,
        title: `${TYPES.FLIGHT} aeroflot`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
      {
        id: 110,
        title: `${TYPES.FLIGHT} pobeda`,
        price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
      },
    ]
  }
];


function getMockOffers() {
  return mockOffer;
}

export {getMockOffers};

