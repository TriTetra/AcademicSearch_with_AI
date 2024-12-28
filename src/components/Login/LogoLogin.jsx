

import React from 'react'; // React kütüphanesi, bileşen oluşturmak için kullanılır.

// @ts-ignore
import yadigar from '../assets_comp/yadigar.png';
import Font from '../Font';


const LogoLogin = () => {
    return (

        <section>

        <Font />
        
          <div className="flex items-center gap-2">
  
            {/* ------- Logo------- */}
            <a href=""></a>
            <img className="w-8 h-8" src={yadigar} alt="main-website-logo" />
  
                {/* Lucide React'ten alınan Box ikonu.
                    - w-6: Genişlik 1.5rem (24px).
                    - h-6: Yükseklik 1.5rem (24px).
                    - text-black: Rengi siyah yapar.
                */}

          </div>
        </section>
    );
  };
  
export default LogoLogin