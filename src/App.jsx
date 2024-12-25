import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='mx-auto'>
          <Navbar />
          <Hero />
          <Footer />
    </main>
  )
}

export default App