import React from 'react';
import FooterLink from './FooterLinks'; // FooterLink bileşeni

// İkon dosyalarının import edilmesi
import githubPNG from '../assets_comp/socials/outline.png';
import youtubePNG from '../assets_comp/socials/youtube.png';
import linkedinPNG from '../assets_comp/socials/linkedin.png';
import facebookPNG from '../assets_comp/socials/facebook.png';
import instagramPNG from '../assets_comp/socials/instagram.png';
import twitterPNG from '../assets_comp/socials/twitter.png';

const SocialLinks = () => {
  // Sosyal medya ikonlarının bilgilerini tanımlıyoruz
  const socialIcons = [
    { src: githubPNG, href: '#', label: 'GitHub' },
    { src: twitterPNG, href: '#', label: 'Twitter' },
    { src: linkedinPNG, href: '#', label: 'LinkedIn' },
    { src: instagramPNG, href: '#', label: 'Instagram' },
    { src: youtubePNG, href: '#', label: 'YouTube' },
    { src: facebookPNG, href: '#', label: 'Facebook' },
  ];

  return (
    <div className="flex space-x-3 py-7"> {/* İkonların yatay dizilimi */}
      {socialIcons.map(({ src, href, label }) => (
        <FooterLink key={label} href={href}>
          <img
            src={src} // Görsel kaynağı
            alt={label} // Alternatif metin
            className="h-4 w-4 opacity-70 hover:opacity-100 hover:scale-110 transition-opacity duration-300"
            aria-label={label} // Erişilebilirlik etiketi
          />
        </FooterLink>
      ))}
    </div>
  );
};

export default SocialLinks;
