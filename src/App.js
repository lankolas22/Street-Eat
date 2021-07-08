import React, { useState } from "react";
import logo from "./logo.png";
import "./App.css";
import MapContainer from "./MapContainer";
import { restaurantData } from "./Reviews";
import Side from "./Side";

function App() {
  const [restaurants, setRestaurants] = useState(restaurantData);
  //    [current state, function how to change state] = initial state
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  //console.log(restaurants);
  // const [buttonTop, setButtonTop] = useState(true);
  // const [buttonBottom, setButtonBottom] = useState(null);

  const addReviewToRestaurant = (restaurantPlaceId, rating, review) => {
    const updatedRestaurants = restaurants.map((r) => {
      if (r.place_id === restaurantPlaceId) {
        console.log(r);

        if (selectedRestaurant.restaurantType === "dummy") {
          console.log("is dummy")
          r.ratings = [
            ...r.ratings,
            {
              ratingID: r.ratings.length + 1,
              rating: rating,
              text: review,
            },
          ];
          if (selectedRestaurant.ratings[0].ratingID === null ) {
            r.ratings.shift();
          }
        } else {
          r.reviews = [
            ...r.reviews,
            {
              ratingID: r.reviews.length + 1,
              rating: rating,
              text: review,
            },
          ];
        }


      }

      return r;
    });
    setRestaurants(updatedRestaurants);
    console.log("found restaurant", updatedRestaurants);
    console.log(review);
  };
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
      <div className="container" onContextMenu={(e) => e.preventDefault()}>
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
          addReviewToRestaurant={addReviewToRestaurant}
          //  setButtonBottom={setButtonBottom}
          //  setButtonTop={setButtonTop}
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
