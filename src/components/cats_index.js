import React from 'react';
import {connect} from 'react-redux';

function CatsIndex (props) {
  return (
  <div>
    <ul>
      {props.cats.map(cat => <li key={cat.id}>{cat.name}</li>)}
    </ul>
  </div>)
};

function mapStateToProps(state){
  return {
    cats: state.cats
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CatsIndex);
