import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Card } from 'semantic-ui-react';
import CharacterCard from './components/CharacterCard';
import CharactedCardsGroup from './components/CharacterCardsGroup';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.co/api/people').then(res => {
      setCharacters(res.data.results);
    });
  }, []);

  if (characters) characters.forEach(character => console.log(character));

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharactedCardsGroup characters={characters}/>
    </div>
  );
};

export default App;
