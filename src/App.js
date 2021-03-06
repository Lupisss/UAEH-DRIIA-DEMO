import React, { Component } from 'react';
// import logo from './logo.svg';
import {Routes} from "./Routes";
import NavBar from "./components/NavBar/NavBarContainer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <div className="Main-route">
            <Routes/>
          </div>
      </div>
    );
  }
}

export default App;
