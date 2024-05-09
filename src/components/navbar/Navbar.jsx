import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="head-wrap">
        <a href="" className="logo">
          Ringlers' Haus
        </a>
        <nav className="navbar">
          <a href="#welcome">Heim</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact">Kontakt</a>
          <a href="#address">Adresse</a>
          <a href="#pricing">Preisgestaltung</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
