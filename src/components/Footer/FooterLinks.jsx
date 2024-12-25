import React from 'react';

// FooterLink bileşeni, bir bağlantı (link) oluşturur.
const FooterLink = ({ href, children }) => (
  <a
    href={href} // Bağlantının hedef adresi (örn: 'https://github.com')
    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    // TailwindCSS sınıfları:
    // - text-gray-600: Varsayılan metin rengi gri.
    // - hover:text-gray-900: Fare üzerine geldiğinde metin rengi koyu gri olur.
    // - transition-colors duration-200: Renk değişimi 200ms içinde yumuşak bir geçişle gerçekleşir.
  >
    {children} {/* Linkin içeriği (metin veya ikon olabilir) */}
  </a>
);

export default FooterLink; // Bileşenin diğer dosyalarda kullanılmasını sağlar.
