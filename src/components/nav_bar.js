import React from 'react';
import {Link} from 'react-router';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn: !!sessionStorage.getItem('jwt')}
    this.logOut = this.logOut.bind(this)
  }

  logOut(event) {
    sessionStorage.removeItem('jwt')

  }


  render() {
    return (
    <nav className='navbar navbar-inverse'>
      <div className='navbar-header'>
        <a className='navbar-brand' href={this.props.url}>{this.props.title}</a>
        { "|" }
        {sessionStorage.getItem('jwt') ? <a href="/login" onClick={this.logOut}>Log Out</a> : <Link to="/login">Log In</Link>}
      </div>
    </nav>
  )
  }
}

