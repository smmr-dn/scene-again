import React from "react";

import MapPin from "../components/MapPin";
import VenueMapPin from "../utils/VenueMapPin";

const Venues = () => {
  const venues = [
    "screening-room",
    "art-house",
    "blockbuster-lounge",
    "academy-hall",
  ];

  return (
    <div className="venues-page">
      <p>Pick a venue. Hit play. Talk about it.</p>
      <h1 style={{ margin: "10px", fontSize: "3rem" }}>Scene Again</h1>

      <div className="map-pins">
        {venues.map((venueId, index) => (
          <MapPin
            key={index}
            {...VenueMapPin[venueId]}
            label={VenueMapPin[venueId].label}
            venueId={venueId}
          />
        ))}
      </div>
    </div>
  );
};

export default Venues;
