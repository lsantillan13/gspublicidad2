import React from 'react'
import './Geder.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router';

function Geder() {
  return (
    <header class="fixed w-full z-50  bg-[#fcfdfc] border-b-yellow-600 shadow-lg">
        {/* <!-- Banner horizontal compacto --> */}
        <div class="metal-bg py-2 flex items-center justify-center border-t border-b border-yellow-600">
          <div class="container mx-auto flex items-center justify-center px-4">
            {/* <!-- Contenedor izquierdo (logo + texto) --> */}
            <div class="flex items-center">
              <Link to="/" class="flex items-center">
              {/* <!-- Logo izquierdo --> */}
              <img src="https://i.postimg.cc/t4nPqS4N/logo.png" alt="Logo GS" class="h-10 md:h-12 mr-2 md:mr-4" />
              
              {/* <!-- Divisor --> */}
              <div class="logo-divider mx-2 md:mx-4"></div>
              
              {/* <!-- Texto principal --> */}
              <h1 class="text-xl md:text-2xl font-bold gold-text uppercase tracking-tight md:tracking-wider font-montserrat font-['Montserrat'] whitespace-nowrap">
                GS SOLUCIONES EN PUBLICIDAD GRÁFICA
              </h1>
              
              {/* <!-- Divisor --> */}
              <div class="logo-divider mx-2 md:mx-4"></div>
              
              {/* <!-- Logo derecho --> */}
              <img src="https://i.postimg.cc/t4nPqS4N/logo.png" alt="Logo GS" class="h-10 md:h-12 mr-4 md:mr-8" />
              </Link>
            </div>
      
            {/* <!-- Redes sociales --> */}
            <div class="flex items-center space-x-2 md:space-x-3 ml-4 absolute right-4 md:right-8">
              <a href="#" class="social-btn hover:bg-blue-600 hover:text-white">
                <i class="fab fa-facebook-f text-md text-black"></i>
              </a>
              <a href="#" class="social-btn hover:bg-pink-600 hover:text-white">
                <i class="fab fa-instagram text-md text-black"></i>
              </a>
              <a href="#" class="social-btn hover:bg-green-500 hover:text-white">
                <i class="fab fa-whatsapp text-md text-black"></i>
              </a>
              <a href="#" class="social-btn hover:bg-blue-700 hover:text-white">
                <i class="fab fa-linkedin-in text-md text-black"></i>
              </a>
            </div>
          </div>
        </div>
      
        {/* <!-- Efecto de brillo --> */}
        <div class="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
        {/* <!-- Navegación principal --> */}
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* <!-- Botón búsqueda (oculto en móvil) --> */}
          <div class="hidden md:block">
            <button class="text-gray-600 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          {/* <!-- Menú principal --> */}
          <nav class="hidden md:flex font-bold space-x-6 lg:space-x-8">
            <a href="/" class="text-gray-800 hover:text-blue-700 font-semibold px-2 py-1 border-b-2 border-transparent hover:border-blue-600 transition-all">
              HOME
            </a>
            <a href="/all-products" class="text-gray-700 hover:text-blue-700 font-bold px-2 py-1 border-b-2 border-transparent hover:border-blue-600 transition-all">
              PRODUCTOS
            </a>
            <a href="/egresados-y-mayoristas" class="text-gray-700 hover:text-yellow-700 font-bold px-2 py-1 border-b-2 border-transparent hover:border-yellow-600 transition-all">
              EGRESADOS / MAYORISTAS
            </a>
            <a href="/con-tu-logo" class="text-gray-700 hover:text-yellow-700 font-bold px-2 py-1 border-b-2 border-transparent hover:border-yellow-600 transition-all">
              DISEÑOS CON TU LOGO
            </a>
            <a href="/faq" class="text-gray-700 hover:text-yellow-700 font-bold px-2 py-1 border-b-2 border-transparent hover:border-yellow-600 transition-all">
              FAQ
            </a>
            <a href="/contacto" class="text-gray-700 hover:text-blue-700 font-bold px-2 py-1 border-b-2 border-transparent hover:border-blue-600 transition-all">
              CONTACTO
            </a>
          </nav>
          
          {/* <!-- Acciones derecha --> */}
          <div class="flex items-center space-x-4">
            <button class="text-gray-600 hover:text-blue-600 transition-colors md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button class="text-gray-600 hover:text-blue-600 transition-colors">
              <img src="./btn.png" alt="Login" class="h-6 w-6" />
            </button>
            
            {/* <!-- Menú hamburguesa móvil --> */}
            <button class="md:hidden text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
  )
}

export default Geder