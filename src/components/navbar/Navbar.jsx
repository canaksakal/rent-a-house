import React from "react";
import "./Navbar.css";

const Navbar = ({ navLinks }) => {
  return (
    <header className="header">
      <div className="head-wrap">
        <a href="" className="logo">
          Ringlers' Haus
        </a>
        <nav className="navbar">
          {navLinks?.map((links) => (
            <a href={`#${links?.href}`}>{links?.header}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
