import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import RouterView from "router"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <RouterView routers={this.props.routers}></RouterView>
        </Router>
      </div>
    );
  }
}

export default App;
