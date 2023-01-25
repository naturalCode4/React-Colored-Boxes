import React, { useState } from 'react';
import './App.css';
import ColoredBoxes from './components/ColoredBoxes';
import ApiCallPractice from './components/ApiCallPractice';


function App() {
  return (
    <div className="App">
      <h1>React Practice</h1>
      <header className="App-header">
        <ColoredBoxes/>
        <ApiCallPractice/>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </header>
    </div>
  )
}

export default App;

