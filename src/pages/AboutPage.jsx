import React from 'react'

const AboutPage = () => {
 return (
   <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
     <div className="container mx-auto px-4">
       <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
       <p className="text-lg md:text-xl text-gray-600 mb-8">
         Hello World
       </p>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div>
           <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
           <p className="text-gray-600">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           </p>
         </div>
         <div>
           <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
           <p className="text-gray-600">
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat.
           </p>
         </div>
       </div>
     </div>
   </div>
 )
}

export default AboutPage