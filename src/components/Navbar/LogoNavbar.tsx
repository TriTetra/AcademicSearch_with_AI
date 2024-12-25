

import React from 'react'; // React kütüphanesi, bileşen oluşturmak için kullanılır.

// @ts-ignore
import yadigar from '../assets_comp/yadigar.png';
import Font from '../Font';

const Logo = () => {
    return (

      <section>

      <Font />
      
        <div className="flex items-center gap-2">

          {/* ------- Logo------- */}
          <img className="w-7 h-7" src={yadigar} alt="main-website-logo" />

              {/* Lucide React'ten alınan Box ikonu.
                  - w-6: Genişlik 1.5rem (24px).
                  - h-6: Yükseklik 1.5rem (24px).
                  - text-black: Rengi siyah yapar.
              */}

          {/* ------- Marka İsmi ------- */}
          <span className="font-semibold text-xl " style={{ fontFamily: '"PT Sans", sans-serif' }} >Yadigar</span>
          {/* 
            - font-medium: Yazıyı orta kalınlıkta yapar.
            - Yazı içeriği: "Workspace".
          */}
        </div>
      </section>
    );
  };
  
export default Logo