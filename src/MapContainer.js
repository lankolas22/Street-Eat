import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import Modal from "./Modal";
import Input from "./Input";
import missing from "./missing.jpg";

const containerStyle = {
  width: "65%",
  height: "625px",
};
let service;
/////////////////////////////////////////////////////
function MapContainer({
  selectedRestaurant,
  setRestaurants,
  restaurants,
  addRestaurant,
  setSelectedRestaurant,
  addReviewToRestaurant
}) {
  const [center, setCenter] = useState(null);
  const [mapState, setMapState] = useState(null);
  const [addRestaurantModal, setAddRestaurantModal] = useState(null);
  const [newRestaurantLocation, setNewRestaurantLocation] = useState({});
  ///////////////////////////////////////////////////
 
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    initialize();
  }, [mapState, center]);

  /////////////////////////////////////////////////
  function initialize() {
    if (!mapState || !center) {
      return;
    }

    const place = new window.google.maps.LatLng(center.lat, center.lng);

    //1800 a good number
    let request = {
      location: place,
      radius: "1800",
      type: ["meal_takeaway"],
    };

    service = new window.google.maps.places.PlacesService(mapState);
    service.nearbySearch(request, callback);
 
  }
  ///////////////////////////////////////////////
  function callback(results) {
    setRestaurants(results);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  ///////////////////////////////////////////////
  function showPosition(position) {
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

  function onClickModal(id) {
    setSelectedRestaurant(id);
  }

  //  SECTION FOR CREATING NEW USER SUBMITTED RESTAURANTS

  const addNewRestaurant = (name, address) => {
    function placeIDGenerator(placeName) {
      let placeID = Math.floor(Math.random() * 10000000000);
      let nameString = placeName.replace(/\s+/g, "");
      placeID = nameString.substring(0, 8) + placeID;
      return placeID;
    }

    let newRestaurant = {
      name: name,
      place_id: placeIDGenerator(name),
      vicinity: address,
      restaurantType: "dummy",
      image: missing,
      ratings: [
        {
          ratingID: null,
          rating: null,
          comment:
            "this submission is awaiting approval by our moderators and is not available right now.  Please try again later",
        },
      ],
      ...newRestaurantLocation,
    };
    setAddRestaurantModal(false);

    addRestaurant(newRestaurant);
  };
  return (
    <>
      {selectedRestaurant && (
        <Modal
          restaurants={restaurants}
          selectedRestaurant={selectedRestaurant}
          setSelectedRestaurant={setSelectedRestaurant}
          addReviewToRestaurant={addReviewToRestaurant}
          map={mapState}
        />
      )}
      {addRestaurantModal && (
        <Input
          addNewRestaurant={addNewRestaurant}
          setAddRestaurantModal={setAddRestaurantModal}
        />
      )}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onRightClick={(e) => {
          let lat = e.latLng.lat();
          let lng = e.latLng.lng();
          setNewRestaurantLocation({
            lat,
            lng,
          });
          setAddRestaurantModal(true);
        }}
        zoom={16}
        onLoad={onMapLoad}
      >
        {/* Marker for the user */}
        <Marker
          position={center}
          icon={"http://maps.google.com/mapfiles/kml/paddle/red-stars.png"}
        />

        {/* the markers for the real restaurants */}
        {restaurants &&
          restaurants
            .filter((r) => r.restaurantType !== "dummy")
            .map((result) => (
              <Marker
                ////////
                onClick={() => onClickModal(result)}
                id={result}
                ////////
                position={{
                  lat:
                    result.geometry === undefined
                      ? result.location.lat
                      : result.geometry.location.lat(),
                  lng:
                    result.geometry === undefined
                      ? result.location.lng
                      : result.geometry.location.lng(),
                }}
                icon={
                  "http://maps.google.com/mapfiles/kml/paddle/orange-stars.png"
                }
              />
            ))}
        {/* the markers for the dummy restaurants */}
        {restaurants &&
          restaurants
            .filter((r) => r.restaurantType === "dummy")
            .map((result) => (
              <Marker
                ////////
                onClick={() => onClickModal(result)}
                id={result}
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
