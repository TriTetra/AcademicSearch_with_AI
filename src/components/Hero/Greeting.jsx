import React from 'react'

import Font from '../Font'; // Font bileşeninin doğru yolu


const Greeting = () => {
  return (
    <section>
        <Font />

            <div className='w-full p-1 flex justify-center items-center text-center text-gray-400'>
              <p>
              Effortless exploration of knowledge, <span className="underline underline-offset-8 decoration-black-100 italic">powered by advanced AI</span> tools.
              </p>
            </div>


            {/* Tanıtım Bölümü */}
            <div className="w-full p-1 flex justify-center items-center text-center">
              <p 
                  className="sm:text-7xl text-2xl font-semibold text-black-100 font-generalsans " 
                  style={{ fontFamily: '"PT Sans", sans-serif' }}>

                  From discovery to organization, Yadigar simplifies it all.
              </p>            
            </div>

    </section>
  )
}

export default Greeting