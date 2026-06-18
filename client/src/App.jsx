import "./App.css";

import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

import { EventsAPI } from "./api/EventsAPI";
import Event from "./components/Event";
import Header from "./components/Header";
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
        <Header />
        <main>{element}</main>
      </div>
    </div>
  );
};

export default App;
