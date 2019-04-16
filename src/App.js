import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux';

const store = createStore(reducer);


class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   tech: "Redux"
    // }
  }




  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
