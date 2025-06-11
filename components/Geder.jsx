import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Geder.css';


// Constants for URLs and icons to avoid repetition
const SOCIAL_LINKS = [
  {
    url: "https://www.facebook.com/gspublicidadoficial",
    className: "hover:bg-blue-600",
    icon: "fab fa-facebook-f"
  },
  {
    url: "https://www.instagram.com/gspublicidad/",
    className: "hover:bg-pink-600",
    icon: "fab fa-instagram"
  },
  {
    url: "tel:+549299549-9076",
    className: "hover:bg-green-500",
    icon: "fab fa-whatsapp"
  }
];

const NAV_ITEMS = [
  { path: "/", label: "HOME", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/all-products", label: "PRODUCTOS", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/egresados-y-mayoristas", label: "EGRESADOS / MAYORISTAS", hoverClass: "hover:text-yellow-600 hover:border-yellow-600" },
  { path: "/con-tu-logo", label: "DISEÑOS CON TU LOGO", hoverClass: "hover:text-yellow-600 hover:border-yellow-600" },
  { path: "/faq", label: "FAQ", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/contacto", label: "CONTACTO", hoverClass: "hover:text-blue-700 hover:border-blue-600" }
];

const BTN = './btn.png'; // Assuming this is the path to your button image

function Geder() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-screen md:py-0 z-50 mb-0 bg-[#fcfdfc] border-b-yellow-600 shadow-lg transition-all duration-300 ${isScrolled ? 'py-0' : ''}`}>
      {/* Banner horizontal compacto */}
      <div className="metal-bg py-2 flex items-center justify-center border-t border-b border-orange-300">
        <div className="container mx-auto flex items-center justify-center px-4">
          {/* Contenedor izquierdo (logo + texto) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" aria-label="Home">
              {/* Logo izquierdo - oculto en móvil */}
              <img 
                src="https://i.postimg.cc/t4nPqS4N/logo.png" 
                alt="Logo GS" 
                className="h-8 sm:h-10 md:h-12 mr-1 sm:mr-2 md:mr-4"
                loading="lazy"
              />
              
              {/* Divisor - oculto en móvil */}
              <div className="hidden sm:block logo-dividerc bg-yellow-400/60  sm:mx-2 md:mx-4"></div>
              
              {/* Texto principal - ajustado para móvil */}
              <h1 className="text-xs sm:text-xl md:text-2xl font-bold text-yellow-500 uppercase tracking-tight sm:tracking-wider font-montserrat whitespace-nowrap">
                GS SOLUCIONES EN PUBLICIDAD GRÁFICA
              </h1>
              
              {/* Divisor - oculto en móvil */}
              <div className="hidden sm:block logo-dividerc bg-yellow-400/60 mx-1 sm:mx-2 md:mx-4"></div>
              
              {/* Logo derecho - oculto en móvil */}
              <img 
                src="https://i.postimg.cc/t4nPqS4N/logo.png" 
                alt="Logo GS" 
                className="hidden sm:block h-8 sm:h-10 md:h-12 mr-2 sm:mr-4 md:mr-8"
                loading="lazy"
              />
            </Link>
          </div>
    
          {/* Redes sociales */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-2 md:space-x-3 ml-2 sm:ml-4 absolute right-2 sm:right-4 md:right-8">
            {SOCIAL_LINKS.map((social, index) => (
              <Link 
                key={index}
                to={social.url} 
                className={`social-btn ${social.className} hover:text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon.split('-')[1]}
              >
                <i className={`${social.icon} text-xs sm:text-sm md:text-md text-black`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    
      {/* Efecto de brillo */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    
      {/* Navegación principal */}
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
        {/* Botón búsqueda (oculto en móvil) */}
        <div className="hidden md:block">
          <button 
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        {/* Menú principal - oculto en móvil */}
        <nav className="hidden md:flex font-bold space-x-4 lg:space-x-6 xl:space-x-8 w-full justify-center">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-gray-700 text-sm md:text-sm xl:text-lg font-semibold px-0 lg:px-2 py-1 border-b-2 border-transparent transition-all ${item.hoverClass}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* /* Acciones derecha */ }
          <div className="flex justify-between mx-auto w-100  space-x-2 sm:-space-x-1 py-1">
            <button 
              className="text-gray-600 hover:text-blue-600 transition-colors md:hidden"
              aria-label="Mobile search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <Link to="/admin" className="hidden md:block">
            <button 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Login"
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </button>
              </Link>
            
            {/* Menú hamburguesa móvil */}
          <button 
            className="md:hidden text-gray-600 p-4 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="red" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col space-y-2 px-4 py-3">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-gray-700 text-lg font-semibold px-3 py-2 rounded-md transition-all ${item.hoverClass.replace('border-b-2', '')} hover:bg-gray-100`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Redes sociales en menú móvil */}
          <div className="flex justify-center space-x-4 pt-4">
            {SOCIAL_LINKS.map((social, index) => (
              <Link 
                key={index}
                to={social.url} 
                className={`social-btn ${social.className} hover:text-white w-10 h-10 flex items-center justify-center rounded-full`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon.split('-')[1]}
              >
                <i className={`${social.icon} text-lg`}></i>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Geder);