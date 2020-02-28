import React, { Component } from "react";
import axios from "axios";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ""
    };
  }

  componentDidMount() {
    this.fetch();
    setInterval(() => this.fetch(), 300000);
  }

  fetch() {
    axios
      .get("https://api.quotable.io/random")
      .then(response => {
        // console.log(response.data);
        this.setState({ quotes: response.data.content });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { quotes } = this.state;
    return <q className="d-flex justify-content-between quotes">{quotes}</q>;
  }
}
export default Quotes;
