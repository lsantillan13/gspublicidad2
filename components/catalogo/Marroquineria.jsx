import React from 'react'

function Marroquineria() {
  return (
<section class="relative py-6 bg-[#f9f5f0]/30 overflow-hidden">
    {/* <!-- Textura de cuero sutil --> */}
    <div class="absolute inset-0 bg-[url('https://img.freepik.com/fotos-premium/fondo-textura-cuero-marron-cerca_293060-2941.jpg?semt=ais_hybrid&w=740')] opacity-50"></div>
    
    {/* <!-- Elementos decorativos --> */}
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden box-shadow-5xl bg-black/70 ">
      <div class="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#d4a76a] opacity-10 blur-3xl"></div>
      <div class="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-[#8b5a2b] opacity-100 blur-3xl"></div>
    </div>
  
    <div class="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
      {/* <!-- Encabezado con estilo elegante --> */}
      <div class="text-center">
        <span class="inline-block mb-4 text-sm font-semibold tracking-widest text-[#fff] uppercase">
          Artesanía en Cuero
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-[#d4a76a] mb-4">
          <span class="relative inline-block">
            <span class="relative z-10">MARROQUINERÍA</span>
            <span class="absolute bottom-1 left-0 w-full h-3 bg-[#d4a76a] opacity-30 z-0"></span>
          </span>
          <br/>
          <span class="text-[#d4a76d]">DE ALTA CALIDAD</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#d4a76a] to-[#8b5a2b] mx-auto my-2"></div>
        <p class="text-lg text-[#fff] max-w-2xl mx-auto my-2 mb-4">
          Productos artesanales en cuero genuino con terminaciones de lujo
        </p>
      </div>
  
      {/* <!-- Grid de productos --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
          <div class="h-80 bg-[#f1e8dd] relative overflow-hidden">
            <img src="https://i.postimg.cc/yYz7bkmr/image.png" alt="Carteras de cuero"
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#3a2a1a]/50 to-transparent"></div>
          </div>

          {/* <!-- Carteras --> */}
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="text-2xl font-bold mb-1">Carteras</h3>
            <p class="text-[#d4a76a] mb-4">Elegancia y funcionalidad</p>
            <a href="#" class="flex items-center text-white group">
              Ver modelos
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
          <div class="absolute top-4 right-4 bg-[#3a2a1a] text-[#d4a76a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Nuevos Modelos
          </div>
        </div>
        
        
        {/* <!-- Mochilas --> */}
        <div class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
          <div class="h-80 bg-[#f1e8dd] relative overflow-hidden">
            <img src="https://i.postimg.cc/qBQxqC19/image.png" alt="Bolsos de cuero" 
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#3a2a1a]/50 to-transparent"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="text-2xl font-bold mb-1">Bolsos</h3>
            <p class="text-[#d4a76a] mb-4">Estilo y durabilidad</p>
            <a href="#" class="flex items-center text-white group">
              Ver colección
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
          <div class="absolute top-4 right-4 bg-[#3a2a1a] text-[#d4a76a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Best Seller
          </div>
        </div>
        


        {/* <!-- Portafolios --> */}
        <div class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
          <div class="h-80 bg-[#f1e8dd] relative overflow-hidden">
            <img src="https://i.postimg.cc/MZ1SVqC0/image.png" alt="Portafolios de cuero" 
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#3a2a1a]/50 to-transparent"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="text-2xl font-bold mb-1">Portafolios</h3>
            <p class="text-[#d4a76a] mb-4">Profesionalismo ejecutivo</p>
            <a href="#" class="flex items-center text-white group">
              Ver opciones
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
          <div class="absolute top-4 right-4 bg-[#3a2a1a] text-[#d4a76a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Personalizable
          </div>
        </div>
        
  
        {/* <!-- Accesorios --> */}
        <div class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
          <div class="h-80 bg-[#f1e8dd] relative overflow-hidden">
            <img src="https://i.postimg.cc/cJX5S5tb/image.png" alt="Accesorios de cuero" 
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#3a2a1a]/50 to-transparent"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="text-2xl font-bold mb-1">Accesorios</h3>
            <p class="text-[#d4a76a] mb-4">Detalles que marcan la diferencia</p>
            <a href="#" class="flex items-center text-white group">
              Ver accesorios
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
          <div class="absolute top-4 right-4 bg-[#3a2a1a] text-[#d4a76a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Variedad
          </div>
        </div>
        
      </div>
  
      {/* <!-- Llamado a la acción premium --> */}
      <div class="py-16 text-center ">
        <div class="inline-flex flex-col sm:flex-row items-center bg-white  shadow-lg border border-[#d4a76a] overflow-hidden rounded-lg">
          <div class="px-8 py-3 bg-[#f9f5f0]">
            <span class="text-[#5c3a21] font-medium">¿Buscas algo personalizado?</span>
          </div>
          <a href="#" class="px-8 py-3 bg-[#5c3a21] text-white font-bold hover:bg-[#3a2a1a] transition-all flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            Solicitar cotización
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Marroquineria