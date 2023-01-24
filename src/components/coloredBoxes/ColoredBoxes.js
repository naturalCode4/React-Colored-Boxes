import logo from '../../logo.svg';
import React, { useState } from 'react';
import {getColor} from '../../ColorsApiMock.js'

function ColoredBoxes() {

    const [blueBoxes, setBlueBoxes] = useState(['blue'])

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
        <hr></hr>
        <h1>Colored Boxes</h1>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
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
      </div>
    );
}

export default ColoredBoxes

// every even numbered box needs to be able to delete itself
// meanwhile odd numbered will add

// randomly generate color on box from 5 that simulates an api. I want it to return a function with a 3 second delay before getting new box
// every time you make a new box, you need to know what the color is
// freedom to choose format api is delivering in