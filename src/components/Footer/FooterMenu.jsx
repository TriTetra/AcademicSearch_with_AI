import React from 'react';

const FooterMenu = () => {
  // Menü verileri
  const menus = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Status', href: '#' },
        { name: 'Terms & privacy', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '#'},
        { name: 'Pricing', href: '#'},
        { name: 'Blog', href: '#'},
        { name: 'Community', href: '#'},
        { name: 'Integrations', href: '#'},
        { name: 'Affiliates', href: '#'},
      ],
    },
    {
        title: 'Yadigar For',
        links: [
          { name: 'Education', href: '#'},
          { name: 'Personel', href: '#'},
          { name: 'Enterprise', href: '#'},
        ],
      },
  ];

  return (
    <div className="flex flex-row justify-between gap-8">
      {menus.map((menu, index) => (
        <div key={index}>
          {/* Başlık */}
          <h3 className="text-sm font-semibold text-gray-900">{menu.title}</h3>
          <ul className="mt-4 space-y-2">
            {/* Linklerin Listesi */}
            {menu.links.map((link, linkIndex) => (
              <li key={linkIndex} className="flex items-center gap-2">
                {link.icon && <span>{link.icon}</span>} {/* Eğer bir ikon varsa göster */}
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;
