import React, { Component } from "react";
import axios from "axios";
import { CardFooter, Container, Row } from "reactstrap";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ""
    };
  }

  componentDidMount() {
    this.fetch()
    setInterval(() => this.fetch(), 300000);
  }

  fetch(){
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
    return (
      <blockquote className="blockquote d-flex justify-content-center card-img-overlay">
        
       
          <footer className="blockquote-footer" style={{color:'gray', position: 'absolute', bottom: 0}}>{quotes}</footer> 
    
        
        </blockquote>
    );
  }
}
export default Quotes;
