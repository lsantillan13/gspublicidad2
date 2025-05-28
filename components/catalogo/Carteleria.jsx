import React from 'react'

function Carteleria() {
  return (
    <section class="relative py-6 bg-gradient-to-b from-gray-300 via-neutral-400 to-[#fff] overflow-hidden">
    {/* <!-- Elementos decorativos de fondo --> */}
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-yellow-100 opacity-20 blur-3xl"></div>
      <div class="absolute bottom-32 right-1/4 w-80 h-80 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-05"></div>
    </div>
  
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* <!-- Encabezado con estilo moderno --> */}
      <div class="text-center mb-4">
        <div class="inline-flex items-center mb-6 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-200">
          <span class="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
          <span class="text-sm font-medium text-gray-600">SOLUCIONES GRÁFICAS</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span class="relative inline-block">
            <span class="relative z-10">CARTELERÍA</span>
            <span class="absolute bottom-2 left-0 w-full h-3 bg-yellow-200 opacity-40 z-0"></span>
          </span>
          <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">PROFESIONAL</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 mx-auto my-2"></div>
        <p class="text-xl text-gray-900 font-semibold max-w-2xl mx-auto">
          Señalización de alta calidad para interior y exterior
        </p>
      </div>
  
      {/* <!-- Grid de categorías --> */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* <!-- Cartelería Interior --> */}
        <div class="group relative overflow-hidden rounded-3xl shadow-4xl hover:shadow-xl transition-all duration-500">
          <div class="h-80 bg-gradient-to-br from-gray-100 to-white flex items-center justify-center relative overflow-hidden">
            <img src="https://i.postimg.cc/9QSSs9d3/ebe0f8b2-7d00-475c-a206-f3906481ba22.jpg" alt="Cartelería Interior" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500 box-shadow-lg bg-gradient-to-b from-transparent to-black">
            <h3 class="text-2xl font-bold mb-2">Cartelería Interior</h3>
            <p class="text-stone-100 mb-4">Elegante y profesional para espacios cerrados</p>
            <a href="#" class="inline-flex items-center font-medium text-white group">
              Ver opciones
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
  
        {/* <!-- Cartelería Exterior --> */}
        <div class="group relative overflow-hidden rounded-3xl shadow-4xl hover:shadow-xl transition-all duration-500">
          <div class="h-80 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative overflow-hidden">
            <img src="https://i.postimg.cc/G2zjn0WB/1a3d7dbc-9e0c-4318-b96e-be3a4fc95445.jpg" alt="Cartelería Exterior" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500 box-shadow-lg bg-gradient-to-b from-transparent to-black">
            <h3 class="text-2xl font-bold mb-2">Cartelería Exterior</h3>
            <p class="text-stone-100 mb-4">Resistente a las condiciones climáticas</p>
            <a href="#" class="inline-flex items-center font-medium text-white group">
              Ver catálogo
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
  
        {/* <!-- Señalización Fotoluminiscente --> */}
        <div class="group relative overflow-hidden rounded-3xl shadow-4xl hover:shadow-xl transition-all duration-500">
          <div class="h-80 bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center relative overflow-hidden">
            <img src="https://i.postimg.cc/9X732Jxx/image.png" alt="Señalización Fotoluminiscente" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            </div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500 box-shadow-lg bg-gradient-to-b from-transparent to-black">
            <h3 class="text-2xl font-bold mb-2">Fotoluminiscente</h3>
            <p class="text-stone-100 mb-4">Para emergencias y seguridad</p>
            <a href="#" class="inline-flex items-center font-medium text-white group">
              Ver productos
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
  
      {/* <!-- Llamado a la acción --> */}
      <div class="mt-16 text-center">
        <div class="inline-flex flex-col sm:flex-row items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
          <div class="px-6 py-3 bg-gray-50">
            <span class="text-gray-600 font-medium">¿Necesitas asesoramiento?</span>
          </div>
          <a href="#" class="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold hover:from-blue-700 hover:to-blue-900 transition-all">
            Contactar a un especialista
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Carteleria