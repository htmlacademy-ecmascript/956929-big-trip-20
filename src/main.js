/*import NewTaskButtonView from './view/new-task-button-view.js';*/
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import TripListPresenter from './presenter/trip-list-presenter.js';
import TripPointEditPresenter from './presenter/trip-point-edit-presenter.js';
import {render, RenderPosition} from './render.js';

const tripHeaderElement = document.querySelector('.trip-main');
const tripHeaderFilterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const tripListPresenter = new TripListPresenter({tripListContainer: tripEventsElement});

const tripPointEditPresenter = new TripPointEditPresenter({tripPointEditContainer: tripEventsElement});

render(new TripInfoView(), tripHeaderElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripHeaderFilterElement);

tripListPresenter.init();
/*tripPointEditPresenter.init();*/




