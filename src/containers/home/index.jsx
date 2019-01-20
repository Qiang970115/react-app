import React, { Component } from 'react'
import axios from "axios";
import RouterView from "../../router"
import { connect } from 'react-redux'
import './index.css'
export class Home extends Component {
 
  componentDidMount() {
    this.props.getList();
  }
  render() {
    console.log(this.props)
    return (
      <RouterView routers={this.props.routers}></RouterView>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getList() {
      axios.get("/fruitsData").then(res => {
        //console.log(res.data.data.categoryList)
        dispatch({
          type: "UPDATE",
          payload: res.data.data.categoryList
        });
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
