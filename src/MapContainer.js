import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "65%",
  height: "625px",
};
// const center = { 
//   lat: 51.466, 
//   lng: -3.167 
// };

//solution suggested below as it was undefined


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


let service;
let infowindow;

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
  const [center, setCenter] = useState(null);
  const [ mapState, setMapState ] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    initialize();
  }, [mapState, center]);
  
  function initialize() {
    //var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

    console.log('center', center);
    if (!mapState || !center) {
      return;
    }
    const place = new window.google.maps.LatLng(center.lat,center.lng); 

    let request = {
      location: place,
      radius: '500',
      type: ['restaurant']
    };
  
    service = new window.google.maps.places.PlacesService(mapState);
    service.nearbySearch(request, callback);
  }
  
  function callback(results, status) {
    console.log('calling back with results, status', results, status)
    if (status == window.google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }
  
  function createMarker(place) {
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
    console.log('navigator.geolocation', navigator.geolocation);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log('setting center')
    setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }

  if (window.google === undefined) {
    return null;
  }

  const onMapLoad = ( (map) => {
		setMapState(map);
	}); 
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14.5} onLoad={onMapLoad}>
      {/* Child components, such as markers, info windows, etc. */}

      <Marker onLoad={(marker) => {}} position={center} />

      <></>
    </GoogleMap>
  );
}

export default React.memo(MapContainer);

// const MyMap = ({center}) => {
//   return (
    
//   )
// }

/*

READ THE INFO IN FUNCTIONS ABOVE, STICK WITH FUNCTIONAL AND USEFFECT / STATE ETC

search @

3. Try to make the API request. 

          google fetch api call


4. Try to store the data from the api in the most parent component

5. Clean the code



*/
