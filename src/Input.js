import React from "react";
import shock from "./shock.jpg";

function Input({ addRestaurant }) {
  function onRestaurantInput(e) {
    console.log("closed", e);
    addRestaurant({
      placeName: "",
      // place_id: placeIDGenerator(newRestaurant.placeName),
       vicinity: "",
   //    lat: lat,
   //    lng: lng,

    })
  //  inputState(null);
  }

  /*
  function onClickOff() {
    console.log("closed");
    inputState(null); */


return (
  // if null change display to none otherwise display block and input to selectedRestaurant

  <article className="Input">
    <div className="inputPadding">
      <div className="inputClose" //onClick={}
      >
        X
      </div>

      <div className="inputBody">
        <h1 id="LobsterH1">Is your favourite takeaway not here!?</h1>
        <img src={shock} alt="shocked face" width="300px" />
        <h1>No worries! Add it below for review</h1>
        <form id="inputForm">
          <label for="rName" className="labelText">Restaurant Name: &nbsp;</label>
          <input
            type="text"
            id="rName"
            name="rName"
            placeholder="Enter Restaurant Name Here"
          />
          <br /><br />
          <label for="rAddress" className="labelText">Restaurant Address: &nbsp;</label>
          <input
            type="text"
            id="rAddress"
            name="rAddress"
            placeholder="Enter Restaurant Address Here"
          />
          <br /><br /><br />

          <input type="submit" value="Submit" onClick={onRestaurantInput} />
        </form>
      </div>
    </div>
  </article>
);
}

export default Input;
