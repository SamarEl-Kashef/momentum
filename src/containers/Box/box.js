import React, { Component } from "react";
import Clock from "../../components/Clock/clock";
import Quotes from "../../components/Quotes/quotes";
import Greeting from "../../components/Greeting/greeting";
import "./box.css";

class Box extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
    name: "Samar"
  };
  render() {
    return (
      <div className="Box">
        <Clock />
        <Greeting name={this.state.name} />
        <Quotes />
      </div>
    );
  }
}

export default Box;
