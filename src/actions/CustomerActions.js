//import uuid from 'js-uuid';
import { /*REQUEST_CUSTOMER,*/ REQUEST_CUSTOMER_DATA_ERROR, REQUEST_SET_TERM, REQUEST_CUSTOMER_DATA_RECEIVED } from '../actiontypes/CustomerActionTypes';

//const moment = require('moment');

require('es6-promise').polyfill();
require('isomorphic-fetch');


function logError(from, error) {
  return {
    type: REQUEST_CUSTOMER_DATA_ERROR,
    from,
    error
  };
}

const customerBase = `http://localhost:8081/byname/`;
function customerDataReceived(data) {
  console.dir(data);
  return {
    type: REQUEST_CUSTOMER_DATA_RECEIVED,
    data
  };
}

/*
function getCustomerDetails(cust, i) {
  return {
    id: cust.id + i,
    fullname: cust.fullname,

  };
}*/

function fetchCustomerServiceAPI(dispatch, searchText) {
  console.log("in fetchCustomerServiceAPI");
  return fetch(`${customerBase}${searchText}`).then((response) => {

    if (!response || !response.ok || response.status !== 200) {
      return dispatch(logError('customerAPI', `Bad response from server:${response.statusText}`));
    }
    return response.json();
  }).then((json) => {
    console.dir(json);
    if (json == null) {
      return dispatch(logError('customerAPI', 'Bad json'));
    }
    return json;//.map(getCustomerDetails);
  }).catch(error =>
    dispatch(logError('customerAPI', error.message))
  );
}


function performCustomerSearch(dispatch, searchText) {
  return fetchCustomerServiceAPI(dispatch, searchText).then((resFromAPI) => {
    //dispatch(logToHistory(searchText, 'Flicker', resFromAPI.length));
    return dispatch(customerDataReceived(resFromAPI));
  });
}

export function requestSetSearchText(searchText) {
  return {
    type: REQUEST_SET_TERM,
    payload: searchText
  };
}

export function requestCustomer() {
  console.log("i'm here");
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
