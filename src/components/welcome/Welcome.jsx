import React from "react";
import "./Welcome.css";
import backround from "/images/corner.jpeg";

const Welcome = () => {
  return (
    <div
      id="welcome"
      className="bg-image"
      style={{
        backgroundImage: `url("${backround}")`,
      }}
    >
      <h2 className="bg-image-text">Willkommen im Haus der Ringlers</h2>
    </div>
  );
};

export default Welcome;
