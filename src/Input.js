import React from "react";
import shock from "./shock.jpg";

function Input({ inputState }) {
  function onClickOff() {
    console.log("closed");
    inputState(null);
  }

  return (
    // if null change display to none otherwise display block and input to selectedRestaurant

    <article className="Input">
      <div className="inputPadding">
        <div className="inputClose" onClick={onClickOff}>
          X
        </div>

        <div className="inputBody">
          <h1>Is your favourite takeaway not here!?</h1>
          <img src={shock} alt="shocked face" />
          <h3>No worries! Add it below</h3>
          <form>
            <label for="rName">Restaurant Name</label>
            <input
              type="text"
              id="rName"
              name="rName"
              placeholder="Enter Restaurant Name Here"
            >
              {" "}
            </input>

            <label for="rAddress">Restaurant Address</label>
            <input
              type="text"
              id="rName"
              name="rAddress"
              placeholder="Enter Restaurant Address Here"
            >
              {" "}
            </input>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </article>
  );
}

export default Input;
