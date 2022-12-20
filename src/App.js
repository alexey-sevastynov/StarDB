import React from "react";

//styles
import './app.css';

//components
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import PersonDatails from "./components/PersonDatails";
import RandomPlanet from "./components/ReandomPlanet";

function App() {


  return (
    <div className="App">
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDatails />
        </div>
      </div>
    </div>
  );
}

export default App;
