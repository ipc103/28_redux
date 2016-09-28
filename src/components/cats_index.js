import React from 'react';
import { Link } from 'react-router';
export default (props) => {

  const renderCats = (cat) => { return(
      <li key={cat.id}>
        <Link to={`/cats/${cat.id}`} >{cat.name}</Link>
      </li>)
  }

  return(
    <div>
      <div className='col-md-4'>
        <ul>
          {props.cats.map(renderCats)}
        </ul>
      </div>
      <div className='col-md-8'>
        {props.children}
      </div>
    </div>
  )
}
