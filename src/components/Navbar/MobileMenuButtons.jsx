import React from 'react';
import { Menu, X } from 'lucide-react';

const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
    >
      {/* Erişilebilirlik için ekran okuyuculara özel bir açıklama */}
      <span className="sr-only">Toggle menu</span>
      
      {/* Menü Durumu */}
      {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  );
};

export default MobileMenuButton;
