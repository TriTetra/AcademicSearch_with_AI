import React, { useState } from 'react';
import { Globe } from 'lucide-react'; // Globe simgesi
import { languages } from './languages'; // Desteklenen diller listesi
import LanguageMenu from './LanguageMenu'; // Açılır dil menüsü bileşeni

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false); // Menü açık/kapalı durumu
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Seçilen dil (varsayılan: İngilizce)

  // Dil seçildiğinde çalışır
  const handleSelectLanguage = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false); // Menü kapanır
  };

  // Seçilen dilin detaylarını getirir
  const selectedLang = languages.find(lang => lang.code === selectedLanguage);

  return (
    <div className="relative">
      {/* Menü açma/kapatma düğmesi */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm hover:text-gray-900 transition-colors duration-200 rounded-md hover:bg-gray-50 border border-black-100"
      >
        <Globe className="h-4 w-4" />
        <span>{selectedLang.flag}</span>
        <span>{selectedLang.name}</span>
      </button>

      {/* Açılır Menü */}
      <LanguageMenu
        isOpen={isOpen}
        languages={languages}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default LanguageSelector;
