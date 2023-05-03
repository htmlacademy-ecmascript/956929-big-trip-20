import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

import {render} from '../render.js';

export default class TripPointEditPresenter {
  #tripListComponent = new TripListView();
  #sortComponent = new SortView();
  #pointEditComponent = new PointEditView();

  constructor({tripPointEditContainer}) {
    this.container = tripPointEditContainer;
  }

  init() {
    render(this.#sortComponent, this.container);
    render(this.#tripListComponent, this.container);
    render(this.#pointEditComponent, this.#tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.#tripListComponent.getElement());
    }

  }

}
