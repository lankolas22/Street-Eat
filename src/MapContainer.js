import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { restaurantData } from "./Reviews";
import Modal from "./Modal";
import Input from "./Input";
//import burgerMarker from "./marker.png";
//import setRestaurants from "./App";

const containerStyle = {
  width: "65%",
  height: "625px",
};
let service;
let infowindow;
/////////////////////////////////////////////////////
function MapContainer({
  selectedRestaurant,
  setRestaurants,
  restaurant,
  setSelectedRestaurant,
}) {
  //console.log("MapContainer function");
  const [center, setCenter] = useState(null);
  const [mapState, setMapState] = useState(null);
  const [results, setResults] = useState(null);
  //const [input, setInput] = useState(null);
  ///////////////////////////////////////////////////

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    initialize();
  }, [mapState, center]);

  useEffect(() => {
    getResults();
  }, [results]);
  /////////////////////////////////////////////////
  function initialize() {
    //console.log("initialize function");
    //console.log("center", center);
    if (!mapState || !center) {
      return;
    }

    const place = new window.google.maps.LatLng(center.lat, center.lng);
    //console.log("after center is set");

    let request = {
      location: place,
      radius: "1800",
      type: ["meal_takeaway"],
    };

    service = new window.google.maps.places.PlacesService(mapState);
    service.nearbySearch(request, callback);
  }
  ///////////////////////////////////////////////
  function callback(results, status) {
    //console.log("callback function");
    //console.log(typeof results);
    //console.log("calling back with results, status", results, status);

    setResults(results);
    setRestaurants(results);

    if (status == window.google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }
  ///////////////////////////////////////////////
  function getResults() {
    //console.log("getResults function");

    if (!{ results }) {
      console.log("getResutls() failed");
      return;
    }
    console.log("getResutls() success");
    //console.log({ results });
  }

  ///////////////////////////////////////////////

  function createMarker(place) {
    //console.log("createMarker function");
    if (!place.geometry || !place.geometry.location) return;
    //console.log(place)
    const marker = new window.google.maps.Marker({
      mapState,
      position: place.geometry.location,
    });

    /////////////////////////////////////////////////
    /*what does this section do? */
    window.google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "");
      infowindow.open(mapState);
    });
    ///////////////////////////////////////////////
  }
  ///////////////////////////////////////////////
  function getLocation() {
    //console.log("getLocation function");
    //console.log("navigator.geolocation", navigator.geolocation);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  ///////////////////////////////////////////////
  function showPosition(position) {
    //console.log("showPosition function");
    //console.log("setting center");
    setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }
  if (window.google === undefined) {
    return null;
  }

  const onMapLoad = (map) => {
    setMapState(map);
  };
  //console.log("map is loading");

  function onClickModal(id) {
    setSelectedRestaurant(id);
    //    console.log(id);
  }
  function addRestaurant(lat, lng) {
    console.log("Right Click");

    //setInput("active")

    let newRestaurant = {
      place_id: "",
      name: "",
      vicinity: "",
      lat: lat,
      lng: lng,
    }
    console.log(newRestaurant)


  }
  return (
    <>
      {selectedRestaurant && (
        <Modal
          restaurants={results}
          selectedRestaurant={selectedRestaurant}
          setSelectedRestaurant={setSelectedRestaurant}
        />
      )}

      {//<Input      />
      }

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onRightClick={(e) => {
          let lat = e.latLng.lat();
          let lng = e.latLng.lng();
          addRestaurant(lat, lng);
        }}
        zoom={16}
        onLoad={onMapLoad}
      >
        {/* Marker for the user */}
        <Marker
          //onLoad={(marker) => {}}
          position={center}
          icon={"http://maps.google.com/mapfiles/kml/paddle/red-stars.png"}
        />

        {/* the markers for the real restaurants */}
        {results &&
          results.map((result) => (
            <Marker
              ////////
              onClick={() => onClickModal(result)}
              id={result}
              ////////
              position={{
                lat: result.geometry.location.lat(),
                lng: result.geometry.location.lng(),
              }}
              icon={
                "http://maps.google.com/mapfiles/kml/paddle/orange-stars.png"
              }
            />
          ))}
        {/* the markers for the dummy restaurants */}
        {restaurantData &&
          restaurantData.map((result) => (
            <Marker
              ////////
              onClick={() => onClickModal(result)}
              id={result}
              /*
              id={restaurant.place_id} */
              ////////
              position={{
                lat: result.lat,
                lng: result.lng,
              }}
              icon={
                "http://maps.google.com/mapfiles/kml/paddle/orange-stars.png"
              }
            />
          ))}

        <></>
      </GoogleMap>
    </>
  );
}

export default React.memo(MapContainer);
//export results;
