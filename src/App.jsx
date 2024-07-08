import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HomeSection from './components/HomeSection/HomeSection'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className='h-[100vh] overflow-x-hidden bg-[#F3F3F3] pt-6 px-6'>
      <Hero />
      <HomeSection />
      <Footer />
    </div>
  )
}

export default App
