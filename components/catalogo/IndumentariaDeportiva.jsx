import React from 'react'

function IndumentariaDeportiva() {
  return (
            <section className="w-full bg-cyan-900/80 animate-fade-in-up py-16">
            <div className="max-w-6xl mx-auto ">
                <h2 className="text-5xl font-extrabold text-gray-50 bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 text-center mb-3">Que tu equipo sea el N° 1</h2>
                <p className="text-gray-300 text-xl mb-8 text-center italic">Hacemos tu camiseta, tu conjunto deportivo, tu gorra, tu bolso, tu caramañola.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
                        <img src="https://i.postimg.cc/qgf0Rt4Z/image.png" alt="Sports Jersey" className="w-full h-[400px] object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/70 transition-all duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white text-3xl font-bold mb-6">Dri fit</h3>
                                <button className="bg-gradient-to-r from-neutral-700 to-slate-800 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg">Ver Más</button>
                            </div>
                        </div>
                    </div>
    
                    <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
                        <img src="https://i.postimg.cc/NjmqNfBQ/image.png" alt="Sports Shoes" className="w-full h-[400px] object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/70 transition-all duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white text-3xl font-bold mb-6">Conjuntos Deportivos</h3>
                                <button className="bg-gradient-to-r from-neutral-700 to-slate-800 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg">Ver Más</button>
                            </div>
                        </div>
                    </div>
    
                    <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
                        <img src="https://i.postimg.cc/tRznLnGY/image.png" alt="Sports Accessories" className="w-full h-[400px] object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/70 transition-all duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white text-3xl font-bold mb-6">Las mejores telas</h3>
                                <button className="bg-gradient-to-r from-neutral-700 to-slate-800 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg">Ver Más</button>
                            </div>
                        </div>
                    </div>
                </div>
    
                <p className="text-gray-300 text-xl max-w-3xl mx-auto text-center font-light leading-relaxed">Más de 30 años de trayectoria, fabricando la indumentaria para el entrenamiento deportivo.</p>
            </div>
        </section>
  )
}

export default IndumentariaDeportiva