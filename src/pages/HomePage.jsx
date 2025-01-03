import React from 'react'
import Hero from '../sections/Hero'


const App = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-50"> {/* navbar ve footer yüksekliği çıkarıldı */}
      <Hero />
    </div>
  )
}

export default App