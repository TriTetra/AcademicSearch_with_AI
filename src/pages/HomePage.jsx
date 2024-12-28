import React from 'react'
import Hero from '../sections/Hero'


const App = () => {
  return (
    <div className="min-h-[calc(100vh-200px)]"> {/* navbar ve footer yüksekliği çıkarıldı */}
      <Hero />
    </div>
  )
}

export default App