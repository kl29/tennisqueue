import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from "./Components/UserInput.js";
import Queue from "./Components/Queue.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Plano-West Tennis Queue
        </h1>

        <UserInput/>
        <Queue />
        <p>This site was brought to you by an anonymous Plano West grad</p>
      </header>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built with ReactJS
      </a>
    </div>
  );
}

export default App;
