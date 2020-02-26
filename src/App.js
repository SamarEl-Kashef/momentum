import React, { Component } from "react";
import Quotes from "./components/quotes";
import Clock from "./components/clock";
import axios from "axios";
import bg1 from "./images/bg1.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: "",
      isLoaded: false
    };
  }
  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        this.setState({
          imgURL: response.data.message,
          isLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { imgURL, isLoaded } = this.state;
    return (
      <React.Fragment>
        <div style={{position:'relative'}}  className="container-fluid">
          {isLoaded ? (
            <div>
              <img className="img-fluid" src={bg1} alt="my image" />
            </div>
          ) : (
            <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          )}

          <Clock />
          <Quotes />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
