import React from 'react';
import { Card, List } from 'semantic-ui-react';
import styled from 'styled-components';
import CharacterInfoListItem from './CharacterInfoListItem';

function CharacterCard(props) {
  const { name, birth_year, gender, species, hair_color, height, mass, skin_color, eye_color } = props.character;
  const lang = {
    species: "Species",
    hairColor: "Hair Color",
    height: "Height",
    mass: "Mass",
    skinColor: "Skin Color",
    eyeColor: "Eye Color",
  }
  const toUpperCase = word => word.charAt(0).toUpperCase() + word.slice(1);

  const StyledCard = styled(Card)`
    text-align: left;
  `;

  return (
    <StyledCard>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{gender === "n/a" ? "N/A" : toUpperCase(gender)}, {birth_year}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <List divided verticalAlign='middle'>
          <CharacterInfoListItem title={lang.species} info={species}></CharacterInfoListItem>
          <CharacterInfoListItem title={lang.hairColor} info={toUpperCase(hair_color)}></CharacterInfoListItem>
          <CharacterInfoListItem title={lang.height} info={height}></CharacterInfoListItem>
          <CharacterInfoListItem title={lang.mass} info={mass}></CharacterInfoListItem>
          <CharacterInfoListItem title={lang.skinColor} info={toUpperCase(skin_color)}></CharacterInfoListItem>
          <CharacterInfoListItem title={lang.eyeColor} info={toUpperCase(eye_color)}></CharacterInfoListItem>
        </List>
      </Card.Content>
    </StyledCard>
  );
}

export default CharacterCard;
