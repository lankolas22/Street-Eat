import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import CallToAction from "./ctaButton.png";
import "./App.css";
import MapContainer from "./MapContainer";
import Side from "./Side";
import Modal from "./Modal";

function App() {
  const [restaurants, setRestaurants] = useState([]); 
 // const [modalState, setModalState] = useState(false);

 //    [    current state  , function how to change state ] = initial state
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="MainLogoText">
          <u>Street Eat</u>
        </h1>
        <p className="TagLine">Word on the Street for where to Eat</p>
        
      </header>
      <div className="container">
        <MapContainer setRestaurants={setRestaurants}/>
        <Side restaurants={restaurants} setSelectedRestaurant= {setSelectedRestaurant}/>
        <Modal restaurants={restaurants} selectedRestaurant= {selectedRestaurant} setSelectedRestaurant= {setSelectedRestaurant}/>
      </div>
      
    </div>
  );
}


export default App;

