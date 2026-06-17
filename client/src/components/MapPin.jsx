import React from "react";

const MapPin = ({ color, textColor, dotColor, icon, label }) => (
  <div className="pin-wrapper">
    <div className="pin-container">
      <div className="pin-drop" style={{ background: color }}>
        <i className={`ti ti-${icon}`} style={{ color: textColor }} />
      </div>
      <div className="pin-tip" style={{ background: dotColor }} />
    </div>
    <span className="pin-label" style={{ color: textColor }}>
      {label}
    </span>
  </div>
);

export default MapPin;
