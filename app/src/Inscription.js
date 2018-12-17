import React, {Component} from "react";

class Inscription extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        prenom: '', 
        adresse: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.name});
      this.setState({prenom: event.target.prenom});
      this.setState({adresse: event.target.adresse});
    }
  
    handleSubmit(event) {
      alert('Nom: ' + this.state.name + ' Prénom: '+this.state.prenom+ ' Adresse: '+this.state.adresse);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Prénom:
            <input type="text" value={this.state.prenom} onChange={this.handleChange} />
          </label>
          <label>
            Adresse mail:
            <input type="text" value={this.state.adresse} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Inscription;