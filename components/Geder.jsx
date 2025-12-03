import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Geder.css';
import { useNavigate } from 'react-router-dom';

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
  { path: "/egresados-y-mayoristas", label: "EGRESADOS", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/all-products", label: "SERVICIOS", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/about", label: "QUIENES SOMOS", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/contacto", label: "CONTACTO", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/faq", label: "FAQ", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
];

function Geder() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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

  const handleLoginClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/admin', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  };

  return (
    <header className={`fixed w-full z-50 bg-[#fcfdfc] border-b border-yellow-600 shadow-lg transition-all duration-300 ${isScrolled ? 'py-0' : ''}`}>
      {/* Banner horizontal compacto */}
      <div className="metal-bg py-1 sm:py-2 flex items-center justify-center border-t border-b border-orange-300">
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 w-full">
          
          {/* Contenedor centrado (logo izquierdo + texto + logo derecho) */}
          <div className="flex items-center justify-center flex-1 min-w-0">
            <Link to="/" className="flex items-center min-w-0">
            {/* Logo izquierdo - visible en todos los dispositivos */}
            <img 
              src="https://i.postimg.cc/t4nPqS4N/logo.png" 
              alt="Logo GS" 
              className="h-8 sm:h-10 md:h-12 lg:h-14 mr-2 sm:mr-3 md:mr-4 flex-shrink-0"
              loading="lazy"
            />
            
            {/* Divisor izquierdo - visible en desktop, oculto en móvil */}
            <div className="hidden md:block logo-dividerc bg-yellow-400/60 h-6 sm:h-8 mx-1 sm:mx-2 md:mx-3 lg:mx-4 w-px flex-shrink-0"></div>
            
            {/* Texto principal - centrado */}
            <h1 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-yellow-500 uppercase tracking-tight sm:tracking-wide font-montserrat whitespace-nowrap truncate min-w-0 text-center">
              SOLUCIONES EN PUBLICIDAD GRÁFICA
            </h1>
            
            {/* Divisor derecho - visible en desktop, oculto en móvil */}
            <div className="hidden md:block logo-dividerc bg-yellow-400/60 h-6 sm:h-8 mx-1 sm:mx-2 md:mx-3 lg:mx-4 w-px flex-shrink-0"></div>
            
            {/* Logo derecho - visible en desktop, oculto en móvil */}
            <img 
              src="https://i.postimg.cc/t4nPqS4N/logo.png" 
              alt="Logo GS" 
              className=" md:block h-8 sm:h-10 md:h-12 lg:h-14 ml-2 sm:ml-3 md:ml-4 flex-shrink-0"
              loading="lazy"
            />
            </Link>
          </div>
    
          {/* Redes sociales - ocultas en móvil, visibles en desktop */}
          <div className="hidden md:flex items-center space-x-1 md:space-x-2 lg:space-x-3 flex-shrink-0 ml-4">
            {SOCIAL_LINKS.map((social, index) => (
              <Link 
                key={index}
                to={social.url} 
                className={`social-btn ${social.className} hover:text-white w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full transition-colors duration-200`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon.split('-')[1]}
              >
                <i className={`${social.icon} text-xs md:text-sm text-black hover:text-white`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    
      {/* Efecto de brillo */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    
      {/* Navegación principal */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 flex">
        {/* Botón búsqueda (oculto en móvil) */}
        <div className="hidden md:block flex-shrink-0 justify-self-start mr-4">
          <button 
            className="text-gray-600 hover:text-blue-600 transition-colors p-1"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        {/* Menú principal - oculto en móvil */}
        <nav className="hidden md:flex font-bold space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8 w-full justify-center">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-gray-700 text-xs lg:text-sm xl:text-base font-semibold px-1 lg:px-2 xl:px-3 py-1 border-b-2 border-transparent transition-all duration-200 whitespace-nowrap ${item.hoverClass}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Acciones derecha */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
          {/* Botón búsqueda móvil */}
          <button 
            className="text-gray-600 hover:text-blue-600 transition-colors p-1 md:hidden"
            aria-label="Mobile search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Botón login - oculto en móvil */}
          <button 
            className="text-gray-600 hover:text-blue-600 transition-colors p-1 hidden md:block justify-self-end"
            aria-label="Login"
            onClick={handleLoginClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </button>
          
          {/* Menú hamburguesa móvil */}
          <button 
            className="md:hidden text-gray-600 p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="flex flex-col space-y-1 px-4 py-3">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-gray-700 text-base font-semibold px-3 py-2 rounded-md transition-all duration-200 ${
                item.hoverClass.replace('border-b-2', '')
              } hover:bg-gray-100`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Redes sociales en menú móvil - centradas */}
          <div className="flex justify-center space-x-4 pt-3 border-t border-gray-200 mt-2">
            {SOCIAL_LINKS.map((social, index) => (
              <Link 
                key={index}
                to={social.url} 
                className={`social-btn ${social.className} hover:text-white w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon.split('-')[1]}
              >
                <i className={`${social.icon} text-sm`}></i>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Geder);