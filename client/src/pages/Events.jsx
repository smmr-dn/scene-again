import React, { useEffect, useState } from "react";

import EventCard from "../components/EventCard";

const Events = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(props.data);
  }, [props]);

  return (
    <div className="events">
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
