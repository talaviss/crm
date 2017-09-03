import { REQUEST_SET_TERM } from '../actiontypes/CustomerActionTypes';

const initialState = {
  term: ''
};

export default function customers(state = initialState, action) {
  switch (action.type) {
  case REQUEST_SET_TERM:
    return {
      ...state, term: action.payload
    };
  default:
    return state;
  }
}
