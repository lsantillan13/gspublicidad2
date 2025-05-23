import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Banner superior con logo y redes sociales */}
      <div 
        className="py-3 flex items-center justify-center border-t border-b border-yellow-600"
        style={{
          background: 'linear-gradient(135deg, #2c3e50 0%, #1a1a1a 100%)'
        }}
      >
        <div className="container mx-auto flex items-center justify-center px-4">
          {/* Contenedor izquierdo (logo + texto) */}
          <div className="flex items-center">
            {/* Logo izquierdo */}
            <img 
              src="https://i.postimg.cc/t4nPqS4N/logo.png" 
              alt="Logo GS" 
              className="h-10 md:h-12 mr-2 md:mr-4"
              loading="lazy"
            />
            
            {/* Divisor */}
            <div 
              className="mx-2 md:mx-4"
              style={{
                height: '50px',
                width: '1px',
                background: 'linear-gradient(transparent, #d4af37, transparent)'
              }}
            />
            
            {/* Texto principal */}
            <h1 
              className="text-xl md:text-2xl font-bold uppercase tracking-tight md:tracking-wider font-montserrat whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f9e076 50%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              GS SOLUCIONES EN PUBLICIDAD GRÁFICA
            </h1>
            
            {/* Divisor */}
            <div 
              className="mx-2 md:mx-4"
              style={{
                height: '50px',
                width: '1px',
                background: 'linear-gradient(transparent, #d4af37, transparent)'
              }}
            />
            
            {/* Logo derecho */}
            <img 
              src="https://i.postimg.cc/t4nPqS4N/logo.png" 
              alt="Logo GS" 
              className="h-10 md:h-12"
              loading="lazy"
            />
          </div>

          {/* Redes sociales */}
          <div className="flex items-center space-x-3 absolute right-0 px-14 md:space-x-4">
            <a 
              href="#" 
              className="flex items-center justify-center rounded-full transition-all"
              style={{
                width: '30px',
                height: '30px',
                color: '#d4af37',
                border: '1px solid #d4af37'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#d4af37';
                e.currentTarget.style.color = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#d4af37';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fab fa-facebook-f text-xs"></i>
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center rounded-full transition-all"
              style={{
                width: '30px',
                height: '30px',
                color: '#d4af37',
                border: '1px solid #d4af37'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#d4af37';
                e.currentTarget.style.color = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#d4af37';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fab fa-instagram text-xs"></i>
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center rounded-full transition-all"
              style={{
                width: '30px',
                height: '30px',
                color: '#d4af37',
                border: '1px solid #d4af37'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#d4af37';
                e.currentTarget.style.color = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#d4af37';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fab fa-whatsapp text-xs"></i>
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center rounded-full transition-all"
              style={{
                width: '30px',
                height: '30px',
                color: '#d4af37',
                border: '1px solid #d4af37'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#d4af37';
                e.currentTarget.style.color = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#d4af37';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fab fa-linkedin-in text-xs"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Efecto de brillo */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      {/* Navegación principal */}
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Botón de búsqueda (oculto en mobile) */}
        <div className="hidden md:block">
          <button className="text-gray-500 hover:text-cyan-400 transition-colors">
            <i className="fas fa-search h-5 w-5"></i>
          </button>
        </div>
        
        {/* Menú principal */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#" className="text-gray-800 hover:text-blue-700 font-semibold transition-colors">HOME</a>
          <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">PRODUCTOS</a>
          <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">EGRESADOS / MAYORISTAS</a>
          <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">DISEÑOS CON TU LOGO</a>
          <a href="#" className="text-gray-600 hover:text-yellow-600 transition-colors">FAQ</a>
          <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">CONTACTO</a>
        </div>
        
        {/* Acciones derecha */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-cyan-400 transition-colors md:hidden">
            <i className="fas fa-search h-5 w-5"></i>
          </button>
          
          <button className="text-gray-500 hover:text-cyan-400 transition-colors">
            <img 
              src="./btn.png" 
              alt="Login" 
              className="h-6 w-6"
              loading="lazy"
            />
          </button>
          
          {/* Menú hamburguesa para mobile */}
          <button className="md:hidden text-gray-500">
            <i className="fas fa-bars h-6 w-6"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;