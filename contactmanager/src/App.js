import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Contact name = "Shaun Dawson"
      email = "shaund@gmail.com" phone="347-300-1243"
      />
      <Contact
      name = "Nandi Alman"
      email= "nandi@gmail.com"
      phone = "123-456-4762"
      />
      </div>
    );
  }
}

export default App;
