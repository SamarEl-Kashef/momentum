import React, { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetingText: this.greetingText()
    };
  }

  componentDidMount() {
    setInterval(this.updateGreetingType.bind(this), 1200000);
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
      <div >
          <h3 className='d-flex justify-content-center'>
        {this.state.greetingText}, Samar
        </h3>
      </div>
    );
  }
}

export default Greeting;
