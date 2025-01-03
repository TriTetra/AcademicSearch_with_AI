import React, { useState } from 'react'; // useState hook'u import ediliyor.
import { DesktopSide } from '../components/Hero/DesktopSide'; // Masaüstü Hero bileşeni.
import { MobileSide } from '../components/Hero/MobileSide'; // Mobil Hero bileşeni.
import { useMediaQuery } from 'react-responsive'; // Mobil ekran kontrolü için.
import LogoSlider from '../components/Hero/SliderUniversities';

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Mobil kontrolü.

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start relative">

      {/* Slider Section */}
      <div className="w-full pt-24">
        <LogoSlider /> {/* The logo slider is placed at the top */}
      </div>

      {/* İçerik kapsayıcı */}
      <div className="flex flex-col w-full max-w-screen-xl px-4 lg:px-8 ">

        {/* Mobil ve Desktop arasında geçiş */}
          {isMobile ? <MobileSide /> : <DesktopSide />}

      </div>
    </section>
  );
};

export default Hero;
