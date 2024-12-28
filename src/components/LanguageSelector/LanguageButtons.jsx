import React from 'react';

const LanguageButton = ({ language, isSelected, onClick }) => (
  <button
    onClick={() => onClick(language.code)}
    className={`w-full px-4 py-2 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors duration-200
      ${isSelected ? 'bg-blue-50 text-amber-600' : 'text-black-100'}`}
  >
    <span className="text-xl">{language.flag}</span>
    <span className="text-sm font-medium">{language.name}</span>
  </button>
);

export default LanguageButton