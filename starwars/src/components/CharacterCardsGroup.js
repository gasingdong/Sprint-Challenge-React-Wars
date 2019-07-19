import React from 'react';
import { Card } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

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
