import { REQUEST_CUSTOMER_DATA_RECEIVED } from '../actiontypes/CustomerActionTypes';

const initialState = {
  data: []
};

export default function customers(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CUSTOMER_DATA_RECEIVED:
    return {
      ...state, data: action.data
    };
  default:
    return state;
  }
}
