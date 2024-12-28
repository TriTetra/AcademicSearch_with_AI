import React, { useState } from 'react';
import { Globe } from 'lucide-react'; // Globe simgesi
import { languages } from './languages'; // Desteklenen diller listesi
import LanguageMenu from './LanguageMenu'; // Açılır dil menüsü bileşeni

const LanguageSelector = ({ variant = 'default', buttonStyles = '', menuStyles = '' }) => {
  const [isOpen, setIsOpen] = useState(false); // Menü açık/kapalı durumu
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Varsayılan dil İngilizce

  const handleSelectLanguage = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false); // Menü kapanır
  };

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

  // Varsayılan stilleri variant ile kontrol et
  const defaultButtonStyles = {
    default: 'flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-opasity duration-200 border border-black-100 rounded-md',
    loginPage: 'flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-opasity duration-200 border border-gray-700 rounded-md',
    footer: 'flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-md',
  };


  const appliedButtonStyles = buttonStyles || defaultButtonStyles[variant] || defaultButtonStyles.default;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={appliedButtonStyles}
      >
        <Globe className="h-4 w-4" />
        <span>{selectedLang.flag}</span>
        <span>{selectedLang.name}</span>
      </button>

      <LanguageMenu
        isOpen={isOpen}
        languages={languages}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
        onClose={() => setIsOpen(false)}
        variant={variant} // Variant bilgisi iletiliyor
      />
    </div>
  );
};

export default LanguageSelector;
