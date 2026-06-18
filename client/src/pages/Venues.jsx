import React from "react";

import MapPin from "../components/MapPin";

const Venues = () => {
  return (
    <div className="venues-page">
      <p>Pick a venue. Hit play. Talk about it.</p>
      <h1 style={{ margin: "10px", fontSize: "3rem" }}>Scene Again</h1>
      <div className="map-pins">
        <MapPin
          color="#534AB7"
          textColor="#EEEDFE"
          dotColor="#26215C"
          icon="armchair"
          label="The Screening Room"
          venueId="screening-room"
        />
        <MapPin
          color="#0F6E56"
          textColor="#E1F5EE"
          dotColor="#04342C"
          icon="world"
          label="The Art House"
          venueId="art-house"
        />
        <MapPin
          color="#993C1D"
          textColor="#FAECE7"
          dotColor="#4A1B0C"
          icon="movie"
          label="The Blockbuster Lounge"
          venueId="blockbuster-lounge"
        />
        <MapPin
          color="#185FA5"
          textColor="#E6F1FB"
          dotColor="#042C53"
          icon="trophy"
          label="The Academy Hall"
          venueId="academy-hall"
        />
      </div>
    </div>
  );
};

export default Venues;
