import React from 'react';
import {Route} from 'react-router';

import App from './components/app';
import CatsIndex from './components/cats_index';
import CatShow from './components/cat_show'
import CatNew from './components/cat_new'
import LogIn from './components/log_in'

export default (
  <Route path="/" component={App} >
    <Route path="/login" component={ LogIn } />
    <Route path="/cats" onEnter={requireAuth} component={ CatsIndex } >
      <Route path="/cats/new" component={ CatNew } />
      <Route path="/cats/:id" component={ CatShow } />
    </Route>
  </Route>
)



// export default React.createClass(Route, {path: '/', component:App })
function requireAuth(nextState, replace) {
  if (!sessionStorage.getItem('jwt')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
