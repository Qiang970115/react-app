import React, { Component } from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
import config from "./config"
export default class index extends Component {
  render() {
      //console.log(this.props.routers)
      let arr = this.props.routers ? this.props.routers : config
      let defaultRoutr = <Route key="0" exact path="/" component={()=>{
          return <Redirect to="/home"></Redirect>
      }} />
    return ( <Switch>
        {
            arr.map((item,ind)=>{
                let Comp = item.component
                return <Route key={ind} path={item.path} component={(api)=>{
                    return item.children ? <Comp routers={item.children} {...api} />  : <Comp {...api} />
                }}></Route>
            }).concat(defaultRoutr)
        }
    </Switch>
    )
  }
}
