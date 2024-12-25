import React from 'react';

// FooterSection bileşeni, footer içinde bir alt grup oluşturur.
const FooterSection = ({ title, children, className = '' }) => {
  return (
    <div className={className}> {/* TailwindCSS sınıflarını eklemek için 'className' props'u kullanılır */}
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3> 
      {/* Başlık: text-sm metin boyutu, font-semibold kalın yazı tipi */}
      <div className="mt-4">{children}</div> 
      {/* İçerik: Linkler veya diğer bileşenler */}
    </div>
  );
};

export default FooterSection; // Bileşenin diğer dosyalarda kullanılmasını sağlar.
