import React from "react";
function Filter({filterValue}) {
  function setFilter(filterValue) {
    console.log(filterValue, " was clicked");

  }

  return (
    <div className="FilterContainer">
      <h2>
    
        &nbsp; &nbsp;&nbsp;&nbsp; Filter Restaurant by Rating (out of 5):
      </h2>
      <ul className="priceFilter">
        <li>
          <div
            className="priceButton"
            onClick={() => setFilter("all")}
            id="All"
          >
            All Restaurants
          </div>
        </li>
        <li>
          <div className="priceButton" onClick={() => setFilter("threePlus")} id="price3">
            3 to 5 Stars
          </div>
        </li>
        <li>
          <div className="priceButton" onClick={() => setFilter("fourPlus")} id="price4">
            4 to 5 Stars
          </div>
        </li>
      </ul>
    </div>
  );
}
/*
        <li>
          <div className="priceButton" onClick={() => setFilter(5)} id="price5">
            {" "}
            &nbsp;5&nbsp;{" "}
          </div>
        </li>
*/

export default Filter;
