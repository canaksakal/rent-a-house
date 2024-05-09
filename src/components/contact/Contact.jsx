import React from "react";
import "./Contact.css";

const contacts = {
  telNo: "+90 539 887 04 20",
  mail: "aksakalcan97@gmail.com",
  instagram: "aksakalcn",
  linkedin: "aksakalcan",
  facebook: "",
  twitter: "",
  personalWebSite: "",
};

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-details">
        <h3>Kontakt</h3>
        <ul>
          <li>Phone Number: {contacts.telNo}</li>
          <li>E-Mail: {contacts.mail}</li>
          <li>Instagram: {contacts.instagram}</li>
          <li>Linkedin: {contacts.linkedin}</li>
          <li>Facebook:</li>
        </ul>
      </div>
{/*       <div className="contact-info">
        <h3>Information</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          perferendis accusamus veniam eligendi quaerat iste non recusandae
          officia ipsa repellendus.
        </p>
      </div> */}
    </div>
  );
};

export default Contact;
