import React from 'react';
import App from './components/app'
import CatsPage from './components/cats_page'
import CatsShow from './components/cats_show'
import {Route} from 'react-router';
export default (
  <Route path="/" component={App} >
    <Route path='/cats' component={CatsPage} >
      <Route path='/cats/:id' component={CatsShow} />
    </Route>
  </Route>)
