import React, { Component } from 'react';
import './App.css';
import TypeActivite from './TypeActivite';
import Box from './Box.js';
import {Button,Modal} from 'react-bootstrap'
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
        <p>Click to get the full Modal experience!</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <hr />

            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        <TypeActivite title='Développement'/>
        <div className="container">
          <div className="row">
          <Modal>
          <Button onClick={this.handleClose}>Close</Button>
              <Box imgnom='Python' imglink='./images/python.png' onClick={this.handleShow}/>
              </Modal>
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
