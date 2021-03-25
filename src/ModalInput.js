import React, { useState, useEffect } from "react";
import "./App.css";
import { restaurantData } from "./Reviews";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";

function ModalInput({ restaurant, selectedRestaurant }) {
  //console.log("PLACE_ID ", selectedRestaurant, " was clicked");

  /////////////////////////////////////////////

  function convert(num) {
    if (num === 1) {
      return one;
    }
    if (num === 2) {
      return two;
    }
    if (num === 3) {
      return three;
    }
    if (num === 4) {
      return four;
    }
    if (num === 5) {
      return five;
    } else {
      return;
    }
  }
  return (
    //const shownRestaurant =

    <div className="reviewItem" className={restaurant.ratings.RatingID}>
      {""}

      <h1 className="ModalHeader">{restaurant.name}</h1>

      <img
        className="modalImage"
        src={restaurant.image}
        alt="image of restaurant"
      />

      {restaurant.ratings.map((rating) => (
        <div>
          <p key={rating.ratingID}>
            {""}
            <blockquote>
              <img src={convert(rating.rating)} className="ratingStars"></img>

              <br />
              {`${rating.comment}`}
            </blockquote>
          </p>
        </div>
      ))}
      <hr />
    </div>
  );
}

//console.log("passed down", selectedRestaurant);
//   passes down state of null or clicked restaurant

//console.log("modal restaurants", restaurant);

///////////////////////////////////////////
/*

            <blockquote>
              <span className="ratingStars">
                {`${rating.rating}` + " stars"}
              </span>
              {": "}

              {`${rating.comment}`}
            </blockquote>


///////////////////////////////////////////////////////////////////////////////////
  const [starsImage, setStarsImage] = useState(null);
  

  useEffect(() => {
    setImage();
  }, [restaurant]);

  function setImage(restaurant) {
    
    if (!{restaurant}) {
      console.log("setImage not ready");
      return;
    }
    console.log("setImage Ready");
   }
*/

//let ratingSrc = document.getElementsByClassName("ratingPic").src;
//console.log(ratingSrc);
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
