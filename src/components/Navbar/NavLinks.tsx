import React from 'react';
import { ChevronDown } from 'lucide-react'; // ChevronDown icon

// Define the structure of items in navigation links
interface NavLinkItem {
  id: string;
  name: string;
  description?: string;
  href: string; // Add href to support redirection
}

// Define the main navigation link structure
interface NavLink {
  id: string;
  name: string;
  href?: string; // Top-level links can also have href
  items?: NavLinkItem[]; // Array of sub-items
}

// Define the navigation links
const navLinks: NavLink[] = [
  {
    id: 'product',
    name: 'Product',
    items: [
      { id: 'features', name: 'Features', description: 'Core product functionalities', href: '/under-development' },
      { id: 'integrations', name: 'Integrations', description: 'External platform connections', href: '/under-development' },
      { id: 'dashboard', name: 'Dashboard', description: 'Personalized user panels', href: '/under-development' },
      { id: 'insights', name: 'Insights', description: 'AI-driven recommendations', href: '/under-development' },
      { id: 'collaboration', name: 'Collaboration', description: 'Teamwork and sharing', href: '/under-development' },
      { id: 'reports', name: 'Reports', description: 'User-specific performance metrics', href: '/under-development' },
    ],
  },
  {
    id: 'solutions',
    name: 'Solutions',
    items: [
      { id: 'researchers', name: 'Researchers', description: 'Academics and students', href: '/under-development' },
      { id: 'institutions', name: 'Institutions', description: 'Universities and libraries', href: '/under-development' },
      { id: 'professionals', name: 'Professionals', description: 'Corporate R&D teams', href: '/under-development' },
      { id: 'education', name: 'Education', description: 'Schools and training', href: '/under-development' },
      { id: 'teams', name: 'Teams', description: 'Collaborative group projects', href: '/under-development' },
      { id: 'healthcare', name: 'Healthcare', description: 'Medical research solutions', href: '/under-development' },
      { id: 'enterprise', name: 'Enterprise', description: 'Large organizational tools', href: '/under-development' },
    ],
  },
  { id: 'pricing', name: 'Pricing', href: '/under-development' }, // Top-level link
];

// NavLinks component
const NavLinks = () => {
  return (
    <div className="flex items-center gap-1">
      {navLinks.map((link) => (
        <div key={link.id} className="relative group">
          {/* Top-level link */}
          <a
            href={link.href || '#'}
            className="flex items-center gap-0.5 px-3 py-2 text-base hover:text-gray-900 rounded-md hover:bg-gray-100 font-medium"
          >
            {link.name}
            {link.items && <ChevronDown className="pl-1 w-4 h-4" />}
          </a>

          {/* Dropdown menu */}
          {link.items && (
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-lg shadow-lg ring-1 ring-gray-200 min-w-[300px]">
                <div className="p-2">
                  {link.items.map((item) => (
                    <a
                      key={item.id}
                      href={item.href || '#'}
                      className="block px-4 py-1 text-sm text-black-100 hover:bg-gray-50 rounded-md font-medium"
                    >
                      <div>{item.name}</div>
                      {item.description && (
                        <div className="text-gray-500 mt-0.2 font-light">{item.description}</div>
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

export default NavLinks;
