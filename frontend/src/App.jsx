import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import HeaderSection from './Components/HeaderSection'
import ScrollingBanner from './Components/ScrollingBanner'
import WhyFrench from './Components/WhyFrench'
import WhyChoose from './Components/WhyChoose'
import FeatureBoxes from './Components/FeatureBoxes'
import LearningFeatures from './Components/LearningFeatures'
import Footer from './Components/Footer'
import ContactSection from './Components/ContactSection'
import Testimonials from './Components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <HeaderSection />
      <ScrollingBanner />
      <WhyFrench />
      <WhyChoose />
      <FeatureBoxes />
      <LearningFeatures />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
