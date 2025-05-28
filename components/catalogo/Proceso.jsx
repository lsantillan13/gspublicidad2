import React from 'react'

function Proceso() {
  return (
            <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-16">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    CÓMO TRABAJAMOS
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Un proceso simple para resultados extraordinarios
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div class="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-blue-600 text-2xl font-bold">1</span>
                    </div>
                    <h3 class="font-semibold text-lg mb-2">Consulta</h3>
                    <p class="text-gray-600 text-sm">Analizamos tus necesidades</p>
                </div>
                
                <div class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-blue-600 text-2xl font-bold">2</span>
                    </div>
                    <h3 class="font-semibold text-lg mb-2">Diseño</h3>
                    <p class="text-gray-600 text-sm">Creamos propuestas personalizadas</p>
                </div>
                
                <div class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-blue-600 text-2xl font-bold">3</span>
                    </div>
                    <h3 class="font-semibold text-lg mb-2">Entrega</h3>
                    <p class="text-gray-600 text-sm">Recibís tu producto terminado</p>
                </div>
            </div>
        </section>
  )
}

export default Proceso