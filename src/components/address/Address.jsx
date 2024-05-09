import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <div id="address" className="address">
{/*       <div className="address-card">
        <h3>Erläuterung</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          aperiam.
        </p>
      </div> */}
      <div className="address-information">
        <h3>Offene Adresse</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>You can check map location down below.</p>
        <a href="#location">Go to google map location.</a>
      </div>
    </div>
  );
};

export default Address;
