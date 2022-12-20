import React from 'react';
import ReactDOM from 'react-dom/client';
import './themeDarcly.css';
import App from './App';

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();

  return body;
}

getResource('https://swapi.dev/api/people/1/')
  .then(body => console.log(body));

// fetch('https://swapi.dev/api/people/1/')
//   .then(response => response.json())
//   .then(body => console.log(body));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


