import React from 'react';

export function CharacterList({ starwarsChars, getCharInfo }) {
  return (
   <div className='div card'>
      {
        starwarsChars.map(character =>
          <div key={character.name}>
            <h2>{character.name}</h2>
            <p>Created: {character.created}</p>
            <p>Birth year: {character.birth_year}</p>
            <p>Eye color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
            <p>Mass: {character.mass}</p>
            <p>Skin color: {character.skin_color}</p>
            <p>height: {character.height}</p>
            <p>hair color: {character.haircolor}</p>
            <p>Species: {getCharInfo(character.species)}</p>
            <p>Edited: {character.edited}</p>
          </div>
        )
      } 
   </div>
  );
}

export default CharacterList;
