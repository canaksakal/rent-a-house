import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
      <header className="header">
        <a href="" className="logo">Ringlers' Haus</a>
        <nav className="navbar">
          <a href="#welcome">Heim</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact">Kontakt</a>
          <a href="#pricing">Preisgestaltung</a>
          <a href="#adress">Adresse</a>
        </nav>
      </header>
  );
};

export default Navbar;
