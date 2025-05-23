import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-opacity-90 backdrop-blur-md bg-[#fcfdfc] border-b-gray-300 shadow-md">
      <div className="metal-bg py-3 flex items-center justify-center border-t border-b border-yellow-600">
        <div className="container mx-auto flex items-center justify-center px-4">
          <div className="flex items-center">
            <img src="https://i.postimg.cc/t4nPqS4N/logo.png" alt="Logo GS" className="h-10 md:h-12 mr-2 md:mr-4" />
            <div className="logo-divider mx-2 md:mx-4"></div>
            <h1 className="text-xl md:text-2xl font-bold gold-text uppercase tracking-tight md:tracking-wider font-['Montserrat'] whitespace-nowrap">
              GS SOLUCIONES EN PUBLICIDAD GRÁFICA
            </h1>
            <div className="logo-divider mx-2 md:mx-4"></div>
            <img src="https://i.postimg.cc/t4nPqS4N/logo.png" alt="Logo GS" className="h-10 md:h-12 mr-4 md:mr-8" />
          </div>

          <div className="flex items-center space-x-2 md:space-x-3 ml-4 absolute right-4 md:right-8">
            <a href="#" className="social-btn hover:bg-blue-600 hover:text-white">
              <i className="fab fa-facebook-f text-xs"></i>
            </a>
            <a href="#" className="social-btn hover:bg-pink-600 hover:text-white">
              <i className="fab fa-instagram text-xs"></i>
            </a>
            <a href="#" className="social-btn hover:bg-green-500 hover:text-white">
              <i className="fab fa-whatsapp text-xs"></i>
            </a>
            <a href="#" className="social-btn hover:bg-blue-700 hover:text-white">
              <i className="fab fa-linkedin-in text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
