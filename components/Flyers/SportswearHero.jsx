import React, { useState, useEffect } from 'react';

const SportswearHero = () => {
  const [activeCollection, setActiveCollection] = useState(0);

  const collections = [
    {
      name: "RUNNING",
      description: "Tecnología avanzada para máximo rendimiento",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=700&fit=crop",
      color: "cyan"
    },
    {
      name: "TRAINING",
      description: "Diseño inteligente para entrenamientos intensos",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop",
      color: "orange"
    },
    {
      name: "YOGA",
      description: "Comfort supremo y movilidad perfecta",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=700&fit=crop",
      color: "purple"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCollection((prev) => (prev + 1) % collections.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = collections[activeCollection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500 via-orange-500 to-purple-500 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">PERFORMANCE WEAR</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            ELEVÁ TU
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text">
              JUEGO
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-md mx-auto">
            Tecnología deportiva que se adapta a tu movimiento
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Product Showcase */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Collection Info */}
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold mb-2">{current.name}</h2>
                <p className="text-gray-200">{current.description}</p>
              </div>
            </div>

            {/* Collection Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {collections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCollection(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeCollection 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Features & CTA */}
          <div className="space-y-8">
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-bold">Tecnología Dry-Fit</h3>
                  <p className="text-gray-400 text-sm">Secado rápido y máximo confort</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl">🛡️</div>
                <div>
                  <h3 className="font-bold">UV Protection 50+</h3>
                  <p className="text-gray-400 text-sm">Protección solar avanzada</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl">💨</div>
                <div>
                  <h3 className="font-bold">Ventilación 360°</h3>
                  <p className="text-gray-400 text-sm">Transpirabilidad total</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                VER COLECCIÓN {current.name}
              </button>
              
              <button className="w-full border-2 border-white/30 hover:border-cyan-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-white/5">
                DESCUBRIR MÁS
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">98%</div>
                <div className="text-gray-400 text-xs">Comfort</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">2.5x</div>
                <div className="text-gray-400 text-xs">Durabilidad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-gray-400 text-xs">Deportes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brands */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-6">ELEGIDO POR ATLETAS DE:</p>
          <div className="flex justify-center gap-8 text-gray-300 text-sm">
            <span>NIKE</span>
            <span>ADIDAS</span>
            <span>UNDER ARMOUR</span>
            <span>PUMA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportswearHero;