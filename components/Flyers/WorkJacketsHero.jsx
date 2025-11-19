import React, { useState, useRef } from 'react';

const WorkJacketsHero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const videoRef = useRef(null);

  const features = [
    {
      icon: "🏭",
      title: "Fabricación Nacional",
      description: "Calidad controlada en cada etapa"
    },
    {
      icon: "🌎",
      title: "Importación Directa",
      description: "Sin intermediarios, mejores precios"
    },
    {
      icon: "🛡️",
      title: "Certificación ISO",
      description: "Estándares internacionales de calidad"
    },
    {
      icon: "🚚",
      title: "Stock Permanente",
      description: "Entrega inmediata"
    }
  ];

  const brands = [
    { name: "CAT", logo: "🔶" },
    { name: "DEWALT", logo: "🟡" },
    { name: "STANLEY", logo: "🟢" },
    { name: "3M", logo: "🔴" },
    { name: "HULK", logo: "💚" }
  ];

  const jacketTypes = [
    {
      name: "Campera Antifrío",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      features: ["Forro polar", "Impermeable", "Capucha ajustable"]
    },
    {
      name: "Chaleco Seguridad",
      image: "https://images.unsplash.com/photo-1583483425010-c566431a7710?w=400&h=500&fit=crop",
      features: ["Alta visibilidad", "Multiple bolsillos", "Material reflectivo"]
    },
    {
      name: "Campera Térmica",
      image: "https://images.unsplash.com/photo-1591047139820-6b6d79adc772?w=400&h=500&fit=crop",
      features: ["Aislamiento térmico", "Resistente al viento", "Corte ergonómico"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-transparent via-white to-transparent" 
             style={{backgroundSize: '50px 50px'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider">FABRICACIÓN E IMPORTACIÓN DIRECTA</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            CAMPERAS DE
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text">
              TRABAJO
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Protección profesional con la mejor relación calidad-precio del mercado
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Column - Video & Features */}
          <div className="space-y-8">
            {/* Video Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black relative">
                {/* Video Placeholder - You can replace with actual video */}
                <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className="text-lg font-semibold">VIDEO DE IMPORTACIÓN DIRECTA</p>
                    <p className="text-gray-300 text-sm mt-2">Proceso de calidad y fabricación</p>
                  </div>
                </div>
                
                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">▶</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-orange-500/20 border-orange-500 transform scale-105'
                      : 'bg-white/5 border-white/10 hover:border-orange-400/50'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="font-bold text-sm mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Products & Brands */}
          <div className="space-y-8">
            {/* Brands */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-center mb-6">MARCAS RECONOCIDAS</h2>
              <div className="grid grid-cols-3 gap-4">
                {brands.map((brand, index) => (
                  <div key={index} className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-2xl mb-2">{brand.logo}</div>
                    <div className="font-semibold text-sm">{brand.name}</div>
                  </div>
                ))}
                <div className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="text-2xl mb-2">➕</div>
                  <div className="font-semibold text-sm">Y MÁS</div>
                </div>
              </div>
            </div>

            {/* Product Types */}
            <div className="space-y-4">
              {jacketTypes.map((jacket, index) => (
                <div key={index} className="flex gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-orange-400/30 transition-all duration-300">
                  <img
                    src={jacket.image}
                    alt={jacket.name}
                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-2">{jacket.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {jacket.features.map((feature, i) => (
                        <span key={i} className="bg-orange-500/20 text-orange-300 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-black py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              📞 COTIZAR AHORA
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-white mb-2">Precio Directo de Fábrica</h3>
            <p className="text-gray-300 text-sm">Hasta 40% más económico que la competencia</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-white mb-2">Entrega Inmediata</h3>
            <p className="text-gray-300 text-sm">Stock permanente para entrega en 24/48hs</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="font-bold text-white mb-2">Pedidos Corporativos</h3>
            <p className="text-gray-300 text-sm">Descuentos especiales para empresas</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            ¿NECESITÁS EQUIPAR A TU EQUIPO?
          </h2>
          <p className="text-gray-300 mb-6">
            Más de 500 empresas ya confían en nuestra calidad y servicio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300">
              SOLICITAR CATÁLOGO
            </button>
            <button className="border-2 border-white/30 hover:border-orange-400 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-white/5">
              📱 CHAT EN VIVO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkJacketsHero;