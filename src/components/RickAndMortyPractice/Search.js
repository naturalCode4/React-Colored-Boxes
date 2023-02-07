import React, {useState} from "react";
import { getRickAndMortyCharacterBasedOnId } from "../../apiUtil";

function Search({inputText, setInputText, characters, setCharacters, clearStorage}) {
    
    const [errorOnFetch, setErrorOnFetch] = useState(false)

    const checkIfCharacterCachedById = () => {
        if (!characters[0]) return false
        for (let i=0; i<characters.length; i++) {
            if (inputText === characters[i].id) {return true}
        }
        return false
    }

    const handleFetchButtonClick = async () => {
        console.log('handleFetchButtonClick')
        try {
            if (inputText) {
                const newFetchedCharacter = await getRickAndMortyCharacterBasedOnId(inputText)
                if (checkIfCharacterCachedById()) {
                    console.log('repeat')
                    console.log('slice result', [...characters.slice(0, inputText), newFetchedCharacter.data, ...characters.slice(inputText+1, characters.length)])
                    setCharacters([...characters.slice(0, inputText-1), newFetchedCharacter.data, ...characters.slice(inputText, characters.length)])
                    window.localStorage.setItem('characters', JSON.stringify([...characters.slice(0, inputText-1), newFetchedCharacter.data, ...characters.slice(inputText, characters.length)]));
                }
                else {
                    console.log('new character')
                    setCharacters([...characters, newFetchedCharacter.data])
                    window.localStorage.setItem('characters', JSON.stringify([...characters, newFetchedCharacter.data]));
                }
            }
        } catch (error) {
            console.log('error on handleFetchButtonClick ==>', error)
            setErrorOnFetch(true)
        }
    }

    const handleChangeInputText = e => {
        setInputText(+e.target.value)
        if (+e.target.value === 0) setInputText('')
    }

    return (
        <div>
            <input
                placeholder="enter R&M character by id"
                onChange={e => handleChangeInputText(e)}
                value={inputText}
                type="number"
                min="0"
                max="826"
            />
            {!checkIfCharacterCachedById() && <button onClick={handleFetchButtonClick}>Fetch</button>}
            {checkIfCharacterCachedById() && <button onClick={handleFetchButtonClick}>Refetch</button>}
            {errorOnFetch && <button onClick={() => setErrorOnFetch(false)}>Retry Fetch</button>}
            <button onClick={clearStorage}>Clear</button>
        </div>
    )
}

export default Search

// search box where user enters ids (numbers only)
    // as they type, filtering characters by id 
// when they hit search
    // check if user (by id) is already in cache
    // if and only if not, hit "fetch" button to get character