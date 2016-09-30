import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.submitLogIn = this.submitLogIn.bind(this)
  }

  submitLogIn(event) {
    event.preventDefault();
    this.props.actions.logIn({email: this.refs.email.value, password: this.refs.password.value})
  }

  render() {
    return (
    <form onSubmit={this.submitLogIn}>
      <label>email</label>
      <input type="text" ref="email"/>
      <label>password</label>
      <input type="password" ref="password"/>
      <input type="submit"/>
    </form>
  )
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(LogIn)