import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSlider from './Components/Herosection/Hero'
import StorySection from './Components/section1'
import FlavorsSection from './Components/Section2'
import SecuritySection from './Components/Section3'
import PricingSection from './Components/sec4/Sec4'

export default function App() {
  return (
    <>
      <Navbar/>
      <HeroSlider/>
      <StorySection/>
      <FlavorsSection/>
      <SecuritySection/>
      <PricingSection/>
    </>
  )
}
