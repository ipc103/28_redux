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
    const newCatName = this.refs.input.value
    this.props.actions.addCat(newCatName)
    // this is triggered by line 18: store.dispatch(addCat(newCatName))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newCatHandler}>
          <label>name: </label>
          <input ref='input' />
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



// export default connect(mapDispatchToProps)(CatNew)

// this component should render a form for a new cat 
// when user submits a form, we should dispatch an action. type: 'ADD_CAT', payload: 'new cat's name
// this should go through cats reducer which will add this new cat to state 
// all the components should re-render, so cats index will show new cat

// MAYBE this CatNew compnent can't be a functional component

// this.props.store.dispatch({some action})