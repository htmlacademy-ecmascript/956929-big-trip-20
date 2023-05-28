import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import TripPointEditPresenter from './presenter/trip-point-edit-presenter.js';
import {render, RenderPosition} from './render.js';
import TripsModel from './model/model.js';

const tripHeaderElement = document.querySelector('.trip-main');
const tripHeaderFilterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');


const tripsModel = new TripsModel();

const tripPointEditPresenter = new TripPointEditPresenter({tripPointEditContainer: tripEventsElement, tripsModel});

render(new TripInfoView(), tripHeaderElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripHeaderFilterElement);


tripPointEditPresenter.init();
