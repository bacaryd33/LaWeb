import React, { Component } from 'react';
import './App.css';

class Box extends Component {
  render() {
    return (
      <div className="Box">
      <b> {this.props.imgnom} </b>
      <a href="" className="thumbnail">
        <img id="imgbox" src={this.props.imglink} alt="Image"/>
      </a>
      </div>
    );
  }
}

export default Box;
