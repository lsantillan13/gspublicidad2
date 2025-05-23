import React from 'react'

function PromocionaTuEmpresa() {
  return (
              <section class="font-montserrat bg-gray-900 text-white w-full h-auto mx-auto">

            <div class="relative w-full h-full overflow-hidden">
              {/* <!-- Base oscura --> */}
              <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
              
              {/* <!-- Luz roja animada --> */}
              <div class="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/20 rounded-full filter blur-3xl mix-blend-screen animate-float-red"></div>
              
              {/* <!-- Luz azul animada --> */}
              <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl mix-blend-screen animate-float-blue"></div>
              
              {/* <!-- Luz ámbar animada --> */}
              <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl mix-blend-screen animate-float-amber"></div>
              
              {/* <!-- Luz adicional para más dinamismo --> */}
              <div class="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/15 rounded-full filter blur-3xl mix-blend-screen animate-float-red"></div>
              {/* <!-- Hero Section de Categorías --> */}
              <section class="relative min-h-screen py-16 px-4 overflow-hidden flex items-center">
                {/* <!-- Fondo Animado --> */}
                <div class="absolute inset-0 z-0 opacity-20">
                  <div class="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>
                
                {/* <!-- Elementos Flotantes --> */}
                <div class="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-xl animate-float"></div>
                <div class="absolute bottom-32 right-16 w-60 h-60 rounded-full bg-gradient-to-r from-amber-400/10 to-yellow-500/10 blur-xl animate-float delay-1000"></div>
                
                {/* <!-- Contenido Principal --> */}
                <div class=" mx-auto relative z-10 h-full">
                  {/* <!-- Encabezado --> */}
                  <div class="text-center mb-16">
                    <h2 class="text-5xl md:text-7xl lg:text-6xl font-bebas tracking-tighter mb-0">
                      <span class="text-stroke text-7xl">PROMOCIONÁ</span>
                      <span class="block text-7xl text-blue-600 font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">TU EMPRESA</span>
                    </h2>
                    <div class="w-48 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto my-2"></div>
                  </div>
            
                  {/* <!-- Categorías con Imágenes Circulares --> */}
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {/* <!-- Banderas --> */}
                    <div class="group relative flex flex-col items-center">
                      <div class="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300 mb-6 shadow-xl">
                        <img 
                          src="https://i.postimg.cc/Bb7mQn7V/image.png" 
                          alt="Banderas" 
                          class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div class="text-center">
                        <h2 class="text-2xl font-bebas mb-3 text-blue-400">BANDERAS</h2>
                        <p class="text-gray-300 mb-6">Tecnología y confort con tu logo</p>
                        <a href="#" class="inline-flex items-center text-blue-400 group">
                          VER PRODUCTOS
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
            
                    {/* <!-- Portabanners --> */}
                    <div class="group relative flex flex-col items-center">
                      <div class="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300 mb-6 shadow-xl">
                        <img 
                          src="https://i.postimg.cc/nhD3pZ43/image.png" 
                          alt="Portabanners" 
                          class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div class="text-center">
                        <h2 class="text-2xl font-bebas mb-3 text-blue-400">PORTABANNERS</h2>
                        <p class="text-gray-300 mb-6">Gabardina grafa de máxima durabilidad</p>
                        <a href="#" class="inline-flex items-center text-blue-400 group">
                          VER PRODUCTOS
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
            
                    {/* <!-- Fly Banners --> */}
                    <div class="group relative flex flex-col items-center">
                      <div class="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300 mb-6 shadow-xl">
                        <img 
                          src="https://i.postimg.cc/26zGQZPt/image.png" 
                          alt="Flybanners" 
                          class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div class="text-center">
                        <h2 class="text-2xl font-bebas mb-3 text-blue-400">FLY BANNERS</h2>
                        <p class="text-gray-300 mb-6">Resistencia petrolera con tu marca</p>
                        <a href="#" class="inline-flex items-center text-blue-400 group">
                          VER PRODUCTOS
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* <!-- Elemento Decorativo Inferior --> */}
                <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
              </section>
          </div>

          </section>
  )
}

export default PromocionaTuEmpresa