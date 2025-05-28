import React from 'react'

function Hospitalario() {
  return (
            <section class="relative py-12 bg-gradient-to-b from-[#f0f4ff] via-cyan-900 to-[#0c0f1c]">
            {/* <!-- Efectos decorativos --> */}
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div class="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-100 blur-xl"></div>
              <div class="absolute bottom-32 right-16 w-60 h-60 rounded-full bg-blue-200 blur-xl"></div>
            </div>
          
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* <!-- Encabezado con estilo médico profesional --> */}
              <div class="text-center mb-8">
                <div class="flex items-center justify-center mb-4">
                  <div class="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  <h2 class="mx-4 text-4xl md:text-5xl font-bold text-gray-900">
                    <span class="text-transparent bg-clip-text text-blue-500 text-5xl">ARTÍCULOS</span> HOSPITALARIOS
                  </h2>
                  <div class="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </div>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                  Equipamiento y accesorios para el sector salud
                </p>
              </div>
          
              {/* <!-- Grid de categorías principales --> */}
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {/* <!-- Equipamiento Clínico --> */}
                <div class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
                  <div class="h-48 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative overflow-hidden">
                    <img src="https://i.postimg.cc/3xrxSsK4/image.png" alt="Equipamiento Clínico" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    <span class="absolute text-5xl text-white opacity-20">🩺</span>
                  </div>
                  <div class="p-5 text-center">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Equipamiento Clínico</h3>
                    <p class="text-gray-600 mb-4">Instrumentos y herramientas médicas</p>
                    <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Ver productos
                    </a>
                  </div>
                </div>
          
                {/* <!-- Indumentaria Médica --> */}
                <div class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
                  <div class="h-48 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative overflow-hidden">
                    <img src="https://i.postimg.cc/K8m2cBVd/image.png" alt="Indumentaria Médica" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    <span class="absolute text-5xl text-white opacity-20">🥼</span>
                  </div>
                  <div class="p-5 text-center">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Indumentaria Médica</h3>
                    <p class="text-gray-600 mb-4">Batas, uniformes y accesorios</p>
                    <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Ver productos
                    </a>
                  </div>
                </div>
          
                {/* <!-- Mobiliario Hospitalario --> */}
                <div class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
                  <div class="h-48 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative overflow-hidden">
                    <img src="https://i.postimg.cc/TYM9D9TH/image.png" alt="Mobiliario Hospitalario" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    <span class="absolute text-5xl text-white opacity-20">🏥</span>
                  </div>
                  <div class="p-5 text-center">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Mobiliario Hospitalario</h3>
                    <p class="text-gray-600 mb-4">Equipamiento para instituciones</p>
                    <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Ver productos
                    </a>
                  </div>
                </div>
          
                {/* <!-- Insumos Descartables --> */}
                <div class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
                  <div class="h-48 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative overflow-hidden">
                    <img src="https://i.postimg.cc/kgLBhjDx/image.png" alt="Insumos Descartables" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                    <span class="absolute text-5xl text-white opacity-20">💉</span>
                  </div>
                  <div class="p-5 text-center">
                    <h3 class="font-bold text-xl text-gray-800 mb-2">Insumos Descartables</h3>
                    <p class="text-gray-600 mb-4">Materiales de un solo uso</p>
                    <a href="#" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                      Ver productos
                    </a>
                  </div>
                </div>
              </div>
          
              {/* <!-- Botón ver más --> */}
              <div class="text-center mt-12">
                <a href="#" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all">
                  Ver todo el catálogo hospitalario
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
        </section>
  )
}

export default Hospitalario