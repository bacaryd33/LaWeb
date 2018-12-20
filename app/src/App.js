import React, { Component } from 'react';

import './App.css';

import Section from './Section.js'

class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="bg-danger">
        <nav className="navbar bg-danger" classeName="text-center">
            <span className="navbar-brand text-secondary"  >LaWeb</span>
        </nav>
        </header>
        <Section></Section>


      </div>
    );
  }
}

export default App;
