// LoginPage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../sections/Navbar';
import LoginPageNavbar from '../components/Login/LoginPageNavbar';
import LoginForm from '../components/Login/LoginForm';
import { Canvas } from '@react-three/fiber';

import BlackholeScene from '../components/ThreeModels/BlackholeScene'
import SkullHeadScene from '../components/ThreeModels/SkullHeadScene'
import Logo from '../components/Logo&Brand/Logo';
import FontSecond from '../components/FontSecond';

const LoginPage = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll hareketine bağlı olarak navbar'ı göster
      if (window.scrollY > 700) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar'ı koşullu olarak göster */}
      {showNavbar && (
        <div className="fixed top-0 w-full transition-transform duration-300 bg-white shadow-md">
          <LoginPageNavbar />
        </div>
      )}

      {/* Login sayfası içeriği */}
      <div className="flex h-screen bg-gray-50">

      {/* Sol Taraf */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative">

        {/* Logo en üstte ve ortalanmış */}
        <div className="absolute top-4 left-0 right-0 flex justify-center pt-8">
          <Logo variant="footer" />
        </div>

        <div className="text-5xl font-medium text-gray-800 mb-4 text-center pt-10">Think Smarter, <br/> Work Faster</div>

          {/* Açıklama Yazısı */}

          <p className="text-lg text-gray-600 mb-6 text-center">
            Explore knowledge with confidence, powered by AI.
          </p>

        <LoginForm />

      </div>



      {/* Sağ Taraf */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="size-full bg-gray-200 rounded-md shadow-lg flex justify-center items-center">
            <SkullHeadScene />
        </div>
      </div>
    </div>


      {/* Scroll için ek içerik */}
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <p>Scroll down to reveal the navbar!</p>
      </div>
    </>
  );
};

export default LoginPage;
