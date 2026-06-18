import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DateTimeAPI } from "../api/DateTimeAPI";
import { EventsAPI } from "../api/EventsAPI";

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const eventData = await EventsAPI.getEventById(id);
        setEvent(eventData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <article className="event-information">
      <img src={event.image} />
      <div className="event-details">
        <h2>{event.title}</h2>
        <p>
          <strong>IMDB Rank: </strong>
          {event.imdbrank}
          <br />
          <strong>IMDB Rating: </strong>
          {event.imdbrating}
          <br />
          <strong>Year: </strong>
          {event.year}
          <br />
          <strong>Director: </strong>
          {event.director}
          <br />
          <strong>Genre: </strong>
          {event.genre?.join(", ")}
          <br />
          <strong>Date: </strong>
          {DateTimeAPI.formatDate(event.date)}
          <br />
          <strong>Time: </strong>
          {DateTimeAPI.formatTime(event.time)}
          <br />
          <strong>Status: </strong>
          {event.status}
          <br />
          <strong>Why Rewatch: </strong>
          {event.whyrewatch}
          <br />
          <strong>Discussion Prompt: </strong>
          {event.discussionprompt}
        </p>
      </div>
    </article>
  );
};

export default Event;
