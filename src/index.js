import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';

import { fetchCats, fetchDogs} from './actions'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer)

// const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

store.dispatch( fetchCats() );
store.dispatch( fetchDogs() );

console.log(store.getState());


ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('container')
)
