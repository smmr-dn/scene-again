import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import "../css/Events.css";

const Events = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(props.data);
  }, [props]);

  return (
    <div className="Events">
      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <EventCard
              key={event.id}
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
              whyRewatch={event.whyRewatch}
              discussionPrompt={event.discussionPrompt}
              venueId={event.venueId}
            />
          ))
        ) : (
          <h3 className="noResults">{"No Events Yet 😞"}</h3>
        )}
      </main>
    </div>
  );
};

export default Events;
