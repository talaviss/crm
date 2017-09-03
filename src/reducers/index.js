import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import CustomersReducer from './customers';
import SearchTextReducer from './searchtext';
//import ModalReducer from './modal';
import DataErrorReducer from './dataerror';
//import HistoryReducer from './history';


const rootReducer = combineReducers({
  gifs: GifsReducer,
  //modal: ModalReducer,
  customers: CustomersReducer,
  //history: HistoryReducer,
  searchText: SearchTextReducer,
  dataError: DataErrorReducer
});

export default rootReducer;
