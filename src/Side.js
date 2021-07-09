import React, { useState } from "react";
import RestaurantItem from "./RestaurantItem";
import Filter from "./Filter";

function Side({ restaurants, setSelectedRestaurant, setButtonBottom, setButtonTop }) {

  const [filterValue, setFilterValue] = useState(null);
  let threePlusArr = [];
  let fourPlusArr = [];
  let filteredRestaurants = restaurants;

  if (filterValue === "fourPlus") {
    fourPlusArr = [];
    for (let i = 0; i < restaurants.length; i++) {
      let ratingNum = restaurants[i].rating;
      if (ratingNum >= 4) {
        fourPlusArr.push(restaurants[i]);
      }
    }
    filteredRestaurants = fourPlusArr;
  }
  if (filterValue === "threePlus") {
    threePlusArr = [];
    for (let i = 0; i < restaurants.length; i++) {
      let ratingNum = restaurants[i].rating;
      if (ratingNum >= 3) {
        threePlusArr.push(restaurants[i]);
      }
    }
    filteredRestaurants = threePlusArr;
  }

  if (filterValue !== "threePlus" && filterValue !== "fourPlus") {
    filteredRestaurants = restaurants;
  }

  return (
    <div className="Aside">
      <Filter setFilterValue={setFilterValue} />
      
      <div className="RestaurantList">

        {/*live data*/}
        {filteredRestaurants.map((restaurants) => {
          return (
            <RestaurantItem
              restaurant={restaurants}
              setSelectedRestaurant={setSelectedRestaurant}
              setButtonBottom={setButtonBottom}
              setButtonTop={setButtonTop}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Side;
