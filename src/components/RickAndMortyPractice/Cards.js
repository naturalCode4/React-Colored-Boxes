import React from "react"
import Card from "./Card"

function Cards({filteredCharacters, characters, setCharacters}) {

    const handleRemoveButtonClick = (id) => {
        const charactersWithOneRemoved = [...characters.slice(0, id-1), ...characters.slice(id, characters.length)]
        setCharacters(charactersWithOneRemoved)
        window.localStorage.setItem('characters', JSON.stringify([...characters.slice(0, id-1), ...characters.slice(id, characters.length)]));
    }


    return (
        <div>
            {filteredCharacters.map((filteredCharacter, index) => {
                return (
                    <div>
                        <Card
                            filteredCharacter={filteredCharacter}
                            handleRemoveButtonClick={handleRemoveButtonClick}
                            key={filteredCharacter.id.toString()}
                        />
                        <br></br><br></br>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards