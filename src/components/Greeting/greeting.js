import React, { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetingText: this.greetingText()
    };
  }

  greetingText() {
    const time = new Date().getHours();
    switch (true) {
      case time >= 0 && time < 12:
        return "Good morning";
      case time >= 12 && time < 17:
        return "Good afternoon";
      case time >= 17 && time <= 23:
        return "Good evening";
      default:
        return "Hello";
    }
  }

  updateGreetingType() {
    this.setState({ greetingText: this.greetingText() });
  }

  render() {
    return (
      <h3>
        {this.state.greetingText}, {this.props.name}
      </h3>
    );
  }
}

export default Greeting;
