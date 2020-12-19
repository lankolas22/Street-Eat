import React from "react";
import RestaurantItem from "./RestaurantItem";
import { restaurantData } from "./Reviews";

function Side() {
  return (
    <aside className="Aside">
      <div className="RestaurantList">
        {restaurantData.map((Reviews) => {
          // console.log(Reviews);
          return (
            // props
            <RestaurantItem restaurant={Reviews} />
          );
        })}
      </div>
    </aside>
  );
}

export default Side;
