import React from 'react';
import * as actions from '../actions/index'
// import { fetchCats, addCats } from '../actions'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'


// import {connect} from 'react-redux';
// import {Link} from 'react-router'

class CatNew extends React.Component {

  constructor (props){
    super(props)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onSubmitHandler(event){
    event.preventDefault()
    this.props.actions.addCats(event.target.firstChild.value)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} >
          <input type="text" />
          <button type="submit" > Submit Me</button>
        </form>
      </div>)
  };
}

// store.dispatch( addCats());

function mapDispatchToProps (dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CatNew)
