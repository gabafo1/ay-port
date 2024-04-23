import React from 'react'
import Navbar from './home/components/Navbar'
import HeroSection from './home/components/HeroSection'
import Skills from './home/components/Skills'
import Project from './home/components/Project'
import Footer from './home/components/Footer'

export default function page() {
  return (
    <div className='min-h-screen dark:bg-black bg-white overflow-hidden'>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
        <div className=' max-w-7xl mx-auto p-5 '>
          <Navbar />
          <HeroSection />
        </div>

        <div className='h-10 xl:h-24 bg-gradient-to-t dark:from-black from-white absolute -bottom-5 left-0 xl:bottom-0 w-full'></div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20 dark:bg-black bg-white'>
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  )
}
