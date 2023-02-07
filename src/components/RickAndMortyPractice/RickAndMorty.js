import React, {useState, useEffect} from "react"
import Search from "./Search";
import Cards from "./Cards";

function RickAndMorty() {

    const [characters, setCharacters] = useState([])
    const [inputText, setInputText] = useState('')


    const clearStorage = () => {
        window.localStorage.clear()
        setCharacters([])
    }

    useEffect(() => {
        const storedCharacters = JSON.parse(window.localStorage.getItem('characters'))
        if (storedCharacters) {
            setCharacters([...storedCharacters]);
        }
    }, []);


    console.log('inputText', inputText)
    let filteredCharacters
    if (inputText) {
        filteredCharacters = characters.filter(character => +character.id === +inputText)
    } else {filteredCharacters = [...characters]}
    console.log('characters', characters)
    console.log('filteredCharacters', filteredCharacters)

    return (
        <div>

            <h1>Rick and Morty</h1>
            <Search
                inputText={inputText}
                setInputText={setInputText}
                characters={characters}
                setCharacters={setCharacters}
                clearStorage={clearStorage}
            />
            <Cards
                filteredCharacters={filteredCharacters}
                characters={characters}
                setCharacters={setCharacters}
            />
        </div>
    )
}

export default RickAndMorty