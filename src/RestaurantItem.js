import React from "react";
import "./App.css";

//console.log(results);

function RestaurantItem({ restaurant, setSelectedRestaurant }) {
  function onClick() {
    console.log(restaurant.name, " was clicked");

if (setSelectedRestaurant === undefined) {
  console.log("undefined restaurant")
  return
}

/*
    const [modalResult, setModalResult] = useState(null);

    useEffect(() => {
      getModalResult();
    }, [modalResult]);

    function callback(modalResult, status) {
      //console.log("callback function");
      //console.log(typeof modalResult);
      //console.log("calling back with modal result, status", modalResult, status);

      setModalResults(modalResult);
      setRestaurants(modalResult);
    }
*/
    setSelectedRestaurant(restaurant);
    console.log(restaurant)
  }
  return (
    <div className="restaurantItem" onClick={onClick} id={restaurant.place_id}>
      <h2 className="AsideHeader">{restaurant.name}</h2>

      {"\n"}

      <p className="AsideAddress">{restaurant.vicinity} </p>
    </div>
  );
}

export default RestaurantItem;

//onClick={setModalState()=>setModalState(true)}
