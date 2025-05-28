import React from 'react'

function NosElijen() {
  return (
            // <!-- ¡Quiénes nos eligen! -->
        <section class="py-16 px-4 sm:px-6 lg:px-8 w-full mx-auto  bg-gradient-to-r from-blue-600 to-indigo-700  text-white">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    ¡QUIÉNES NOS ELIGEN!
                </h2>
                <p class="text-xl opacity-90 max-w-2xl mx-auto">
                    Empresas e instituciones que confían en nosotros
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex items-center justify-center h-auto">
                        <img src="./assets/Sponsors/vpn.png" class="rounded-full"/>
                </div>
                <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex items-center justify-center h-auto">
                        <img src="./assets/Sponsors/kumenia.jpg" class="rounded-full"/>
                </div>
                <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex items-center justify-center h-auto">
                        <img src="./assets/Sponsors/images.png" class="rounded-full"/>
                </div>
                <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex items-center justify-center h-auto">
                        <img src="./assets/Sponsors/delprado.png" class="rounded-full"/>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <button class="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                    SER CLIENTE
                </button>
            </div>
        </section>
  )
}

export default NosElijen