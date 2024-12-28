// LoginPage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../sections/Navbar';
import LoginPageNavbar from '../components/Login/LoginPageNavbar';

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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div>
          {/* Login formu */}
          <h1 className="text-2xl font-bold">Login Page</h1>
          <p>Welcome to the login page.</p>
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
