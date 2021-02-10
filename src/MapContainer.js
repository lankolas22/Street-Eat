import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "65%",
  height: "625px",
};
const center = { 
  lat: 51.466, 
  lng: -3.167 
};

//solution suggested below as it was undefined

const google = window.google;

//@ put inside a function

//and then call it in the same way as get location;
//use useffect
//     useState and useEffect

/*

const abc = ()=> {



  fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.465931,-3.166773&radius=1500&type=meal_takeaway&key=AIzaSyBomt46w58cIAe_SG6ANWAOydJRcm0CAeo", {
    mode: 'no-cors'
  })
    .then(function (response) {
      console.log(response)
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
  
      // Examine the text in the response
      response.json().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
  
  

}

*/

var map;
var service;
//var infowindow;

function initialize() {
  //var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 15
    });

  var request = {
    location: center,
    radius: '500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
/*
function createMarker(places, map) {
  const bounds = new google.maps.LatLngBounds();
  const placesList = document.getElementById("places");

  for (let i = 0, place; (place = places[i]); i++) {
    const image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25),
    };
    new google.maps.Marker({
      map,
      icon: image,
      title: place.name,
      position: place.geometry.location,
    });
    const li = document.createElement("li");
    li.textContent = place.name;
    placesList.appendChild(li);
    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






hardcode lat lng for now, 

add <script> to html

implement new code to replace abc and inc NEW key

 see the link 

 https://developers.google.com/maps/documentation/javascript/places





@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function MapContainer() {
  const [center, setCenter] = useState(0);
  useEffect(() => {
    getLocation();
  }, []);
  // pass an empty array to stop infinite loop

  //anything thats starts with use is a hook

  useEffect(() => {
    initialize();
  }, []);

  //@ try and figure it out  based on this above solution using console logs

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log(position);
    setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyBVFKqse6hogr0y7ecgJ9SNYxnOiVowENs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14.5}>
        {/* Child components, such as markers, info windows, etc. */}

        <Marker onLoad={(marker: Marker) => {}} position={center} />

        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapContainer);

/*

READ THE INFO IN FUNCTIONS ABOVE, STICK WITH FUNCTIONAL AND USEFFECT / STATE ETC

search @

3. Try to make the API request. 

          google fetch api call


4. Try to store the data from the api in the most parent component

5. Clean the code



*/
