import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/welcome/Welcome";
import Adress from "./components/address/Address";
import Contact from "./components/contact/Contact";
import Pricing from "./components/pricing/Pricing";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Location from "./components/map-location/Location";
import Information from "./components/information/Information";
import galleryData from "./components/gallery/gallery-data";
import navbarData from "./components/navbar/navbar-data";

function App() {

  return (
    <div>
      <Welcome />
      <Navbar navLinks={navbarData}/>
      <Information />
      <Adress />
      <Contact />
      <Gallery content={galleryData} />
      <Pricing />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
