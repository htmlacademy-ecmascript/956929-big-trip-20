/*import NewTaskButtonView from './view/new-task-button-view.js';*/
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
<<<<<<< HEAD
import TripListPresenter from './presenter/trip-list-presenter.js';
import TripPointEditPresenter from './presenter/trip-point-edit-presenter.js';
=======
import TripPresenter from './presenter/trip-presenter.js';
>>>>>>> aa7aec6 (2.13. Шаблонизируй это - 1.1)
import {render, RenderPosition} from './render.js';

const tripHeaderElement = document.querySelector('.trip-main');
const tripHeaderFilterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const tripListPresenter = new TripListPresenter({tripListContainer: tripEventsElement});

<<<<<<< HEAD
const tripPointEditPresenter = new TripPointEditPresenter({tripPointEditContainer: tripEventsElement});
=======

const tripsModel = new TripsModel();

const tripPresenter = new TripPresenter({tripPointEditContainer: tripEventsElement, tripsModel});
>>>>>>> aa7aec6 (2.13. Шаблонизируй это - 1.1)

render(new TripInfoView(), tripHeaderElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripHeaderFilterElement);

<<<<<<< HEAD
tripListPresenter.init();
/*tripPointEditPresenter.init();*/
=======

tripPresenter.init();
>>>>>>> aa7aec6 (2.13. Шаблонизируй это - 1.1)
