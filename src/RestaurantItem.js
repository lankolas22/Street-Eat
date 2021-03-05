import React from "react";
import "./App.css";


//console.log(results);

function RestaurantItem({ restaurant }) {
function modalFunction(){
  console.log(restaurant.name, " was clicked")
}
  return (

    <div className="restaurantItem" onClick={modalFunction} id={restaurant.id}>
      <h2 className="AsideHeader">{restaurant.name}</h2>

      {"\n"}

      <p className="AsideAddress">{restaurant.vicinity} </p>
    </div>




















  );
}

export default RestaurantItem;
