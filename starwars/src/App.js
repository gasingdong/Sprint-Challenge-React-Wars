import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Pagination } from 'semantic-ui-react';
import CharactedCardsGroup from './components/CharacterCardsGroup';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.co/api/people?page=${currentPage}`).then(res => {
      console.log(res);
      setCharacters(res.data.results);
    });
  }, [currentPage]);

  if (characters) characters.forEach(character => console.log(character));

  function onPageChange(e, { activePage }) {
    setCurrentPage(activePage);
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharactedCardsGroup characters={characters}/>
      <Pagination defaultActivePage={1} totalPages={10} onPageChange={onPageChange}></Pagination>
    </div>
  );
};

export default App;
