import React from 'react';

export function CharacterList({ starwarsChars }) {
  return (
<div className="main">
      {starwarsChars.map(character => (
        <div className="card" key={character.name}>
         <h2>{character.name}</h2>
           
            <p>Birth year: {character.birth_year}</p>
            <p>Eye color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
            <p>Mass: {character.mass}</p>
            <p>Skin color: {character.skin_color}</p>
            <p>height: {character.height}</p>
            <p>hair color: {character.haircolor}</p>
          </div>
      ))}

    </div>
      )
    }

      export default CharacterList;
// created another component