import React from 'react'
import * as actions from '../actions/index'
// import {fetchCats} from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class CatNew extends React.Component {
  constructor(props){
    super(props)
    this.newCatHandler = this.newCatHandler.bind(this)
  }

  newCatHandler(event){
    event.preventDefault()
    const catName = this.refs.name.value
    this.props.actions.addCats(catName)
  }

  render() {
  return (
    <div>
      <form onSubmit= {this.newCatHandler}>
        New Cat Name
        <input ref="name" />
        <button>Save</button>
      </form>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}


const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CatNew)
// render form to submit new cat, when submitted, dispatch an action with type of 'add_cat', payload is new cats name, should go through cats reducer which will ad dnew cat to state (copy it first), all the components should re=render, cats index will show new cat

// maybe this cat new component should not be a functional component... need to keep track of state?
