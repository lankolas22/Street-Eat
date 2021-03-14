import React, { useState, useEffect } from "react";
import "./App.css";
import { restaurantData } from "./Reviews";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";


function ModalInput( {restaurant, selectedRestaurant} ) {
  console.log("passed down", selectedRestaurant);
  //   passes down state of null or clicked restaurant

  //console.log("modal restaurants", restaurant);

  ///////////////////////////////////////////
  /*
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


  console.log(restaurant);
/////////////////////////////////////////////
if (selectedRestaurant!==null) {
  return (
    
    <div className="reviewItem" className={restaurant.ratings.RatingID}>
      <hr />
      <h2 className="ModalHeader">{restaurant.name}</h2>

      <img className ="modalImage" src= {restaurant.image} alt="image of restaurant"/>

      {restaurant.ratings.map((rating) => (
        <div>
        
        <p key={rating.ratingID}>
          {" "}
         
          <span className="ratingsImage">{`${rating.rating}` + " stars"}</span>{": "}
           
          {`${rating.comment}`}
        </p>
        </div>
      ))}
      <hr />
    </div>
  );
}
else{return null}
}
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
