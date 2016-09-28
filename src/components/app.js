import React from 'react';
import NavBar from './nav_bar';
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
        < NavBar  title="CatBook" url="/" />
        <div className='container'>
          < Link to="/cats">See The Cats</Link>
          { props.children }
        </div>

      </div>
    )
};
