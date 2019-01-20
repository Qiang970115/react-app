import React, { Component } from 'react'
import { connect } from 'react-redux'
export class City extends Component {
 
  render() {

    return (
      <h1>City</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch)=>{
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
