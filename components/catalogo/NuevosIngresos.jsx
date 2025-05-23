import React from 'react'
import './Hero.css';
function NuevosIngresos() {
  return (
    <section class="hero hidden lg:block">
            <section class="">
            <div class="pt-6">
              <h2 class="hero-title text-center text-xl p-3">¡Nuevos <span>Ingresos!</span></h2>
              <div class="divider"></div>
            </div>

            <section class=" h-100 w-full">
    
            {/* <!-- Product Grid --> */}
              <div class="max-w-8xl py-8 px-20 ">
                <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">

                  {/* <!-- Product Card 1 --> */}
                  <div class="group w-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div class="relative h-60 overflow-hidden">
                      <img 
                        src="https://i.postimg.cc/Gm3GBXqL/bf46f740-13b9-4e95-85c2-80959a43701b.jpg" 
                        alt="Mameluco gabardina 6 y 8oz" 
                        class="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="400"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="px-4 py-6">
                      <h3 class="font-bold text-gray-800 text-center text-sm sm:text-base">Mameluco gabardina 6 y 8oz</h3>
                    </div>
                  </div>

                  {/* <!-- Product Card 2 --> */}
                  <div class="group w-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div class="relative h-60 overflow-hidden">
                      <img 
                        src="https://i.postimg.cc/jSnyTD5K/469183570-18311125285161809-7108907641079336159-n.jpg" 
                        alt="Pantalón cargo ripstop anti desgarro" 
                        class="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="400"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="px-4 py-6">
                      <h3 class="font-bold text-gray-800 text-center text-sm sm:text-base">Pantalón cargo ripstop anti desgarro</h3>
                    </div>
                  </div>

                  {/* <!-- Product Card 3 --> */}
                  <div class="group w-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div class="relative h-60 overflow-hidden">
                      <img 
                        src="https://i.postimg.cc/wxrkPGjv/image.png" 
                        alt="Pantalón cargo gabardina" 
                        class="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="400"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="px-4 py-6">
                      <h3 class="font-bold text-gray-800 text-center text-sm sm:text-base">Pantalón cargo gabardina</h3>
                    </div>
                  </div>

                  {/* <!-- Product Card 4 --> */}
                  <div class="group w-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div class="relative h-60 overflow-hidden">
                      <img 
                        src="https://i.postimg.cc/XvTH3M31/469249637-18311125294161809-1471411744939780625-n.jpg" 
                        alt="Campera trucker azul marino" 
                        class="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="400"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="px-4 py-6">
                      <h3 class="font-bold text-gray-800 text-center text-sm sm:text-base">Campera trucker azul marino</h3>
                    </div>
                  </div>

                  {/* <!-- Product Card 5 --> */}
                  <div class="group w-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div class="relative h-60 overflow-hidden">
                      <img 
                        src="https://i.postimg.cc/XqfRvGLH/70a49122-e1eb-4a13-bebc-597f893d9f35.jpg" 
                        alt="Campera 3 en 1 calidad premium" 
                        class="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="400"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="px-4 py-6">
                      <h3 class="font-bold text-gray-800 text-center text-sm sm:text-base">Campera 3 en 1 calidad premium</h3>
                    </div>
                  </div>

                  {/* <!-- Product Card 6 --> */}
                  <div class="group w-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div class="relative h-60 overflow-hidden">
                      <img 
                        src="https://i.postimg.cc/C1BN73fb/image.png" 
                        alt="Valija Carry On / Cabina" 
                        class="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="400"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="px-4 py-6">
                      <h3 class="font-bold text-gray-800 text-center text-sm sm:text-base">Valija Carry On / Cabina</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </section>
        </section>
  )
}

export default NuevosIngresos