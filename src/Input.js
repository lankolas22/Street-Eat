import React from "react";

function Input ({inputState}) {

    function onClickOff() {
        console.log("closed");
        inputState(null);
      }

      
  if (inputState !== null) {
    return (
      // if null change display to none otherwise display block and input to selectedRestaurant

      <article className="Input">
        <div className="inputPadding">
          <div className="inputClose" onClick={onClickOff}>
            X
          </div>

          {
            ////////////////////////////////////////////////////////////////////////////////////////////////////////
          }
          <div className="inputBody">
            
            




          </div>
        </div>

        {
          ////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
      </article>
    );
  } else {
    return null;
  }



}



export default Input;
