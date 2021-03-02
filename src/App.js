import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import CallToAction from "./ctaButton.png";
import "./App.css";
import MapContainer from "./MapContainer";
import Side from "./Side";

function App() {
  const [restaurants, setRestaurants] = useState([]); 
  useEffect(() => {
    getRestaurants();
  }, [restaurants]);
  function getRestaurants(){
    console.log("restaurants:")
    console.log(restaurants)
  }
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
        <Side restaurants={restaurants} />
      </div>
      
    </div>
  );
}


export default App;

