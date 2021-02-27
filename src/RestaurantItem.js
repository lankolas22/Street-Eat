import React from "react";
import "./App.css";
import MapContainer from "./MapContainer";
import { restaurantData } from "./Reviews"; 
import {results} from "./MapContainer";

//console.log(results);

function RestaurantItem({ restaurant }) {
  return (

    <div className="restaurantItem" id={restaurant.id}>
      <h2 className="AsideHeader">{restaurant.restaurantName}</h2>

      {"\n"}

      <p className="AsideAddress">{restaurant.address} </p>
    </div>




















  );
}

export default RestaurantItem;
