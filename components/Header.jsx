import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Updated CSS file name

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busqueda?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Egresados / Mayoristas', path: '/egresados' },
    { name: 'Con tu Logo', path: '/con-tu-logo' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const socialLinks = [
    { href: '#', icon: 'fab fa-facebook-f', color: 'hover:bg-blue-600' },
    { href: '#', icon: 'fab fa-instagram', color: 'hover:bg-pink-600' },
    { href: '#', icon: 'fab fa-whatsapp', color: 'hover:bg-green-500' },
    { href: '#', icon: 'fab fa-linkedin-in', color: 'hover:bg-blue-700' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-[#fcfdfc]/90 border-b border-gray-300 shadow-lg"
    >
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-3 flex items-center justify-center border-t border-b border-yellow-400">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo and Title */}
          <div className="flex items-center">

            <div className="w-[405px]">
            </div>

            <img
              src="https://i.postimg.cc/t4nPqS4N/logo.png"
              alt="Logo GS"
              className="h-10 md:h-12 mr-2 md:mr-4"
            />
            <div className="h-8 w-px bg-yellow-400 mx-2 md:mx-4" />
            <h1 className="text-xl md:text-2xl font-bold text-yellow-400 uppercase tracking-tight font-['Montserrat'] whitespace-nowrap">
              GS Soluciones en Publicidad Gráfica
            </h1>
            <div className="h-8 w-px bg-yellow-400 mx-2 md:mx-4" />
            <img
              src="https://i.postimg.cc/t4nPqS4N/logo.png"
              alt="Logo GS"
              className="h-10 md:h-12"
            />
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`p-2 rounded-full text-gray-600 ${link.color} hover:text-white transition-all duration-300`}
                aria-label={`Visitar ${link.icon.split('-')[2]}`}
              >
                <i className={`${link.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      {/* Navigation Section */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-400 bg-gray-50 shadow-sm transition-all duration-300"
              aria-label="Buscar productos o servicios"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600"
              aria-label="Enviar búsqueda"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Main Navigation */}
        <nav className="hidden md:flex font-bold space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-800 hover:text-blue-700 font-semibold px-2 py-1 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Button */}
          <button
            onClick={() => navigate('/busqueda')}
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Abrir búsqueda"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Login Button (Placeholder) */}
          <button
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Iniciar sesión"
          >
            <img src="./btn.png" alt="Login" className="h-6 w-6" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#fcfdfc] border-t border-gray-300"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {/* Mobile Search Bar */}
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-400 bg-gray-50 shadow-sm transition-all duration-300"
                    aria-label="Buscar productos o servicios"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600"
                    aria-label="Enviar búsqueda"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Mobile Navigation */}
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-800 hover:text-blue-700 font-semibold text-lg py-2 border-b border-gray-200 hover:border-yellow-400 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;