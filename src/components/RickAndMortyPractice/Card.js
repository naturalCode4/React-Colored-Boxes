import React from "react"

function Card({filteredCharacter, handleRemoveButtonClick}) {

    return (
        <div>
            <img src={filteredCharacter.image} alt={`Couldn't get ${filteredCharacter.name}'s image`}/>
            <p>id: {filteredCharacter.id}</p>
            <p>name: {filteredCharacter.name}</p>
            <p>species: {filteredCharacter.species}</p>
            <p>gender: {filteredCharacter.gender}</p>
            <p>origin: {filteredCharacter.location.name}</p>
            <button onClick={handleRemoveButtonClick}>Remove {filteredCharacter.name}</button>
        </div>
    )
}

export default Card