import React from "react";
import { Link } from "react-router-dom";

const MapPin = ({ color, textColor, dotColor, icon, label, venueId, showLabel = true }) => (
  <Link to={"/venue/" + venueId}>
    <div className="pin-wrapper">
      <div className="pin-container">
        <div className="pin-drop" style={{ background: color }}>
          <i className={`ti ti-${icon}`} style={{ color: textColor }} />
        </div>
        <div className="pin-tip" style={{ background: dotColor }} />
      </div>
      {showLabel && (
        <span className="pin-label" style={{ color: textColor }}>
          {label}
        </span>
      )}
    </div>
  </Link>
);

export default MapPin;
