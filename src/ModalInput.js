import React, { useState } from "react";
import "./App.css";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import unrated from "./unrated.png";

let latLngImage;

function ModalInput({
  selectedRestaurant,
  setSelectedRestaurant,
  reviews,
  addNewRatingReview,
  setButtonBottom,
  setButtonTop
}) {

  // const [newUserRating, setNewUserRating] = useState(null);
  const [newUserReview, setNewUserReview] = useState("");

 

  const restaurantReviews =
    selectedRestaurant.restaurantType === "dummy"
      ? selectedRestaurant.ratings
      : reviews;
  console.log("restaurant reviews are", reviews);
  if (selectedRestaurant.restaurantType !== "dummy") {
    let imgLat = selectedRestaurant.geometry.location.lat();
    let imgLng = selectedRestaurant.geometry.location.lng();

    latLngImage = `https://maps.googleapis.com/maps/api/streetview?location=${imgLat},${imgLng}&size=600x400&key=AIzaSyAl7rJskwTxg3fIJ3wKhN_KT0emk1LlcI0`;
  }
  // function onReviewAdded(rating, review) {
  // addReviewToRestaurant(selectedRestaurant.place_id, rating, review)
  // }
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

  function addNewRatingReview(newUserRatingReview) {
    console.log(newUserRatingReview);
  }

  function expandInput() {
    console.log("clicked");
    setButtonTop(null);
    setButtonBottom(true);
  }

  function submitNewReviewRating(submitNewUserRating, submitNewUserReview) {
    console.log("review submitted");
    setButtonTop(true);
    setButtonBottom(null);

    addNewRatingReview(submitNewUserReview, submitNewUserRating);

    setSelectedRestaurant(null);
  }

  return (
    <div className="reviewItem" className={selectedRestaurant.name}>
      {""}

      <h1 className="ModalHeader">{selectedRestaurant.name}</h1>

      <img
        className="modalImage"
        src={
          selectedRestaurant.restaurantType === "dummy"
            ? selectedRestaurant.image
            : latLngImage
        }
        alt="image of restaurant"
      />

      {restaurantReviews ? (
        restaurantReviews.map((rating) => (
          <div>
            <p key={rating.key}>
              {""}
              <blockquote>
                <img src={convert(rating.rating)} className="ratingStars"></img>
                {console.log("rating.text is", rating.text)}
                {console.log("reviews are ", reviews)}

                <br />
                {rating.text}
                <br />
              </blockquote>
            </p>
          </div>
        ))
      ) : (
        <div>
          <br /> "reviews are currently unavailable for this restaurant, why not
          add one!"
        </div>
      )}

      <div className="addReviewOption">
        {buttonTop === true && (
          <div className="addReviewMessage">
            What do you think? <br />
            <br />
            <button
              className="reviewSubmitButton"
              type="button"
              value="Submit"
              onClick={expandInput}
            >
              {" "}
              Add your own review here
            </button>
            <br />
            <br />
          </div>
        )}
        {buttonBottom === true && (
          <div className="addReview">
            <form id="inputForm">
              <label for="rRating" className="labelReviewText">
                &nbsp;&nbsp; Rating:
              </label>
              <br />
              <br />

              <div className="userRatingInput">
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="1"
                      name="userRating"
                      value={1}
        //              onChange={(e) => submitNewUserRating(e.target.value)}
                    />
                      <label for="one">1</label>
                  </li>{" "}
                  <li>
                    <input
                      type="radio"
                      id="2"
                      name="userRating"
                      value={2}
        //              onChange={(e) => submitNewUserRating(e.target.value)}
                    />
                      <label for="two">2</label>
                  </li>
                   {" "}
                  <li>
                    {" "}
                    <input
                      type="radio"
                      id="3"
                      name="userRating"
                      value={3}
        //              onChange={(e) => submitNewUserRating(e.target.value)}
                    />
                      <label for="three">3</label>
                  </li>
                  <br />
                  <li>
                    {" "}
                    <input
                      type="radio"
                      id="4"
                      name="userRating"
                      value={4}
        //              onChange={(e) => submitNewUserRating(e.target.value)}
                    />
                      <label for="four">4</label>
                  </li>
                  <li>
                    {" "}
                    <input
                      type="radio"
                      id="5"
                      name="userRating"
                      value={5}
        //              onChange={(e) => submitNewUserRating(e.target.value)}
                    />
                      <label for="one">5</label>
                  </li>
                </ul>
              </div>
              <label for="rAddress" className="labelReviewText">
                &nbsp;&nbsp; Review:
                <br />
                <br />
              </label>
              <textarea
                id="rReview"
                name="rReview"
                placeholder="Enter Your Review Here"
                value={newUserReview}
                rows="4"
                cols="35"
        //        onChange={(e) => submitNewUserReview(e.target.value)}
              >
                {" "}
              </textarea>
              <br />

              {
                <input
                  type="button"
                  className="reviewSubmitButton"
                  value="Submit"
        //          onClick={submitNewReviewRating(submitNewUserReview, submitNewUserRating)}
                />
              }
            </form>
          </div>
        )}
      </div>

      <br />
    </div>
  );
}

export default ModalInput;
