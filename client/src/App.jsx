import React, { useEffect, useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import Events from "./pages/Events";
import Venues from "./pages/Venues";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
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
      path: "/*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div className="app">
      <header className="main-header">
        <h1>Scene Again</h1>

        <div className="header-buttons">
          <Link to="/" role="button">
            Home
          </Link>
          <Link to="/events" role="button">
            Events
          </Link>
        </div>
      </header>

      <main>{element}</main>
    </div>
  );
};

export default App;
