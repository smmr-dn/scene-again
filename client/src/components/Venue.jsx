import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { EventsAPI } from "../api/EventsAPI";
import EventCard from "./EventCard";

const Venue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [eventsByVenueId, setEventsByVenueId] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const venueData = await EventsAPI.getVenueById(id);
        setVenue(venueData);

        const eventsData = await EventsAPI.getEventsByVenueId(id);
        setEventsByVenueId(eventsData);
      } catch (error) {
        throw error;
      }
    })();
  }, [id]);

  return (
    <article
      className="venue-information"
      style={{ boxShadow: "0px 0px 0px 0px" }}
    >
      <div className="venue-title">
        <div className="venue-pin-drop" style={{ background: venue.color }}>
          <i
            className={`ti ti-${venue.icon}`}
            style={{ color: venue.textColor }}
          />
        </div>
        <h3>{venue.name}</h3>
      </div>
      <p>{venue.tagline}</p>

      <div className="venue-events">
        {eventsByVenueId.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </article>
  );
};

export default Venue;
