import React from 'react';
import {connect} from 'react-redux';


function CatShow(props) {
  return (
    <div>
      <h3>{props.cat.name}</h3>
      <li>{props.cat.breed}</li>
      <li>{props.cat.weight}</li>
      <li>{props.cat.temperament}</li>
      <h4>Hobbies</h4>
      {props.cat.hobbies.map(hobby => {
        return <li>{hobby.name}</li>
      })}
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  if (state.cats.length > 0) {
    const cat = state.cats.find((cat) => {return cat.id == ownProps.params.id})
    return {cat: cat}
  } else {
    return {cat: {name: '', breed: '', weight: '', temperament: '', hobbies: [{name: ''}]}}
  }

}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CatShow);


