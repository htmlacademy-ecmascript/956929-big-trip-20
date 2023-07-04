import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import {render, RenderPosition} from './framework/render.js';
import TripsModel from './model/model.js';
import {generateFilter} from './mock/filter.js';

const tripHeaderElement = document.querySelector('.trip-main');
const tripHeaderFilterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const tripsModel = new TripsModel();
const boardPresenter = new BoardPresenter({tripPointEditContainer: tripEventsElement, tripsModel});

const filters = generateFilter(tripsModel.trips);

render(new TripInfoView(), tripHeaderElement, RenderPosition.AFTERBEGIN);
render(new FilterView(filters), tripHeaderFilterElement);


boardPresenter.init();
