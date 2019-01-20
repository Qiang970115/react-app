import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Use extends Component {
 
  render() {

    return (
      <h1>Use</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Use)
