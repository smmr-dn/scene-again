import React from "react";
import { Link } from "react-router-dom";

const HeaderButtons = () => {
  return (
    <div className="header-buttons">
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
    </div>
  );
};

export default HeaderButtons;
