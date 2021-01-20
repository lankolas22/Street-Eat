import React from "react";
import { Map } from "./Map";
//import Modal from "./Modal";
//import { GoogleApiWrapper } from "google-maps-react";


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
})(Container);