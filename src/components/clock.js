import React from "react";

import Greeting from "./greeting";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      greeting: ""
    };
  }

  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  currentTime() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="card-img-overlay d-flex flex-column " style={{ color: "white",  position: 'absolute', paddingTop: '20%'}}>
          <h1 className='d-flex justify-content-center'>{this.state.time}</h1>
          <Greeting />
        </div>
      </React.Fragment>
    );
  }
}

export default Clock;
