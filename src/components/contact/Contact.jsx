import React from "react";
import "./Contact.css";
import {
  IconBrandInstagram,
  IconPhoneFilled,
  IconMailFilled,
} from "@tabler/icons-react";

/* const contacts = {
  telNo: "+90 539 887 04 20",
  mail: "aksakalcan97@gmail.com",
  instagram: "aksakalcn",
  linkedin: "aksakalcan",
  facebook: "",
  twitter: "",
  personalWebSite: "",
}; */

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-details">
        <h3>Kontakt</h3>
        <span className="headSecond">
          <ul className="headList">
            <li className="iconWrapper">
              <a href="https://www.linkedin.com/in/aksakalcan/">
                <IconPhoneFilled /> Phone Number
              </a>
              
            </li>
            <li>
              <a href="https://www.instagram.com/aksakalcn/">
                <IconBrandInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/garbagecn">
                <IconMailFilled /> Mail
              </a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Contact;
