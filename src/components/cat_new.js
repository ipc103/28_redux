import React from 'react'
import * as actions from '../actions/index'
// import {fetchCats} from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CatNew extends React.Component {
  constructor(props) {
    super(props)
    this.newCatHandler = this.newCatHandler.bind(this)
  }

  newCatHandler(event) {
    event.preventDefault()
    // const newCatName = event.target.children[1].value
    debugger;
    // const newCatName = this.refs.input.value
    const newCat = {name: this.refs.name.value, breed: this.refs.breed.value, weight: this.refs.weight.value, tempermanet: this.refs.temp.value}
    this.props.actions.addCat(newCat)
    // this is triggered by line 18: store.dispatch(addCat(newCatName))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newCatHandler}>
          <label>name: </label>
          <input ref='name' />
          <label>weight: </label>
          <input ref='weight' />
          <label>breed: </label>
          <input ref='breed' />
          <label>tempermanet: </label>
          <input ref='temp' />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CatNew);


// CHALLENGE:
// + new cat form should show list of existing hobbies, user should be able to 
//    check of hobbies, these hobbies are persisted to the new cat
// + we need to get all the hobbies into state!
//    + we need a hobbies reducer
//    + we need a fetchHobbies action, similar to the fetchCats action
//    + remember to add your new hobbies reducer to combineReducers in your root reducer
// + the new cat form needs to get the hobbies froms state, pass them into props, 
//     format them in some way that they are checkboxable.
// + the new cat form's onSubmit function needs to collect info on the checked hobbies









