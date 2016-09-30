import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

function CatsIndex (props) {
  return (
  <div>
    <Link to="/cats/new">Add a cat!!!</Link>
    <ul>
      {props.cats.map(cat => <Link to={`/cats/${cat.id}`}><li key={cat.id}>{cat.name}</li></Link>)}
    </ul>
    {props.children}
  </div>)
};

function mapStateToProps(state){
  if (state.cats.length > 0) {  
    return {cats: state.cats}
  }else {
    return {cats: []}
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CatsIndex);


