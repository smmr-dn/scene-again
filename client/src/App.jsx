import "./App.css";

import React, { useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import { EventsAPI } from "./api/EventsAPI";
import Event from "./components/Event";
import Header from "./components/Header";
import HeaderButtons from "./components/HeaderButtons";
import Venue from "./components/Venue";
import Events from "./pages/Events";
import PageNotFound from "./pages/PageNotFound";
import Venues from "./pages/Venues";

const App = () => {
  const location = useLocation();
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
    {
      path: "/venue/:id",
      element: <Venue />,
    },
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
        {location.pathname === "/" ? <HeaderButtons /> : <Header />}
        <main className={location.pathname !== "/" ? "with-header" : ""}>{element}</main>
      </div>
    </div>
  );
};

export default App;
