import React from "react";
import "./Location.css"

const Location = () => {
  return (
    <div id="location" className="location">
      <iframe
        className="map-location"
        src="https://www.google.com/maps/d/embed?mid=1EzFRMxJ9PNkoyPg7K2uYMZgAd665Nog&ehbc=2E312F"
      ></iframe>
    </div>
  );
};

export default Location;
