import React from "react";
import "./App.css";
import { restaurantData } from "./Reviews";

function ModalInput({ restaurant }) {
  console.log(restaurant);
  return (
    <div className="reviewItem" className= {restaurant.ratings.RatingID}>
      <h2 className="ModalHeader">{restaurant.restaurantName}</h2>

      {restaurant.ratings.map((rating) => (
    <p key={rating.ratingID}> <img src= {`${rating.stars}.png`} alt="RESTAURANT RATING"></img>{`   ${rating.comment}`}</p>
  ))}


    </div>
  );
}

export default ModalInput;

//change the 4 STAR to show actual stars the number of which is determined by rating.stars and then style the stars
//maybe five custom same size images would be easier so 
