import React from "react";
import "./App.css";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import unrated from "./unrated.png";

let latLngImage;

function ModalInput({ selectedRestaurant, reviews }) {
  const restaurantReviews =
    selectedRestaurant.restaurantType === "dummy"
      ? selectedRestaurant.ratings
      : reviews;
  console.log("restaurant reviews are", reviews);
 // console.log("restaurant ", selectedRestaurant);
  if (selectedRestaurant.restaurantType !== "dummy") {
    let imgLat = selectedRestaurant.geometry.location.lat();
    let imgLng = selectedRestaurant.geometry.location.lng();

    latLngImage = `https://maps.googleapis.com/maps/api/streetview?location=${imgLat},${imgLng}&size=600x400&key=AIzaSyAl7rJskwTxg3fIJ3wKhN_KT0emk1LlcI0`;
  }

  //console.log("PLACE_ID ", selectedRestaurant, " was clicked");
  // console.log("modal input Reviews", reviews)

  // let imgUrl = selectedRestaurant.photos.[0].html_attributions;
  // console.log(imgUrl);

  function convert(num) {
    if (num < 1.5 && num > 0) {
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
        src={
          //null
          // selectedRestaurant.image
          selectedRestaurant.restaurantType === "dummy"
            ? selectedRestaurant.image
            : latLngImage
        }
        alt="image of restaurant"
      />

      {restaurantReviews &&
        restaurantReviews.map((rating) => (
          <div>
            <p key={rating.key}>
              {""}
              <blockquote>
                <img src={convert(rating.rating)} className="ratingStars"></img>
                {console.log("rating.text is", rating.text)}
                {console.log("reviews are ", reviews)}

                <br />
                {rating.text !== undefined  || reviews !== undefined
                  ? `${rating.text}`
                  : "reviews are currently unavailable for this restaurant"}

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
