import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


///// mock api
const apiColors = ['olive', 'wheat', 'tomato', 'pink', 'burlywood', 'aquamarine', 'tan', 'white', 'brown', 'beige']

const getColorsIndex = (colorsArray) => { //function that gets index within array
  return Math.floor(Math.random()*colorsArray.length)
}

const getColor = () => {
  const colorPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(apiColors[getColorsIndex(apiColors)])
        reject('there was an error') // will never reach
      }, 3000)
  })
  return colorPromise
}

function App() {

  const [blueBoxes, setBlueBoxes] = useState(['none'])

  const addBox = async () => {
    // if you have a promise rejection that's not being caught (catch or .catch), app will crash
    try {
      let color = 'none'
      setBlueBoxes([...blueBoxes, `${color}`]) // React stale closure hooks
      const insertionIndex = blueBoxes.length
      color = await getColor()
      setBlueBoxes(prev => {
        const arr = [...prev]
        arr.splice(insertionIndex, 1, `${color}`)
        return arr
      })
    }
    catch (errMessage){
      alert(errMessage) // make alert here
    }
  }

  const removeBox = () => {
    setBlueBoxes([...blueBoxes.slice(0, blueBoxes.length-1)])
  }

  // API delivers a color (already randomized) from ['red', 'orange', 'yellow', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <h1>Colored Boxes</h1>
        <div>
          {blueBoxes.map((color, index) => {
            // async function returning a promise that we need to await before rendering color
            if ((index + 1) % 2 === 0) {
              return <div className="box" onClick={removeBox} style={{backgroundColor: color}}>
                {color === 'none' && <img src={logo} className="App-logo" alt="logo" />}
              </div>
            } else {
              return <div className="box" onClick={addBox} style={{backgroundColor: color}}>
                {color === 'none' && <img src={logo} className="App-logo" alt="logo" />}
              </div>
            }
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;

// every even numbered box needs to be able to delete itself
// meanwhile odd numbered will add

// randomly generate color on box from 5 that simulates an api. I want it to return a function with a 3 second delay before getting new box
// every time you make a new box, you need to know what the color is
// freedom to choose format api is delivering in