import React from "react";
//import { Map } from "./Map";
//import Modal from "./Modal";
//import { GoogleApiWrapper } from "google-maps-react";
/*

export class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    const style = {
      width: "100vw",
      height: "100vh",
    };
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    );
  }
}  
export default GoogleApiWrapper({
  apiKey: "API KEY",
})(Container); */

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '70%',
  height: '700px'
};

const center = {
  lat: 51.465931,
  lng: -3.166773
};

function MapContainer() {
  return (
    <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14.5}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapContainer)