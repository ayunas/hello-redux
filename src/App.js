import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux';
import reducer from './reducers';
import store from './store';
import ButtonGroup from './ButtonGroup.js';



class App extends Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   tech: "Redux"
  //   // }
  // }

  render() {
    return (
      <div>
        <HelloWorld key={1} tech={store.getState().tech} />
        <ButtonGroup key={2} technologies={['React','Python','React-redux']} />
      </div>
    )
      
  }
}

export default App;
