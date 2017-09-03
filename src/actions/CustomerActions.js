//import uuid from 'js-uuid';
import { /*REQUEST_CUSTOMER, REQUEST_CUSTOMER_DATA_ERROR,*/ REQUEST_SET_TERM } from '../actiontypes/CustomerActionTypes';

//const moment = require('moment');

require('es6-promise').polyfill();
require('isomorphic-fetch');


/*function logError(from, error) {
  return {
    type: REQUEST_CUSTOMER_DATA_ERROR,
    from,
    error
  };
}*/
function performCustomerSearch(dispatch, searchText) {
  return Promise.resolve([]);
}

export function requestSetSearchText(searchText) {
  return {
    type: REQUEST_SET_TERM,
    payload: searchText
  };
}

export function requestCustomer() {
  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.
  return function inner(dispatch, getState) {
    const searchText = getState().searchText.term;
    if (!searchText) {
      return Promise.resolve([]);
    }
    return performCustomerSearch(dispatch, searchText);
  };
}
