import React from "react";
import RestaurantItem from "./RestaurantItem";
import { restaurantData } from "./Reviews";
//import { restaurants } from "./MapContainer";

function Side() {
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
