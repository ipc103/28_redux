import React from 'react'
import * as actions from '../actions/index'
// import {fetchCats} from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CatNew extends React.Component {
  constructor(props) {
    super(props)
    this.newCatHandler = this.newCatHandler.bind(this)
    this.selectHobby= this.selectHobby.bind(this)
    this.state = {checkedHobbies: []}
  }

  newCatHandler(event) {
    event.preventDefault()
    // const newCatName = event.target.children[1].value
    // const newCatName = this.refs.input.value
    const newCat = {name: this.refs.name.value, breed: this.refs.breed.value, weight: this.refs.weight.value, temperament: this.refs.temp.value, hobby_ids: this.state.checkedHobbies}
    debugger;
    this.props.actions.addCat(newCat)
    // this is triggered by line 18: store.dispatch(addCat(newCatName))
  }

  selectHobby(event) {
    const idOfCheckedHobby = event.target.value
    if (event.target.checked) {  
      const checkedHobbiesCollection = [...this.state.checkedHobbies, event.target.value]
      this.setState({checkedHobbies: checkedHobbiesCollection})
    } else {
      const index = this.state.checkedHobbies.indexOf(idOfCheckedHobby)
      this.state.checkedHobbies.splice(index, 1)
      this.setState({checkedHobbies: [...this.state.checkedHobbies]})
    }
    debugger
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
          <label>hobbies</label>

          {this.props.hobbies.map(hobby => {
            return (<div>
              <input type="checkbox" onClick={this.selectHobby} name={hobby.name} value={hobby.id}/>
              <label>{hobby.name}</label>
            </div>)
          })}

          <input type="submit"/>
        </form>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {hobbies: state.hobbies}

}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
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









