import React from "react";
import RestaurantItem from "./RestaurantItem";
import { restaurantData } from "./Reviews";


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


      </div>
    </div>
  );
}

export default Side;

/*

        {Array.map((results) => {
          return (
            // props
            <RestaurantItem restaurant={results} />
          );
        })}
*/
