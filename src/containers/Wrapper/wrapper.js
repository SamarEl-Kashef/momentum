import React, { Component } from "react";
import image from "../../images/bg1.jpg";
import Box from "../Box/box";
import "./wrapper.css";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "https://source.unsplash.com/random/1920x1080",
      isLoaded: false
    };
  }

  onChangeImage = () => {
    return this.state.isLoaded ? image :  this.state.imgSrc;
  };

  render() {
    setInterval(() => {
      this.setState({ isLoaded: !this.state.isLoaded });
    }, 300000);

    return (
      <div
        className="Wrapper"
        style={{
          backgroundImage: `url(${this.onChangeImage()})`
        }}
      >
        <Box />
      </div>
    );
  }
}

export default Wrapper;
