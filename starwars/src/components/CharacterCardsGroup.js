import React from 'react';
import { Card } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';

function CharactedCardsGroup({ characters }) {
  return (
    <Card.Group centered itemsPerRow={5}>
      { 
        characters.map(character => <CharacterCard character={character} />)
      }
    </Card.Group>
  );
}

export default CharactedCardsGroup;
