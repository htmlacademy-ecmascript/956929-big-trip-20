import {filter} from '../utils/filter.js';

function generateFilter(trips) {
  return Object.entries(filter).map(
    ([filterType, filterTrips]) => ({
      type: filterType,
      activeFilter: filterTrips(trips).length,
    }),
  );
}

export { generateFilter };
