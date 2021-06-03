import React from "react";
import "./App.css";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import unrated from "./unrated.png"

function ModalInput({selectedRestaurant, reviews}) {

  const restaurantReviews = selectedRestaurant.restaurantType === "dummy" ? selectedRestaurant.ratings : reviews;
console.log("restaurant reviews are", restaurantReviews);

  //console.log("PLACE_ID ", selectedRestaurant, " was clicked");
 // console.log("modal input Reviews", reviews)


  // let imgUrl = selectedRestaurant.photos.[0].html_attributions;
  // console.log(imgUrl);


  function convert(num) {
    if (num < 1.5) {
      return one;
    }
    if (num < 2.5 && num >= 1.5) {
      return two;
    }
    if (num < 3.5 && num >= 2.5) {
      return three;
    }
    if (num < 4.5 && num >= 3.5) {
      return four;
    }
    if (num > 4.5) {
      return five;
    } else {
      return unrated;
    }
  }

  // <div className="reviewItem" className={selectedRestaurant.ratings.ratingID}>
  // <div>
  // <p key={rating.key}>
  //   {""}


  //     if restaurant reviews are defined only then execute what is after and and (&&)
  //      {restaurantReviews && restaurantReviews.map((rating) => (


  return (

    <div className="reviewItem" className={selectedRestaurant.name}>
    
      {""}

      <h1 className="ModalHeader">{selectedRestaurant.name}</h1>

      <img
        className="modalImage"
        src={ null
          //selectedRestaurant.photos[0]
        }
        alt="image of restaurant" 
      />
 
      {restaurantReviews && restaurantReviews.map((rating) => (
        <div>
          <p key={rating.key}>
            {""}
            <blockquote>
              <img src={convert(rating.rating)} className="ratingStars"></img>

              <br />
              {`${rating.text}`}
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
