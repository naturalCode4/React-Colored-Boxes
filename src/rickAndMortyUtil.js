export const saveCharactersToLocalStorage = (updatedCharacters) => {
    window.localStorage.setItem('characters', JSON.stringify(updatedCharacters));
}