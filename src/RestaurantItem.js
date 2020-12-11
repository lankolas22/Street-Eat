import React from 'react';
import "./App.css";
import { restaurantData } from "./Reviews";



function RestaurantItem({restaurant}) {
  return (
    <div className="restaurantItem" >
     
             
            <h2 className="AsideHeader">{restaurant.restaurantName}</h2>

            {"\n"}
           
            <p className="AsideAddress">{restaurant.address} </p>

            
    </div>
  );
}

export default RestaurantItem;
