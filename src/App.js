import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import CallToAction from "./ctaButton.png";
import "./App.css";
import MapContainer from "./MapContainer";
import Side from "./Side";
import Modal from "./Modal";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  //    [    current state  , function how to change state ] = initial state
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="MainLogoText">
          <u>Street Eat</u>
        </h1>
        <h5 className="TagLine">Word on the Street for where to Eat </h5>
      </header>
      <div className="container">
        <MapContainer
          setSelectedRestaurant={setSelectedRestaurant}
          selectedRestaurant={selectedRestaurant}
          setRestaurants={setRestaurants}
        />
        <Side
          restaurants={restaurants}
          setSelectedRestaurant={setSelectedRestaurant}
        />

      </div>
    </div>
  );
}
/*  WAS BELOW <Side />

       <Modal
          restaurants={restaurants}
          setSelectedRestaurant={setSelectedRestaurant}
          selectedRestaurant={selectedRestaurant}
        /> 

*/

export default App;
