import React from "react";
import ModalInput from "./ModalInput";
//import { restaurantData } from "./Reviews";

function Modal({ selectedRestaurant, setSelectedRestaurant }) {
  function onClickOff() {
  //  console.log("closed");
    setSelectedRestaurant(null);
  }
 // console.log("selectedRestaurant", selectedRestaurant);

  if (selectedRestaurant !== null) {
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
            <ModalInput selectedRestaurant={selectedRestaurant} />
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
