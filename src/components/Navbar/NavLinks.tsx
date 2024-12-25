
import React from 'react';                      // React kütüphanesini bileşen oluşturmak için içe aktarır
import { ChevronDown } from 'lucide-react';     // ChevronDown ikonunu lucide-react kütüphanesinden içe aktarır


// @ts-ignore
import searchIconPNG from '../assets_comp/paper.png';
// @ts-ignore
import documentPNG from '../assets_comp/google-docs.png';
// @ts-ignore
import aiPNG from '../assets_comp/generative.png';
// @ts-ignore
import integratePNG from '../assets_comp/data-integration.png';

{/* Bir navigasyon bağlantısının yapısını tanımlayan bir arayüz*/}
interface NavLink {
  id: string; 
  name: string; 

  // Opsiyonel açılır menü öğeleri (kimlik, isim ve opsiyonel açıklama)
  items?: { id: string; name: string; description?: string;}[]; 
}


{/* Navigasyon bağlantılarının tanımlandığı liste */}
const navLinks: NavLink[] = [
  {
    id: 'product',      // Bu bağlantı için benzersiz bir kimlik
    name: 'Product',    // Ana bağlantının adı
    items: [            // Bu bağlantıya ait açılır menü öğeleri
      { id: 'features', name: 'Features', description: 'Core product functionalities'},               // Menü öğesi 1
      { id: 'integrations', name: 'Integrations', description: 'External platform connections'},                   // Menü öğesi 2
      { id: 'dashboard', name: 'Dashboard', description: 'Personalized user panels'},            // Menü öğesi 3
      { id: 'insights', name: 'Insights', description: 'AI-driven recommendations'},              // Menü öğesi 4
      { id: 'collaboration', name: 'Collaboration', description: 'Teamwork and sharing'},    // Menü öğesi 5
      { id: 'reports', name: 'Reports', description: 'User-specific performance metrics'},    // Menü öğesi 6
    ],
  },
  {
    id: 'solutions',    // Bu bağlantı için benzersiz bir kimlik
    name: 'Solutions',  // Ana bağlantının adı
    items: [            // Bu bağlantıya ait açılır menü öğeleri
      { id: 'researchers', name: 'Researchers', description: 'Academics and students' },
      { id: 'institutions', name: 'Institutions', description: 'Universities and libraries' },
      { id: 'professionals', name: 'Professionals', description: 'Corporate R&D teams' },
      { id: 'education', name: 'Education', description: 'Schools and training' },
      { id: 'teams', name: 'Teams', description: 'Collaborative group projects' },
      { id: 'healthcare', name: 'Healthcare', description: 'Medical research solutions' },                        // Menü öğesi 1
      { id: 'enterprise', name: 'Enterprise', description: 'Large organizational tools' },           // Menü öğesi 2
    ],
  },
  { id: 'pricing', name: 'Pricing' }, // Açılır menü olmadan sadece bir bağlantı
];


// Navigasyon bağlantılarını render eden bir bileşen
const NavLinks = () => {
  return (
    <div className="flex items-center gap-1">
      {/* Her ana bağlantıyı döngüyle oluşturur */}
      {navLinks.map((link) => (
        <div key={link.id} className="relative group">
          {/* Ana bağlantı düğmesi */}
          <button className="flex items-center gap-0.5 px-3 py-2 text-base hover:text-gray-900 rounded-md hover:bg-gray-100 font-medium">
            {link.name} {/* Bağlantı ismini gösterir */}
            {link.items && <ChevronDown className="pl-1 w-4 h-4" />} {/* Açılır menü varsa ChevronDown ikonu */}
          </button>
          
          {/* Eğer bağlantının bir açılır menüsü varsa */}
          {link.items && (
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-lg shadow-lg ring-1 ring-gray-200 min-w-[300px]">
                <div className="p-2">
                  {/* Her açılır menü öğesini oluşturur */}
                  {link.items.map((item) => (
                    <a
                      key={item.id}
                      href="#" // Öğeye tıklanabilir bir bağlantı ekler
                      className="block px-4 py-1 text-sm text-black-100 hover:bg-gray-50 rounded-md font-medium"
                    >
                      <div>{item.name}</div> {/* Açılır menü öğesinin ismi */}
                      {item.description && (
                        <div className=" text-gray-500 mt-0.2 font-light">{item.description}</div> // Açıklama varsa gösterir
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavLinks; // NavLinks bileşenini dışa aktarır
