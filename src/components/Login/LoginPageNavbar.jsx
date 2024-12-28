import React from 'react';
import LogoLogin from './LogoLogin'; // Özel logo bileşeni
import LanguageSelector from '../LanguageSelector/LanguageSelect.jsx'; // Dil seçici bileşeni
import { Link } from 'react-router-dom';


const LoginPageNavbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-16 px-4 bg-white shadow-md">
      {/* Sol: Logo ve Home düğmesi */}
      <div className="flex items-center gap-4">
        <Link to='/'>
            <LogoLogin />
        </Link>
        
        <LanguageSelector variant="loginPage" /> {/* Navbar için özelleştirilmiş stil */}
      </div>
    </nav>
  );
};

export default LoginPageNavbar;
