
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-light"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    <span className="text-xl font-bold text-primary-dark font-serif">Turbat Civil Hospital</span>
  </div>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'House Job', path: '/house-job' },
    { name: 'Tender', path: '/tender' },
    { name: 'Emails', path: '/emails' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
  const activeLinkClasses = "bg-primary-light text-white";
  const inactiveLinkClasses = "text-slate-700 hover:bg-teal-100 hover:text-primary-dark";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex-shrink-0">
            <Logo />
          </NavLink>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink to="/appointments" className="ml-3 px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-sm font-medium transition-transform duration-200 hover:scale-105 whitespace-nowrap">
                Book Appointment
              </NavLink>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-dark hover:bg-teal-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                {link.name}
              </NavLink>
            ))}
             <NavLink to="/appointments" className="block w-full text-center mt-4 px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-sm font-medium transition-transform duration-200 hover:scale-105">
                Book Appointment
              </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
