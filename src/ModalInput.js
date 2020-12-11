import React from "react";
import { restaurantData } from "./Reviews";

function ModalInput() {
  return (
    <div className="restaurantItem">
      {restaurantData.map((Reviews, id) => {
        console.log(Reviews);
        return (
          <div key={id}>
            <div className="ModalItemTitle">{Reviews.restaurantName}</div>
            <div className="reviewsPrint">
              {Reviews.ratings.map((ratings, ratingID) => {
                return (
                  <div key={ratingID}>
                    <b>{ratings.stars} STAR : </b> {ratings.comment}
                  </div>
                );
              })}
            </div>

            <hr className="itemDivider"></hr>
          </div>
        );
      })}
    </div>
  );
}

export default ModalInput;
