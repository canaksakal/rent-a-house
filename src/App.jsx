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


const images = [
  {
    src: "../src/images/livingroom.jpeg",
    id: "1",
    desc: "Livingroom",
  },
  {
    src: "../src/images/livingroom-2.jpeg",
    id: "2",
    desc: "Livingroom",
  },
  {
    src: "../src/images/corner.jpeg",
    id: "3",
    desc: "Livingroom",
  },
  {
    src: "../src/images/bedroom-1.jpeg",
    id: "4",
    desc: "Bedroom",
  },
  {
    src: "../src/images/bedroom-2.jpeg",
    id: "5",
    desc: "Bedroom",
  },
  {
    src: "../src/images/bathroom.jpeg",
    id: "6",
    desc: "bathroom",
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
