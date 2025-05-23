import React from 'react'

function Hogar() {
  return (
            <section class="relative bg-gradient-to-b from-slate-200 via-purple-300 to-[#f0f4ff]">
            {/* <!-- Efectos decorativos --> */}
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div class="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-100 blur-xl"></div>
              <div class="absolute bottom-32 right-16 w-60 h-60 rounded-full bg-yellow-100 blur-xl"></div>
            </div>
          
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">

              
              {/* <!-- Encabezado con estilo similar a "Nuevos Ingresos" --> */}
              <div class="text-center mb-8">
                <div class="flex items-center justify-center mb-6">
                  <div class="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  <h2 class="mx-4 text-4xl md:text-5xl font-bold text-gray-900 mt-8">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ARTÍCULOS</span> PARA EL HOGAR
                  </h2>
                  <div class="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </div>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                  Productos funcionales y con estilo para tu vida diaria
                </p>
              </div>
          
              {/* <!-- Grid de categorías principales --> */}
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {/* <!-- Juegos de Vino --> */}
                <div class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div class="h-48 bg-gradient-to-br from-purple-50 to-white flex items-center justify-center relative overflow-hidden">
                    <img src="https://i.postimg.cc/cHbt2JV6/image.png" alt="Juegos de Vino" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div class="p-5 text-center">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Juegos de Vino</h3>
                    <p class="text-gray-600 mb-4">Elegantes sets de 2 y 4 piezas</p>
                    <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Ver productos
                    </a>
                  </div>
                </div>
          
                {/* <!-- Sets Materos --> */}
                <div class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div class="h-48 bg-gradient-to-br from-amber-50 to-white flex items-center justify-center relative overflow-hidden">
                    <img src="https://i.postimg.cc/YqHRrnvR/image.png" alt="Sets Materos" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div class="p-5 text-center">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Sets Materos</h3>
                    <p class="text-gray-600 mb-4">Completos con termo y accesorios</p>
                    <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Ver productos
                    </a>
                  </div>
                </div>
          
                {/* <!-- Termos y Botellas --> */}
                <div class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div class="h-48 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative overflow-hidden">
                    <img src="https://i.postimg.cc/tC865D6P/image.png" alt="Termos y Botellas" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div class="p-5 text-center">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Termos y Botellas</h3>
                    <p class="text-gray-600 mb-4">Acero inoxidable y silicona</p>
                    <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Ver productos
                    </a>
                  </div>
                </div>
          
                {/* <!-- Bags y Mochilas --> */}
                <div class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div class="h-48 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative overflow-hidden">
                    <img src="https://i.postimg.cc/kXDdJZ8p/image.png" alt="Bags y Mochilas" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div class="p-5 text-center">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Bags y Mochilas</h3>
                    <p class="text-gray-600 mb-4">Estilo y funcionalidad</p>
                    <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Ver productos
                    </a>
                  </div>
                </div>
              </div>
          
              {/* <!-- Botón ver más --> */}
              <div class="text-center mt-12">
                <a href="#" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all">
                  Ver todos los artículos para el hogar
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
        </section>
  )
}

export default Hogar