import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { EventsAPI } from "../api/EventsAPI";
import Header from "./Header";

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const eventData = await EventsAPI.getEventsById(id);
        setEvent(eventData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <article className="event-information">
        <img src={event.image} />
        <h3>{event.title}</h3>
      </article>
    </>
  );
};

export default Event;
