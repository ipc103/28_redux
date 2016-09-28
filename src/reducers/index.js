import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';
import dogsReducer from './dogs_reducer';

const rootReducer =  combineReducers({
  cats: catsReducer,
  dogs: dogsReducer
});

export default rootReducer;
