// LoginPage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../sections/Navbar';
import LoginPageNavbar from '../components/Login/LoginPageNavbar';
import LoginForm from '../components/Login/LoginForm';
import { Canvas } from '@react-three/fiber';

import BlackholeScene from '../components/ThreeModels/BlackholeScene'
import SkullHeadScene from '../components/ThreeModels/SkullHeadScene'

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
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your ideas, amplified</h1>
        <p className="text-lg text-gray-600 mb-6">
          Privacy-first AI that helps you create in confidence.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <button className="w-full py-2 px-4 mb-4 flex items-center justify-center bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Continue with Google
          </button>
          <p className="text-center text-sm text-gray-400 mb-4">OR</p>
          <input
            type="email"
            placeholder="Enter your personal or work email"
            className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition">
            Continue with email
          </button>
          <p className="text-xs text-gray-400 mt-4 text-center">
            By continuing, you agree to the terms and privacy policy.
          </p>
        </div>
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
