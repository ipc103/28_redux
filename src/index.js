import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index'
import {fetchCats} from './actions/cat_actions'

import routes from './routes'
import { Router, browserHistory } from 'react-router'

const store = createStore(rootReducer);
store.dispatch(fetchCats());
ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory} routes = {routes} />
</Provider>, document.getElementById('container')
)
