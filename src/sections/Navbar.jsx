
import React, { useState } from 'react';                                 // React ve useState hook'u import ediliyor.
import Logo from '../components/Navbar/LogoNavbar';                            // Logo bileşeni.
import NavLinks from '../components/Navbar/NavLinks';                    // Navigasyon bağlantıları bileşeni.
import AuthButtons from '../components/Navbar/AuthButtons';              // Giriş ve Kayıt Ol butonları bileşeni.
import MobileMenuButton from '../components/Navbar/MobileMenuButtons';   // Mobil menü aç/kapa butonu bileşeni.
import MobileMenu from '../components/Navbar/MobileMenu';                // Mobil menü bileşeni.


const Navbar = () => {
  // Mobil menünün açık/kapalı durumunu yönetmek için state kullanılıyor.
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Navbar ana kapsayıcı.
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-gray-200 pt-1">
      {/* İçerik kapsayıcı */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Sol Taraf: Logo ve Navigasyon Bağlantıları */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <Logo />


            {/* Geniş ekranlarda gösterilen navigasyon bağlantıları */}
            <div className="hidden md:flex items-center ml-4 lg:ml-8">
              <NavLinks />
            </div>
          </div>

          {/* Sağ Taraf: Giriş ve Kayıt Ol Butonları */}
          <div className="hidden md:flex items-center gap-2">
            <AuthButtons />
          </div>

          {/* Mobil Menü Butonu */}
          <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobil Menü */}
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
