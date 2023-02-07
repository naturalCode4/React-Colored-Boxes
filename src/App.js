import React from 'react';
import './App.css';
import RickAndMorty from './components/RickAndMortyPractice/RickAndMorty';
import ColoredBoxes from './components/ColoredBoxes';
import ApiCallPractice from './components/ApiCallPractice/ApiCallPractice';


function App() {
  return (
    <div className="App">
      <h1>React Practice</h1>
      <div className="App-content">
        <RickAndMorty/>
        <ColoredBoxes/>
        <ApiCallPractice/>
      </div>
    </div>
  )
}

export default App;

