import React, { useEffect, useState } from "react";

import { EventsAPI } from "../api/EventsAPI";
import EventCard from "../components/EventCard";

const Events = (props) => {
  const [events, setEvents] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState({
    id: "all",
    name: "All Venues",
  });

  useEffect(() => {
    setEvents(props.data);
  }, [props]);

  const [venueOptions, setVenueOptions] = useState([]);

  useEffect(() => {
    EventsAPI.getAllVenues().then((venues) =>
      setVenueOptions(
        venues.map((venue) => ({ id: venue.id, label: venue.name })),
      ),
    );
  }, []);

  const onVenueChange = async (e) => {
    const selectedId = e.target.value;
    const selectedName = e.target.options[e.target.selectedIndex].text;
    setSelectedVenue({ id: selectedId, name: selectedName });

    if (selectedId === "all") {
      setEvents(props.data);
    } else {
      await EventsAPI.getEventsByVenueId(selectedId).then((filteredEvents) => {
        setEvents(filteredEvents);
      });
    }
  };

  return (
    <div className="events">
      <div className="events-filter">
        <select
          value={selectedVenue.id}
          onChange={onVenueChange}
          className="venue-dropdown"
        >
          <option value="all">All Venues</option>
          {venueOptions.map((venue) => (
            <option key={venue.id} value={venue.id}>
              {venue.label}
            </option>
          ))}
        </select>
      </div>
      {events && events.length > 0 ? (
        events.map((event, index) => (
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
        ))
      ) : (
        <h3 className="noResults">{"No Events Yet 😞"}</h3>
      )}
    </div>
  );
};

export default Events;
