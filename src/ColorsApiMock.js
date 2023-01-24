///// mock api

export const getColor = () => {

    const apiColors = ['olive', 'wheat', 'tomato', 'pink', 'burlywood', 'aquamarine', 'tan', 'white', 'brown', 'beige']

    const getColorsIndex = (colorsArray) => { //function that gets index within array
        return Math.floor(Math.random()*colorsArray.length)
    }
    
    const colorPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(apiColors[getColorsIndex(apiColors)])
        reject('there was an error') // will never reach
        }, 3000)
    })
    return colorPromise
}