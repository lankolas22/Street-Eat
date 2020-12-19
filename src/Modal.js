import React from "react";
import ModalInput from "./ModalInput";
import { restaurantData } from "./Reviews";

function Modal() {
  return (
  <article className="Modal">
      <div className="RestaurantReview">
        {restaurantData.map((Reviews) => {
          // console.log(Reviews);
          return (
            // props
            <ModalInput  restaurant={Reviews} />
          );
        })}
      </div>
    </article>
  );
}

export default Modal;
