import React, { useState } from "react";
import logo from "./logo.png";
import "./App.css";
import MapContainer from "./MapContainer";
import { restaurantData } from "./Reviews";
import Side from "./Side";
//import Modal from "./Modal";

function App() {
  const [restaurants, setRestaurants] = useState(restaurantData);

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

        <p className="AddMessage">
          &nbsp; Don't see your favourite takeaway? Right click on the map to
          add it! &nbsp;
        </p>
      </header>
      <div className="container">
        <MapContainer
          setSelectedRestaurant={setSelectedRestaurant}
          restaurants={restaurants}
          selectedRestaurant={selectedRestaurant}
          addRestaurant={(restaurant) => {
            setRestaurants([...restaurants, restaurant]);
          }}
          setRestaurants={(restaurants) => {
            setRestaurants([...restaurantData, ...restaurants]);
          }}
        />
        <Side
          restaurants={restaurants}
          setSelectedRestaurant={setSelectedRestaurant}
        />
      </div>
    </div>
  );
}

export default App;
