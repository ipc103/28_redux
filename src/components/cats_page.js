import React from 'react';
import CatsIndex from './cats_index';
import {connect} from 'react-redux'

class CatsPage extends React.Component {
  render(){
    return(
      <CatsIndex cats={this.props.cats}/>
    )
  }
}

function mapStateToProps(state){
  return {
    cats: state.cats
  }
}

export default connect(mapStateToProps)(CatsIndex);
