import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';
import dogsReducer from './dogs_reducer';

const rootReducer =  combineReducers({
  cats: catsReducer,
  dogs: dogsReducer
});

// {cats: whatever gets returned by cats reducer, dogs: whatever gets returned by dog reducer}

export default rootReducer;
