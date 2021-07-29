import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class Mapa extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mapStyles = { width: "100%", height: "100%", position: "relative" };
    const containerStyler = {
      width: "100%",
      height: "750px",
      position: "relative",
    };
    return (
      <React.Fragment>
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
          style={mapStyles}
          containerStyle={containerStyler}
        >
          <Marker position={{ lat: 48.0, lng: -122.0 }} />
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHzLjM_fStsN2uNbbYEk27AEZ6s0ZbHFA",
})(Mapa);
