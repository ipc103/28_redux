import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers';

import { fetchCats, fetchDogs, fetchHobbies} from './actions'

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)
const store = createStore(rootReducer, applyMiddleware(ReduxPromise));


store.dispatch( fetchCats() );
store.dispatch( fetchHobbies() );

console.log(store.getState());


ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('container')
)
