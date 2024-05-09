import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Welcome from './components/welcome/Welcome'
import Adress from './components/address/Address'
import Contact from './components/contact/Contact'
import Pricing from './components/pricing/Pricing'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import Location from './components/map-location/Location'
import Information from './components/information/Information'
import img01 from "../images/livingroom.jpeg"
import img02 from "../images/livingroom-2.jpeg"
import img03 from "../images/corner.jpeg"
import img04 from "../images/bedroom-1.jpeg"
import img05 from "../images/bedroom-2.jpeg"
import img06 from "../images/bathroom.jpeg"

const images = [
  {
    src: img01,
    id: "1",
    desc: "Livingroom",
  },
  {
    src: img02,
    id: "2",
    desc: "Livingroom",
  },
  {
    src: img03,
    id: "3",
    desc: "Livingroom",
  },
  {
    src: img04,
    id: "4",
    desc: "Bedroom",
  },
  {
    src: img05,
    id: "5",
    desc: "Bedroom",
  },
  {
    src: img06,
    id: "6",
    desc: "Bathroom",
  },
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Welcome />
      <Navbar />
      <Information />
      <Adress />
      <Contact />
      <Gallery content={images} />
      <Pricing />
      <Location />
      <Footer /> 
    </div>
  )
}

export default App
