import React from "react";
import RestaurantItem from "./RestaurantItem";
import { restaurantData } from "./Reviews";
import {getRestaurants} from "./App";

function Side() {
  /*
  function getRestaurants(){
    console.log("restaurants:")
    console.log(restaurants)
  } */
  return (
    <div className="Aside">
      <div className="RestaurantList">
        {restaurantData.map((Reviews) => {
          // console.log(Reviews);
          return (
            // props
            <RestaurantItem restaurant={Reviews} />
          );
        })}
        {restaurants.map((restaurants) => {
          return (
            // props
            <RestaurantItem restaurant={restaurants} />
          );
        })}
      </div>
    </div>
  );
}
//console.log({restaurants});
export default Side;

/*

                 {Array.map((restaurants) => {
          return (
            // props
            <RestaurantItem restaurant={restaurants} />
          );
        })}
*/
