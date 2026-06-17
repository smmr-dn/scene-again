import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/EventCard.css";

const EventCard = (props) => {
  const [event, setEvent] = useState({
    id: 0,
    title: "",
    imdbRank: "",
    imdbRating: "",
    year: "",
    director: "",
    genre: [],
    date: "",
    time: "",
    status: "",
    whyRewatch: "",
    discussionPrompt: "",
    venueId: "",
  });

  useEffect(() => {
    setEvent({
      id: props.id,
      title: props.title,
      image: props.image,
      imdbRank: props.imdbRank,
      imdbRating: props.imdbRating,
      year: props.year,
      director: props.director,
      genre: props.genre,
      date: props.date,
      time: props.time,
      status: props.status,
      whyRewatch: props.whyRewatch,
      discussionPrompt: props.discussionPrompt,
      venueId: props.venueId,
    });
  }, [props]);

  return (
    <div className="card">
      <div
        className="top-container"
        style={{ backgroundImage: `url(${event.image})` }}
      ></div>
      <div className="bottom-container">
        <h3>{event.title}</h3>
        <p>{"IMDB Rank: " + event.imdbRank}</p>
        <p>{"IMDB Rating: " + event.imdbRating}</p>
        <Link to={"/event/" + event.id}>
          <a>Read More →</a>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
