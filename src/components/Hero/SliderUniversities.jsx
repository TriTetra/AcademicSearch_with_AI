import React from 'react';

import california from '../../assets/california.png'
import cambridge from '../../assets/cambridge.png'
import columbia from '../../assets/columbia.png'
import harvard from '../../assets/harvard.png'
import mit from '../../assets/mit.png'
import oxford from '../../assets/oxford.png'
import seattle from '../../assets/seattle.png'
import stanford from '../../assets/stanford.png'
import ucl from '../../assets/ucl.png'
import yale from '../../assets/yale.png'

// Logo Slider Component

  const logos = [
    california,
    cambridge,
    columbia,
    harvard,
    mit,
    oxford,
    seattle,
    stanford,
    ucl,
    yale,
  ];

  const LogoSlider = () => {
    return (
      <div className="flex justify-center items-center overflow-hidden bg-gray-50 h-full w-full">
        {/* Gradient effect for smooth fade at the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
  
        {/* Infinite scrolling container */}
        <div className="flex items-center justify-between gap-20 animate-marquee">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-32 w-32 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`logo-duplicate-${index}`}
              className="h-32 w-32 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    );
  };


export default LogoSlider;
