import React from 'react';
import CatsIndex from './cats_index';
import NavBar from './nav_bar';
import {Link} from 'react-router'
export default (props) => {
    return (
      <div>
        < NavBar  title="CatBook" url="/cats">
          <Link to="/cats">See the Cats</Link>
        </NavBar>
        { props.children}
      </div>
    )
};
