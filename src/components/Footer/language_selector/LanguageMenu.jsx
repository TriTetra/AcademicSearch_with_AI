import React from 'react';
import LanguageButton from '../language_selector/LanguageButtons'; // Dil seçeneği butonları

const LanguageMenu = ({ isOpen, languages, selectedLanguage, onSelectLanguage, onClose }) => (
  <>
    {/* Menü içeriği */}
    <div
      className={`
        absolute right-50 bottom-full w-64 bg-white rounded-md shadow-lg border border-gray-300 overflow-hidden transition-transform duration-300 ease-out z-50
        ${isOpen ? 'opacity-100 -translate-y-2 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}
      `}
    >
      <div className="max-h-64 overflow-y-auto">
        {/* Tüm dillerin listelenmesi */}
        {languages.map((language) => (
          <LanguageButton
            key={language.code}
            language={language}
            isSelected={language.code === selectedLanguage}
            onClick={onSelectLanguage}
          />
        ))}
      </div>
    </div>
  </>
);

export default LanguageMenu;
