import React from 'react';
// @ts-ignore
import yadigar from '../assets_comp/yadigar.png';
import Font from '../Font';

const Logo = ({ variant = 'default' }) => {
  // Varsayılan ve variant bazlı logo stilleri
  const logoStyles = {
    default: 'w-5 h-5',
    navbar: 'w-7 h-7',
    loginPage: 'w-8 h-8', // Sadece logo gösterilecek
    footer: 'w-10 h-10',
  };

  // Varsayılan ve variant bazlı marka ismi stilleri
  const brandSize = {
    default: 'font-semibold text-base',
    navbar: 'font-semibold text-xl',
    footer: 'font-semibold text-3xl',
  };

  // Aktif stilleri belirle
  const activeLogo = logoStyles[variant] || logoStyles.default;
  const activeSize = brandSize[variant] || brandSize.default;

  return (
    <section>
      <Font />
      <div className={`flex items-center ${variant === 'loginPage' ? '' : 'gap-2'}`}>
        {/* Logo */}
        <img className={activeLogo} src={yadigar} alt="main-website-logo" />

        {/* Marka İsmi */}
        {variant !== 'loginPage' && (
          <span
            className={activeSize}
            style={{ fontFamily: '"PT Sans", sans-serif' }}
          >
            Yadigar
          </span>
        )}
      </div>
    </section>
  );
};

export default Logo;
