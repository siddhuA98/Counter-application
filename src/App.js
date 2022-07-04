import React, {Component} from 'react';
import MainCounter, { Counter } from './components/counter/counter';
import Reset from './components/counter/counter'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainCounter></MainCounter>
      </header>
    </div>
  );
}



export default App;
