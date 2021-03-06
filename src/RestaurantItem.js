import React from "react";
import "./App.css";

function RestaurantItem({ restaurant, setSelectedRestaurant}) {
  function onClick() {
    setSelectedRestaurant(restaurant);
  }
  return (
    <div className="restaurantItem" onClick={onClick} id={restaurant.place_id}>
      <h2 className="AsideHeader">{restaurant.name}</h2>

      {"\n"}

      <p className="AsideAddress">{restaurant.vicinity} </p>
    </div>
  );
}

export default RestaurantItem;
