import AboutUs from '../component/AboutUs'
import FormSide from '../component/FormSide'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'
import React from 'react'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <FormSide/>
      <AboutUs/>
    </>
  )
}

export default Homepage