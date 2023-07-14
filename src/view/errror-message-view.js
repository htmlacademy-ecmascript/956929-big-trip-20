import AbstractView from '../framework/view/abstract-view.js';

function createErrorMessageTemplate() {
  return (`
    <p class="trip-events__msg">server is not available</p>
  `);
}

export default class ErrorMessageView extends AbstractView {
  get template() {
    return createErrorMessageTemplate();
  }
}
