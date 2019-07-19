import React from 'react';
import { Card } from 'semantic-ui-react';
import CharacterCard from './CharacterCard'; 

function CharactedCardsGroup({characters}) {
    return (
        <Card.Group centered itemsPerRow={5}>
        {characters ? (
          characters.map(character => <CharacterCard character={character} />)
        ) : (
          <h2>Loading...</h2>
        )}
        </Card.Group>
    )
}

export default CharactedCardsGroup;