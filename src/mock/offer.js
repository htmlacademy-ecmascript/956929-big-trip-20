import {getRandomInteger} from '../utils/trip.js';
import {TYPES, PRICE} from '../const.js';

const mockOffer = {
  [TYPES.TAXI]: [
    {
      id: '101',
      title: `${TYPES.TAXI} comfort`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
    {
      id: '102',
      title: `${TYPES.TAXI} econom`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
  ],
  [TYPES.BUS]: [
    {
      id: '103',
      title: `${TYPES.BUS} yellow`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
    {
      id: '104',
      title: `${TYPES.BUS} red`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
  ],
  [TYPES.TRAIN]: [
    {
      id: '105',
      title: `${TYPES.TRAIN} fast`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
    {
      id: '106',
      title: `${TYPES.TRAIN} middle`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
  ],
  [TYPES.SHIP]: [
    {
      id: '107',
      title: `${TYPES.SHIP} big`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
    {
      id: '108',
      title: `${TYPES.SHIP} little`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
  ],
  [TYPES.FLIGHT]: [
    {
      id: '109',
      title: `${TYPES.FLIGHT} aeroflot`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
    {
      id: '110',
      title: `${TYPES.FLIGHT} pobeda`,
      price: getRandomInteger(PRICE.MIN, (PRICE.MAX))
    },
  ]
};


function getMockOffers() {
  return mockOffer;
}

export {getMockOffers};

