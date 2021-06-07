import React, {useState} from "react";
import ModalInput from "./ModalInput";


function Modal({ selectedRestaurant, setSelectedRestaurant, map }) {
 // console.log("selectedRestaurant is", selectedRestaurant);
  function onClickOff() {
    //console.log("closed");
    setSelectedRestaurant(null);
    //console.log(selectedRestaurant)
  }

  let service;
  const [reviews, setReviews] = useState([]);

 // console.log("selectedRestaurant", selectedRestaurant, selectedRestaurant.place_id);

  if (
    selectedRestaurant.restaurantType !== "dummy"

  ) {

    let reviewRequest = {
      placeId: selectedRestaurant.place_id,
      fields: ["name", "rating", "price_level", "review"],
    };
    service = new window.google.maps.places.PlacesService(map);
    service.getDetails(reviewRequest, callback);

////////////////////////////////////

let imgLat = selectedRestaurant.geometry.location.lat();
let imgLng = selectedRestaurant.geometry.location.lng();

console.log(imgLat, imgLng);

let imgRequest = {
    location: {imgLat, imgLng},
    size: "400x600",};

    const streetviewService = new window.google.maps.StreetViewService();
    streetviewService.getPanorama(imgRequest, callback);

/////////////////////////////////////

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
  if (true) {
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
            <ModalInput reviews={reviews.reviews} selectedRestaurant= {selectedRestaurant} />
            <h3 id="ratingDisclaimer"> PLEASE NOTE: ratings are rounded up or down to the nearest whole number</h3>
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
