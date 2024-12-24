import { useState } from 'react';

// Menü ikonları için mutlak yollar kullanılıyor.
import menuSvg from '../assets/menu.svg';
import closeMenu from '../assets/close.svg';
import { navLinksLeft } from '../constants'; // Menü linkleri

import logoPNG from '../assets/yadigar.png';
import Font from '../components/Font';

// Navigasyon Menüsü Öğeleri
const NavItemsLeft = () => {
    return (
        <ul className='nav-ul gap-5'>
            {navLinksLeft.map(({ id, href, name }) => (
                <li key={id} className='nav-li'>
                    {/* Link elemanları */}
                    <a href={href} className='nav-li_a' onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

// Navigasyon Menüsü Öğeleri
const NavItemsRight = () => {
    return (
        <ul className='nav-ul flex gap-5'>
            {navLinksLeft.map(({ id, href, name }) => (
                <li key={id} className='nav-li'>
                    {/* Link elemanları */}
                    <a href={href} className='nav-li_a' onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

// Ana Navbar Bileşeni
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Menünün varsayılan kapalı durumu

    // Menü Aç/Kapa Fonksiyonu
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-white/90'>

            {/* Font Bileşeni Buraya Eklendi */}
            <Font />

            {/* Navbar Konteyneri */}
            <div className="w-full">
                <div className="flex justify-between items-center py-5 mx-auto c-space">

                    {/* Logo ve Marka Adı */}
                    <div className='flex items-center gap-2'>
                        {/* Logo */}
                        <img className='w-7 h-7'  src={logoPNG}  alt="logo-yadigar" />
                        {/* Brand Name */}
                        <a href="/" className="text-xl hover:text-black transition-colors font-semibold"
                            style={{fontFamily: "'PT Sans', sans-serif"}}>
                            Divime
                        </a>
                    </div>

                    {/* Menü Butonu (Mobil) */}
                    <button
                        onClick={toggleMenu}
                        className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
                        aria-label='Toggle menu'
                    >
                        {/* Menü ikonu (Açık/Kapalı) */}
                        <img src={isOpen ? closeMenu : menuSvg} alt="toggle" className="w-6 h-6" />
                    </button>

                    {/* Geniş Ekran Navigasyon */}
                    <nav className='sm:flex hidden items-center gap-5'>
                        <NavItemsLeft />
                    </nav>
                    
                </div>
            </div>

            {/* Mobil Navigasyon Menüsü */}
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
                <nav className='p-5'>
                    <NavItemsLeft />
                </nav>
            </div>
        </header>
    );
};


export default Navbar;
