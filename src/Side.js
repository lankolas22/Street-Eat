import React from "react";
import RestaurantItem from "./RestaurantItem";
import { restaurantData } from "./Reviews";


function Side({ restaurants }) {
  console.log("side restaurants", restaurants);

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

export default Side;

/*



        {restaurants.map((restaurants) => {
          return (
            // props
            <RestaurantItem restaurant={restaurants} />
          );
        })}


*/
