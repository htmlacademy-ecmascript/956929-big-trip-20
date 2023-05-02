import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import PointView from '../view/point-view.js';

import {render} from '../render.js';

export default class TripListPresenter {
  TripListComponent = new TripListView();
  sortComponent = new SortView();

  constructor({tripListContainer}) {
    this.tripListContainer = tripListContainer;
  }

  init() {
    render(this.sortComponent, this.tripListContainer)
    render(this.TripListComponent, this.tripListContainer);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.TripListComponent.getElement());
    }

  }

}
