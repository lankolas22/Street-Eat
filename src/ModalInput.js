import React from "react";
import "./App.css";
import { restaurantData } from "./Reviews";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";

function ModalInput({ restaurant }) {
  console.log(restaurant);
  return (
    <div className="reviewItem" className={restaurant.ratings.RatingID}>
      <h2 className="ModalHeader">{restaurant.restaurantName}</h2>

      {restaurant.ratings.map((rating) => (
        <p key={rating.ratingID}>
          {" "}
          <img
            src={`${rating.stars}`}
            alt="RESTAURANT RATING"
            class="ratingPic"
          ></img>
          {`${rating.comment}`}
        </p>
      ))}
    </div>
  );
}
let ratingSrc = document.getElementsByClassName("ratingPic").src;
console.log(ratingSrc);
/*
if (ratingSrc === 1) {
  ratingSrc === one;
}
if (ratingSrc === 2) {
  ratingSrc === two;
}
if (ratingSrc === 3) {
  ratingSrc === three;
}
if (ratingSrc === 4) {
  ratingSrc === four;
} else {
  ratingSrc === five;
}  
*/
export default ModalInput;

//change the 4 STAR to show actual stars the number of which is determined by rating.stars and then style the stars
//maybe five custom same size images would be easier so
