import React from "react";
import "./App.css";

//console.log(results);

function RestaurantItem({ restaurant, setSelectedRestaurant }) {
  function onClick() {
  //  console.log(restaurant.name, " was clicked");
   



// if (restaurant.ratings === undefined) {
//   console.log(restaurant.place_id)
//   /*
//   https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=name,rating,photos,price_level,review&key=AIzaSyAl7rJskwTxg3fIJ3wKhN_KT0emk1LlcI0

// */

//  // console.log("undefined restaurant")
//   return
// }

    setSelectedRestaurant(restaurant);
   // console.log("restaurant is this")
   // console.log(restaurant)
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

//onClick={setModalState()=>setModalState(true)}
