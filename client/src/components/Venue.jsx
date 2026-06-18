import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { EventsAPI } from "../api/EventsAPI";
import VenueMapPin from "../utils/VenueMapPin";
import EventCard from "./EventCard";
import MapPin from "./MapPin";

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
        <MapPin
          key={id}
          {...VenueMapPin[id]}
          label={VenueMapPin[id].label}
          venueId={id}
          showLabel={false}
        />
        <h3>{venue.name}</h3>
        <p>{venue.tagline}</p>
      </div>

      <div className="venue-events">
        {eventsByVenueId.map((event, index) => (
          <EventCard
            key={index}
            id={event.id}
            image={event.image}
            title={event.title}
            imdbRank={event.imdbrank}
            imdbRating={event.imdbrating}
            year={event.year}
            director={event.director}
            genre={event.genre}
            date={event.date}
            time={event.time}
            status={event.status}
            whyRewatch={event.whyrewatch}
            discussionPrompt={event.discussionprompt}
            venueId={event.venueId}
          />
        ))}
      </div>
    </article>
  );
};

export default Venue;
