import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="Shaun Dawson"
            email="shaund@gmail.com"
            phone="347-300-1243"
          />
          <Contact
            name="Nandi Alman"
            email="nandi@gmail.com"
            phone="123-456-4762"
          />
        </div>
      </div>
    );
  }
}

export default App;
