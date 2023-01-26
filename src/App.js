import React, { useState } from 'react';
import './App.css';
import ColoredBoxes from './components/ColoredBoxes';
import ApiCallPractice from './components/ApiCallPractice/ApiCallPractice';


function App() {
  return (
    <div className="App">
      <h1>React Practice</h1>
      <div className="App-content">
        <ColoredBoxes/>
        <ApiCallPractice/>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>
  )
}

export default App;

