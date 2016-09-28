import React from 'react';
import NavBar from './nav_bar';
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
        < NavBar  title="CatBook" url="/" />
        <div>
          <Link to="/cats"> See Cats</Link>
          {props.children}
        </div>
      </div>
    )
};
