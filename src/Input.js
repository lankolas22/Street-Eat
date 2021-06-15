import React, { useState } from "react";
import shock from "./shock.jpg";

function Input({ addNewRestaurant }) {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function onClickOff() {
    console.log("closed input");
   // setInputState(null);
    //console.log(selectedRestaurant)
  }

  function onRestaurantInput() {
    //console.log("rName", name, "rAddress", address);

    addNewRestaurant(
      name,
      address
    );

  }


  return (
    // if null change display to none otherwise display block and input to selectedRestaurant

    <article className="Input">
      <div className="inputPadding">
        <div
          className="inputClose" onClick={onClickOff}
        >
          X
        </div>

        <div className="inputBody">
          <h1 id="LobsterH1">Is your favourite takeaway not here!?</h1>
          <img src={shock} alt="shocked face" width="300px" />
          <h1>No worries! Add it below for review</h1>
          <form id="inputForm">
            <label for="rName" className="labelText">
              Restaurant Name: &nbsp;
            </label>
            <input
              type="text"
              id="rName"
              name="rName"
              placeholder="Enter Restaurant Name Here"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <br />
            <label for="rAddress" className="labelText">
              Restaurant Address: &nbsp;
            </label>
            <input
              type="text"
              id="rAddress"
              name="rAddress"
              placeholder="Enter Restaurant Address Here"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
            />
            <br />
            <br />
            <br />

            <input type="button" value="Submit" onClick={onRestaurantInput} />
          </form>
        </div>
      </div>
    </article>
  );
}

export default Input;
