import React from 'react';
import { connect } from 'react-redux';

function CatShow(props){
    return(
        <h1>
            {props.cat.name}
            {props.cat.id}
        </h1>
    )
}

function mapStateToProps (state, ownProps) {
    const cat = state.cats.find((cat) => {return cat.id == ownProps.params.id})
    return {cat: cat}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CatShow)
