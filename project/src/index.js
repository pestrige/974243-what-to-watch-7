import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FILMS_COUNT = 20;
const filmsList = new Array(FILMS_COUNT).fill('').map((item) => item = {id: Math.random()});

ReactDOM.render(
  <React.StrictMode>
    <App films = {filmsList}/>
  </React.StrictMode>,
  document.getElementById('root'));
