import React, {useState} from "react";
import ModalInput from "./ModalInput";


function Modal({ selectedRestaurant, setSelectedRestaurant, map }) {
  console.log("selectedRestaurant is", selectedRestaurant);
  function onClickOff() {
    //console.log("closed");
    setSelectedRestaurant(null);
    //console.log(selectedRestaurant)

  }
  let service;
  const [reviews, setReviews] = useState(null);

  console.log(
    "selectedRestaurant",
    selectedRestaurant,
    selectedRestaurant.place_id
  );

  if (
    selectedRestaurant.restaurantType !== "dummy" && map

  ) {
    console.log(" undefined");

    let reviewRequest = {
      placeId: selectedRestaurant.place_id,
      fields: ["name", "rating", "photos", "price_level", "review"],
    };
    //var
    service = new window.google.maps.places.PlacesService(map);
    service.getDetails(reviewRequest, callback);
  }

  // Checks that the PlacesServiceStatus is OK, and adds a marker
  // using the place ID and location from the PlacesService.
  function callback(results, status) {
    if (status == window.google.maps.places.PlacesServiceStatus.OK) {
      console.log('results from reviews', results);
      setReviews(results)
    }
  }

/* selectedRestaurant !== null */
  if (false) {
    return (
      // if null change display to none otherwise display block and input to selectedRestaurant

      <article className="Modal">
        <div className="modalPadding">
          <div className="modalClose" onClick={onClickOff}>
            X
          </div>

          {
            ////////////////////////////////////////////////////////////////////////////////////////////////////////}
          }
          <div className="RestaurantReview">
            <ModalInput reviews={reviews} />
          </div>
        </div>

        {
          ////////////////////////////////////////////////////////////////////////////////////////////////////////}
        }
      </article>
    );
  } else {
    return null;
  }
}

export default Modal;
