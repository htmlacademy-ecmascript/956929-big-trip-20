import {SORT_TYPE} from '../const/const.js';
import {getDateDifference, getTimeDifference} from '../utils/trip.js';

function sortByDate(pointA, pointB) {
  return getDateDifference(pointA, pointB);
}

function sortByTime (pointA, pointB) {
  return getTimeDifference(pointA, pointB);
}

function sortByPrice (pointA, pointB) {
  return pointA.basePrice - pointB.basePrice ;
}

function sortPoints (items, sortType) {
  switch (sortType) {
    case SORT_TYPE.TIME:
      items.sort(sortByTime);
      break;
    case SORT_TYPE.PRICE:
      items.sort(sortByPrice);
      break;
    default:
      items.sort(sortByDate);
  }
}

export {sortPoints};
