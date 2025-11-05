import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import { motion } from 'motion/react'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white '>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Testimonial/>
      <Contact/>
      <Footer/>

     {/* <section className='min-h-screen'/> */}
    </div>
  )
}

export default App