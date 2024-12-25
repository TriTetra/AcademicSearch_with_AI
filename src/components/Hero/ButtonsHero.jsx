import React from 'react'

const ButtonsHero = () => {
  return (

    <section>
        <div className='pt-8 pl-1'>

            {/* Get Started düğmesi */}
            <button className="px-6 py-2.5 text-medium font-medium bg-amber-600 text-white rounded-md transition-opacity duration-150 hover:opacity-80 hover:shadow-lg">
                Get Yadigar Free
            </button>

            <span className='px-6'>or</span>

            {/* Get Started düğmesi */}
            <button className="px-6 py-2.5 font-medium text-amber-600 bg-amber-100 hover:bg-gray-100 rounded-md transition-colors">
                Get More Details
            </button>    

        </div>
    </section>
  )
}

export default ButtonsHero