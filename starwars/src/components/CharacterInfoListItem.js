import React from 'react';
import { List } from 'semantic-ui-react';

function CharacterInfoListItem({ title, info }) {
  return (
    <List.Item>
      <List.Content floated="right">{info}</List.Content>
      <List.Content>{title}</List.Content>
    </List.Item>
  );
}

export default CharacterInfoListItem;
