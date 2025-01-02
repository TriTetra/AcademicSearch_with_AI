import React from 'react'; // React ana modülü
import BrandSection from '../components/Footer/BrandSection';
import LanguageSelector from '../components/LanguageSelector/LanguageSelect.jsx.jsx';
import Font from '../components/Font';
import FooterMenu from '../components/Footer/FooterMenu.jsx';

// Footer bileşeni
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dinamik olarak mevcut yılı almak için bir değişken oluşturuluyor

  return (
    <footer className="w-full border-t border-gray-200 bg-white"> {/* Footer ana kapsayıcı */}
      <div className="mx-auto max-w-7xl px-4 py-12"> {/* İçerik merkezi ve genişliği ayarları */}
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Grid düzeni: 4 sütunlu yapı */}
          
          {/* Şirket Bilgileri */}
          <div className="col-span-1" style={{ fontFamily: '"PT Sans", sans-serif' }}>
            <BrandSection />
            <LanguageSelector />

            <p className='pt-4 font-light sm:text-sm text-gray-600'>
              Do Not Sell or Share My Info <br/>
              Cookie settings
            </p>
            
          </div>

          {/* FooterMenu */}
          <div className="col-span-3 pt-9 pl-40">
            <FooterMenu />
          </div>
      
        </div>

        {/* Alt Bar */}
        <div className="mt-6"> {/* Alt bölüm, üst sınır çizgisi */}
          <p className="text-sm " style={{ fontFamily: '"PT Sans", sans-serif' }}>
            © {currentYear} TheArtificialTeam. Inc. {/* Mevcut yıl ve telif hakkı metni */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
