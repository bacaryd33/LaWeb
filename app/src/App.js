import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inscription from "./Inscription.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="bg-dark">
          <nav className="navbar bg-dark">
            <span className="navbar-brand text-secondary">LaWeb</span>
          </nav>
        </header>

        <Inscription/>
      </div>
    );
  }
}

export default App;
