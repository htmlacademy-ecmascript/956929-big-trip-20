import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import PointView from '../view/point-view.js';

import {render} from '../render.js';

export default class TripListPresenter {
  #tripListComponent = new TripListView();
  #sortComponent = new SortView();

  constructor({tripListContainer}) {
    this.container = tripListContainer;
  }

  init() {
    render(this.#sortComponent, this.container);
    render(this.#tripListComponent, this.container);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.#tripListComponent.getElement());
    }

  }

}
