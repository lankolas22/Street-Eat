import React from "react";
import RestaurantItem from "./RestaurantItem";
import { restaurantData } from "./Reviews";
import Filter from "./Filter";

function Side({ restaurants, setSelectedRestaurant }) {
  //console.log("side restaurants", restaurants);
  //console.log("side modal state", setSelectedRestaurant);

  return (
    <div className="Aside">
      <Filter />
      <div className="RestaurantList">
        {restaurantData.map((Reviews) => {
          // console.log(Reviews);
          return (
            // props
            <RestaurantItem
              restaurant={Reviews}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          );
        })}

        {restaurants.map((restaurants) => {
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

/*



        {restaurants.map((restaurants) => {
          return (
            // props
            <RestaurantItem restaurant={restaurants} />
          );
        })}


*/
