import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import 'boxicons/css/boxicons.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Faq from './sections/Faq'
import Testimonials from './components/Testimonials'

export default function App() {
  useEffect(() => {
		Aos.init(
      {
        easing: 'ease-out',
        /* duration: 200, */
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        mirror: true, //allow animations when scrolling past elements
        once: true, //animate only once while scrolling down
        
      }
    );
	})


  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Faq />
    <Footer />
    </>
  )
}

