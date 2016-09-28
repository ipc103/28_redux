import React from 'react';
import {Route} from 'react-router';

import App from './components/app';
import CatsIndex from './components/cats_index';

export default (
  <Route path="/" component={App} >
    <Route path="/cats" component={ CatsIndex } />
  </Route>
)

// export default React.createClass(Route, {path: '/', component:App })
