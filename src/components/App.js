import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      para: false
    };
  }
  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() => this.setState({ para: !this.state.para })}
        >
          click
        </button>
        {this.state.para ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : null}
      </div>
    );
  }
}

export default App;
