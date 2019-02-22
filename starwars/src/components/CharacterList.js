import React from 'react';

export function CharacterList({ starwarsChars, getCharInfo }) {
  return (
   <div className='div card'>
      {
        starwarsChars.map(character =>
          <div key={character.name}>
            <h2>{character.name}</h2>
            <p>Birth year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {getCharInfo(character.species)}</p>
          </div>
        )
      }
   </div>
  );
}

export default CharacterList;
