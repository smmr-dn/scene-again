import "./App.css";

import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

import { EventsAPI } from "./api/EventsAPI";
import Event from "./components/Event";
import HeaderButtons from "./components/HeaderButtons";
import MapPin from "./components/MapPin";
import Events from "./pages/Events";
import PageNotFound from "./pages/PageNotFound";
import Venues from "./pages/Venues";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await EventsAPI.getAllEvents();
      setEvents(eventData);
    };

    fetchEvents();
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <Venues />,
    },
    // {
    //   path: '/echolounge',
    //   element: <LocationEvents index={1} />
    // },
    // {
    //   path: '/houseofblues',
    //   element: <LocationEvents index={2} />
    // },
    // {
    //   path: '/pavilion',
    //   element: <LocationEvents index={3} />
    // },
    // {
    //   path: '/americanairlines',
    //   element: <LocationEvents index={4} />
    // },
    {
      path: "/events",
      element: <Events data={events} />,
    },
    {
      path: "/event/:id",
      element: <Event />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div className="app">
      <div className="background-overlay">
        <HeaderButtons />
        <h1>Scene Again</h1>
        <div className="map-pins">
          <MapPin
            color="#534AB7"
            textColor="#EEEDFE"
            dotColor="#26215C"
            icon="armchair"
            label="The Screening Room"
          />
          <MapPin
            color="#0F6E56"
            textColor="#E1F5EE"
            dotColor="#04342C"
            icon="world"
            label="The Art House"
          />
          <MapPin
            color="#993C1D"
            textColor="#FAECE7"
            dotColor="#4A1B0C"
            icon="movie"
            label="The Blockbuster Lounge"
          />
          <MapPin
            color="#185FA5"
            textColor="#E6F1FB"
            dotColor="#042C53"
            icon="trophy"
            label="The Academy Hall"
          />
        </div>
        <main>{element}</main>
      </div>
    </div>
  );
};

export default App;
