import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    {name: 'Solutions', path: '/solutions' },
    {name: 'Technology', path: '/Technology' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-accentCyan bg-secondary/80 border-b-2 border-accentCyan'
        : 'text-textSecondary hover:text-textPrimary hover:bg-card/50'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-primary/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link to="/" className="text-xl font-bold gradient-text">
            Mark-Q Infotech
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={linkStyle}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Call To Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-accentBlue text-primary hover:bg-accentCyan transition-all shadow-glow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textSecondary hover:text-textPrimary p-2 rounded-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-b border-border px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-accentCyan bg-card'
                    : 'text-textSecondary hover:text-textPrimary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;