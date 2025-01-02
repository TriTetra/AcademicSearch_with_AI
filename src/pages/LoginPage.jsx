// LoginPage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../sections/Navbar";
import LoginPageNavbar from "../components/Login/LoginPageNavbar";
import LoginForm from "../components/Login/LoginForm";
import SkullHeadScene from "../components/ThreeModels/SkullHeadScene";
import Logo from "../components/Logo&Brand/Logo";
import scrollIcon from "../components/assets_comp/scroll-bar.png";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      {showNavbar && (
        <div className="fixed top-0 w-full transition-transform duration-300 bg-white shadow-md z-50">
          <LoginPageNavbar />
        </div>
      )}

      {/* Login Page Content */}
      <div className="flex h-screen bg-gray-50">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
          {/* Logo */}
          <div className="absolute top-10 left-0 right-0 flex justify-center">
            <Link to='/'>
              <Logo variant="footer" />
            </Link>
          </div>

          {/* Heading */}
          <div className="text-5xl font-normal text-gray-800 mb-4 text-center pt-20">
            Think Smarter, <br /> Work Faster
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 text-center">
            Explore knowledge with confidence, powered by AI.
          </p>

          {/* Login Form */}
          <LoginForm />

          {/* Learn More Button */}
          <div className="mt-8 flex justify-center">
            <button className="py-2 px-4 flex items-center justify-center bg-gray-200 text-gray-600 font-medium rounded-full gap-2 hover:bg-gray-100 transition duration-300">
              <img src={scrollIcon} alt="scroll-icon" className="w-4 h-4" />
              <span>Learn More</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full h-full bg-gray-200 rounded-md shadow-lg flex justify-center items-center">
            <SkullHeadScene />
          </div>
        </div>
      </div>

      {/* Scroll Message */}
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <p>Scroll down to reveal the navbar!</p>
      </div>
    </>
  );
};

export default LoginPage;
