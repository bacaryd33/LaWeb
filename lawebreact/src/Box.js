import React, { Component } from 'react';
import './App.css';
import {Button,Modal} from 'react-bootstrap';

class Box extends Component {

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
      <div className="Box">

      <Button id="BtAct" onClick={this.handleShow}>
        {this.props.imgnom}
      </Button>

      <a className="thumbnail">
        <img id="imgbox" src={this.props.imglink} alt="Image"/>
      </a>

      <Modal show={this.state.show} onHide={this.handleClose}>

        <Modal.Body>
          <h4>{this.props.modnom} : {this.props.modtitre}</h4>
          <h4>Animateur : {this.props.modanimateur}</h4>
          <h4>Date : {this.props.moddate}</h4>
          <h4>Places disponible : {this.props.modnbplace} </h4>
          <hr/>
          <h4>Description :</h4>
          <p>
            {this.props.moddescription}
          </p>

        </Modal.Body>
        <Modal.Footer>

          <Button id="Btinscription">Inscription</Button>
          <Button onClick={this.handleClose}>Close</Button>

        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default Box;
