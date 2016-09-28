import {combineReducers} from 'redux';
import CatsReducer from './cats_reducer';

const rootReducer = combineReducers({
  cats: CatsReducer
})

export default rootReducer;
