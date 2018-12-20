import React, { Component } from 'react';
import './App.css';
import TypeActivite from './TypeActivite';
import Box from './Box.js';
import {Button,Modal} from 'react-bootstrap';
//importer inscription activité (module Modalform)

class ListeActivite extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    return (
      <div>
      
        <TypeActivite title='Développement'/>
        <div className="container">
          <div className="row">
              <Box imgnom='Python' imglink='./images/python.png' modnom='Python' modtitre="Les Bases" modanimateur="Aubry Quentin" moddate="28 Janvier 2019" modnbplace="5" moddescription="Dans cet atelier nous vous présenterons les technologies permettant la production de code Python ainsi qu'un bref récapitulatif de la syntaxe."/>
              <Box imgnom='C++' imglink='./images/C++.png'/>
              <Box imgnom='C#' imglink='./images/Csharp.png'/>
              <Box imgnom='Java' imglink='./images/java.png'/>
              <Box imgnom='PHP' imglink='./images/php.png'/>
          </div>
        </div>
        <TypeActivite title='Multimédia'/>
        <div className="container">
          <div className="row">
              <Box imgnom='Libre Office Impress' imglink='./images/LOI.jpg'/>
              <Box imgnom='Libre Office Calc' imglink='./images/LOC.jpg'/>
              <Box imgnom='LibreOfficeWriter' imglink="./images/LOW.jpg"/>
          </div>
        </div>

        <TypeActivite title='Conférence'/>
        <div className="container">
          <div className="row">
              <Box imgnom='Intelligence Artificielle' imglink="./images/OpenAI.png"/>
              <Box imgnom='Sécurité Informatique' imglink="./images/ITsecurity.png"/>


          </div>
        </div>
      </div>

    )
  }
}


export default ListeActivite;
