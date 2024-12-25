import React from 'react';
import { ChevronRight } from 'lucide-react';

const navItems = [
  {
    id: 'product',
    name: 'Product',
    items: ['Features', 'Templates', 'Integrations'],
  },
  {
    id: 'solutions',
    name: 'Solutions',
    items: ['For Teams', 'Enterprise'],
  },
  {
    id: 'pricing',
    name: 'Pricing',
  },
];


const MobileMenu = ({ isOpen }) => {
    return (
      <div
        className={`
          fixed inset-x-0 top-14 bg-white border-t border-gray-200 transition-all duration-300 
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >

        {/* Menü Konteyneri */}
        <div className="p-4 space-y-4">
            
          {/* Menü Öğeleri */}
          {navItems.map((item) => (
            <div key={item.id}>
              <button className="flex items-center justify-between w-full px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                {item.name}
                {item.items && <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          ))}
          
          {/* Alt Butonlar */}
          <div className="pt-4 border-t border-gray-200">
            <button className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
              Log in
            </button>
            <button className="w-full px-3 py-2 mt-2 text-sm text-white bg-black hover:bg-gray-800 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default MobileMenu;