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
        <h3>{venue.name}</h3>
        <p>{venue.tagline}</p>
      </div>

      <div className="venue-events">
        {eventsByVenueId.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </article>
  );
};

export default Venue;
