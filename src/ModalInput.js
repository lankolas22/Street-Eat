import React from "react";
import "./App.css";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import unrated from "./unrated.png"

function ModalInput({  selectedRestaurant }) {
  //console.log("PLACE_ID ", selectedRestaurant, " was clicked");

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
      return unrated;
    }
  }

  return (

    <div className="reviewItem" className={selectedRestaurant.ratings.ratingID}>
      {""}

      <h1 className="ModalHeader">{selectedRestaurant.name}</h1>

      <img
        className="modalImage"
        src={selectedRestaurant.image}
        alt="image of restaurant" 
      />

      {selectedRestaurant.ratings.map((rating) => (
        <div>
          <p key={rating.ratingID}>
            {""}
            <blockquote>
              <img src={convert(rating.rating)} className="ratingStars"></img>

              <br />
              {`${rating.comment}`}
              <br />
            </blockquote>
          </p>
        </div>
      ))}
      <br />
    </div>
  );
}

export default ModalInput;

//change the 4 STAR to show actual stars the number of which is determined by rating.stars and then style the stars
//maybe five custom same size images would be easier so
