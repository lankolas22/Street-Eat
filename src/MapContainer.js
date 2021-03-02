import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "65%",
  height: "625px",
};
let service;
let infowindow;
/////////////////////////////////////////////////////
let results;
////////////////////////////////////////////////////
function MapContainer() {
  console.log("MapContainer function");
  const [center, setCenter] = useState(null);
  const [mapState, setMapState] = useState(null);
  ///////////////////////////////////////////////////
  const [results, setResults] = useState(null);
  ///////////////////////////////////////////////////
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    initialize();
  }, [mapState, center]);
  //////////////////////////////////////////////////

  useEffect(() => {
    getResults();
  }, [results]);

  /////////////////////////////////////////////////
  function initialize() {
    console.log("initialize function");
    console.log("center", center);
    if (!mapState || !center) {
      return;
    }

    const place = new window.google.maps.LatLng(center.lat, center.lng);
    console.log("after center is set");

    let request = {
      location: place,
      radius: "1200",
      type: ["meal_takeaway"],
    };

    service = new window.google.maps.places.PlacesService(mapState);
    service.nearbySearch(request, callback);
  }

  function callback(results, status) {
    console.log("callback function");
    console.log(typeof results);
    console.log("calling back with results, status", results, status);
    ///////////////////////////////////////////////

    setResults(results);

    ///////////////////////////////////////////////
    if (status == window.google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
    //console.log(results);
  }
  ///////////////////////////////////////////////
  function getResults() {
    console.log("getResults function");

    if (!{ results }) {
      console.log("getResutls() failed");
      return;
    }
    console.log("getResutls() success");
    console.log({ results});
  }

  ///////////////////////////////////////////////

  function createMarker(place) {
    console.log("createMarker function");
    if (!place.geometry || !place.geometry.location) return;

    const marker = new window.google.maps.Marker({
      mapState,
      position: place.geometry.location,
    });
    window.google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "");
      infowindow.open(mapState);
    });
  }
  function getLocation() {
    console.log("getLocation function");
    console.log("navigator.geolocation", navigator.geolocation);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    //console.log("navigator.geolocation", navigator.geolocation);
  }

  function showPosition(position) {
    console.log("showPosition function");
    console.log("setting center");
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
  console.log("map is loading");
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14.5}
      onLoad={onMapLoad}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker onLoad={(marker) => {}} position={center} />
      <></>
    </GoogleMap>
  );
}

export default React.memo(MapContainer);
//export results;
