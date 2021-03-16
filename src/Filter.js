import React from "react";
function Filter() {
  return (
    <div className="FilterContainer">
      <h2>  Filter by Price Level:</h2>
      <ul className="priceFilter">
        <li>
          <div className="priceButton" id="price1">1</div>
        </li>
        <li>
          <div className="priceButton" id="price2">2</div>
        </li>
        <li>
          <div className="priceButton" id="price3">3</div>
        </li>
        <li>
          <div className="priceButton" id="price4">4</div>
        </li>
        <li>
          <div className="priceButton" id="price5">5</div>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
