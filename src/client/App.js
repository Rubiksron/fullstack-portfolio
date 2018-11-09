import React from 'react';
import Pokemon from './components/Pokemon';
import './app.css';
import Posts from './components/Posts';
// import PostForm from './components/Postform';

const App = () => (
  <div>
    <h1>Pokemon - links to stats (json):</h1>
    <div id="pokemonContainer">
      <Pokemon />
    </div>
    <h1>JSON Placeholder API call - Lorem Ipsum!</h1>
    <div id="jsonContainer">
      <Posts />
    </div>
  </div>
);


export default App;
