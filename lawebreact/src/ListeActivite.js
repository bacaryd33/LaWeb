import React, { Component } from 'react';
import './App.css';
import TypeActivite from './TypeActivite';
import Box from './Box.js';
//importer inscription activité (module Modalform)

class ListeActivite extends Component {
  render() {
    return (
      <div>
        <TypeActivite title='Développement'/>
        <div className="container">
          <div className="row">
              <Box imgnom='Python' imglink='./images/python.png'/>
              <Box imgnom='Python' imglink='./images/python.png'/>
              <Box imgnom='Python' imglink='./images/python.png'/>
              <Box imgnom='Python' imglink='./images/python.png'/>
              <Box imgnom='Python' imglink='./images/python.png'/>
              <Box imgnom='Python' imglink='./images/python.png'/>

          </div>
        </div>
        <TypeActivite title='Multimédia'/>
        <div className="container">
          <div className="row">
              <Box imgnom='LibreOfficeWriter' imglink="./images/LOW.jpg"/>
          </div>
        </div>

        <TypeActivite title='Conférence'/>
        <div className="container">
          <div className="row">
              <Box imgnom='Intelligence Artificielle' imglink="./images/OpenAI.png"/>
          </div>
        </div>
      </div>

    )
  }
}


export default ListeActivite;
