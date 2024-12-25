import React from 'react'

import Font from '../Font'; // Font bileşeninin doğru yolu


const Greeting = () => {
  return (
    <section>
        <Font />

            {/* Tanıtım Bölümü */}
            <div className="w-full p-1">

            <p 
                className="sm:text-7xl text-2xl font-semibold text-black-100 font-generalsans" 
                style={{ fontFamily: '"PT Sans", sans-serif' }}>

                Bringing Science Closer to All
            </p>

            <p className="sm:text-2xl pt-4">
                Effortless exploration of knowledge, <span className="underline underline-offset-8">powered by advanced AI</span> tools.
            </p>
            
            </div>

    </section>
  )
}

export default Greeting