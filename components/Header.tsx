
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon, HeartIcon } from './icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Community', path: '/community' },
  { name: 'Counseling', path: '/booking' },
  { name: 'Resources', path: '/resources' },
  { name: 'Prayer Wall', path: '/prayer-wall' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#8b5cf6',
    fontWeight: '600',
    borderBottom: '2px solid #8b5cf6'
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 text-brand-purple-700 hover:text-brand-purple-900 transition-colors">
                <HeartIcon className="h-8 w-8" />
                <span className="font-serif text-2xl font-bold">Singles Council</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                  className="text-gray-600 hover:text-brand-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-brand-purple-700 hover:text-brand-purple-800 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-gray-600 hover:bg-purple-100 hover:text-brand-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
