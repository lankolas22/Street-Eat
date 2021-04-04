import React, {useState} from "react";
import RestaurantItem from "./RestaurantItem";
import { restaurantData } from "./Reviews";
import Filter from "./Filter";

function Side({ restaurants, setSelectedRestaurant}) {
 /* console.log("side restaurants", restaurants);
  console.log(restaurants.rating);
  console.log("this filter value", filterValue);
  console.log("side modal state", setSelectedRestaurant); */
  const [filterValue, setFilterValue] = useState(null);
    let threePlusArr = [];
  let fourPlusArr = [];
  let listedRestaurants = restaurants;

  if (filterValue === "fourPlus") {
    fourPlusArr = [];
    for (let i = 0; i < restaurants.length; i++) {
      let ratingNum = restaurants[i].rating;
      if (ratingNum >= 4) {
        fourPlusArr.push(i);
      } else {
        continue;
      }
      listedRestaurants = fourPlusArr;
    }
  }
  if (filterValue === "threePlus") {
    console.log("three Plus !")
    threePlusArr = [];
    for (let i = 0; i < restaurants.length; i++) {
      let ratingNum = restaurants[i].rating;
      if (ratingNum >= 3) {
        threePlusArr.push(i);
        console.log(threePlusArr);
      } else {
        continue;
      }
      
    }
    listedRestaurants = threePlusArr;
  }

  if (filterValue != "threePlus" || "fourPlus") {
    listedRestaurants = restaurants;
  }
  console.log("loop test")
  console.log(restaurants)
  //console.log(fourPlusArr);
  /*   */
  return (
    <div className="Aside">
      <Filter setFilterValue={setFilterValue}/>
      <div className="RestaurantList">
        {/* 
       
       if (filterState === threePlus) {
         selectedSide === Reviews.3, Reviews.4, Reviews.5
       } 

       if (filterState === fourPlus) {
         selectedSide === Reviews.4, Reviews.5
       }

      else  {
         selectedSide === Reviews
       }

       replace below Reviews  with "selectedSide"
       
       */}

        {/*dummy data*/}
        {restaurantData.map((Reviews) => {
          // console.log(Reviews);
          return (
            // props
            <RestaurantItem
              restaurant={Reviews}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          );
        })}
        {/*live data*/}
        {restaurants.map((restaurants) => {
          return (
            // props
            <RestaurantItem
              restaurant={restaurants}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Side;

/*



        {restaurants.map((restaurants) => {
          return (
            // props
            <RestaurantItem restaurant={restaurants} />
          );
        })}


*/
