import React from 'react';

function CharacterCard(props) {
  const { name } = props.character;
  console.log(name);
  return <div>{name}</div>;
}

export default CharacterCard;
