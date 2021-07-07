import React, { useState } from "react";
import ModalInput from "./ModalInput";

function Modal({
  selectedRestaurant,
  setSelectedRestaurant,
  map,
  addReviewToRestaurant,
  setButtonBottom,
  setButtonTop,
}) {
  function onClickOff() {
    setSelectedRestaurant(null);
  }

  let service;
  const [reviews, setReviews] = useState([]);
  if (selectedRestaurant.restaurantType !== "dummy" && !selectedRestaurant.reviews) {
    let reviewRequest = {
      placeId: selectedRestaurant.place_id,
      fields: ["rating", "review"],
      // "price_level"
      // "name",
    };

    service = new window.google.maps.places.PlacesService(map);
    service.getDetails(reviewRequest, callback);
  }

  // Checks that the PlacesServiceStatus is OK, and adds a marker
  // using the place ID and location from the PlacesService.
  function callback(results, status) {
    if (status == window.google.maps.places.PlacesServiceStatus.OK) {
      // console.log("results from reviews", results);
      selectedRestaurant.reviews = results.reviews;
     // console.log("updated with reviews restaurant", selectedRestaurant);
      setReviews(results);
    }
  }

  if (true) {
    return (
      <article className="Modal">
        <div className="modalPadding">
          <div className="modalClose" onClick={onClickOff}>
            X
          </div>
          <div className="RestaurantReview">
            <ModalInput
              reviews={reviews.reviews}
              selectedRestaurant={selectedRestaurant}
              setSelectedRestaurant={setSelectedRestaurant}
              addReviewToRestaurant={addReviewToRestaurant}
              // setButtonBottom={setButtonBottom}
              // setButtonTop={setButtonTop}
            />

            <h3 id="ratingDisclaimer">
              {" "}
              PLEASE NOTE: ratings are rounded up or down to the nearest whole
              number
            </h3>
          </div>
        </div>

        {
          ////////////////////////////////////////////////////////////////////////////////////////////////////////}
        }
      </article>
    );
  }
}

export default Modal;
