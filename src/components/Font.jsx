
import React, { useEffect } from 'react';

const Font = () => {
  useEffect(() => {
    // Google Font'u dinamik olarak yüklemek için bir link öğesi oluşturuyoruz
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Temizlik: Bileşen kaldırıldığında link öğesini kaldırır
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null; // Bu bileşen DOM'a herhangi bir şey render etmez
};

export default Font;
