import React, { useState } from "react";
import RestaurantItem from "./RestaurantItem";
import { restaurantData } from "./Reviews";
import Filter from "./Filter";

function Side({ restaurants, setSelectedRestaurant }) {
  /* console.log("side restaurants", restaurants);
  console.log(restaurants.rating);
  console.log("this filter value", filterValue);
  console.log("side modal state", setSelectedRestaurant); */
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
    console.log("three Plus !");
    threePlusArr = [];
    for (let i = 0; i < restaurants.length; i++) {
      let ratingNum = restaurants[i].rating;
      if (ratingNum >= 3) {
        threePlusArr.push(restaurants[i]);
      }
    }
    filteredRestaurants = threePlusArr;
  }

  if (filterValue != "threePlus" && filterValue != "fourPlus") {
    filteredRestaurants = restaurants;
  }
  console.log("loop test");
  console.log("filtered Restaurants Loaded", filteredRestaurants);
  //console.log(fourPlusArr);
  /*   */
  return (
    <div className="Aside">
      <Filter setFilterValue={setFilterValue} />
      <div className="RestaurantList">
        {/*   //dummy data 
        
        {restaurantData.map((Reviews) => {
          // console.log(Reviews);
          return (
            // props
            <RestaurantItem
              restaurant={Reviews}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          );
        })} */}
        {/*live data*/}
        {filteredRestaurants.map((restaurants) => {
          return (
            // props
            <RestaurantItem
              restaurant={restaurants}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Side;


