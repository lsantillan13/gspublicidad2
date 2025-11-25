import React from 'react';

const ShirtsWindbreakersHero = () => {
  const shirts = [
    {
      id: 1,
      title: "JERSEY ALGODÓN",
      subtitle: "Corte Standard y Especiales",
      techniques: ["Serigrafía", "DTF Full Color"],
      imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
    },
    {
      id: 2,
      title: "JERSEY MODAL",
      subtitle: "Spum Sublimación Completa", 
      techniques: ["Sublimación Completa"],
      imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&h=500&fit=crop"
    }
  ];

  const windbreakers = [
    {
      id: 1,
      title: "ROMPEVIENTOS DEPORTES",
      description: "Confeccionados con telas técnicas para máximo rendimiento",
      imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop"
    },
    {
      id: 2,
      title: "SAPEM AMBIENTAL BAHÍA",
      description: "Diseños personalizados para trabajo y protección ambiental",
      imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Remeras & Rompevientos
          </h1>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Remeras Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-800 mb-4">REMERAS PERSONALIZADAS</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Calidad profesional con técnicas de impresión avanzadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {shirts.map((shirt) => (
              <div key={shirt.id} className="group text-center">
                {/* Imagen */}
                <div className="aspect-square mb-6 overflow-hidden bg-gray-50">
                  <img
                    src={shirt.imageUrl}
                    alt={shirt.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Información */}
                <h3 className="text-xl font-normal text-gray-800 mb-2">
                  {shirt.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {shirt.subtitle}
                </p>
                
                {/* Técnicas */}
                <div className="flex flex-wrap justify-center gap-2">
                  {shirt.techniques.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs text-gray-500 font-light px-3 py-1 border border-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rompevientos Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-800 mb-4">ROMPEVIENTOS PERSONALIZADOS</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Lisos o forrados, confeccionados con distintas telas y combinaciones según tu necesidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {windbreakers.map((windbreaker) => (
              <div key={windbreaker.id} className="group text-center">
                {/* Imagen */}
                <div className="aspect-square mb-6 overflow-hidden bg-gray-50">
                  <img
                    src={windbreaker.imageUrl}
                    alt={windbreaker.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Información */}
                <h3 className="text-xl font-normal text-gray-800 mb-2">
                  {windbreaker.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {windbreaker.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="max-w-2xl mx-auto mt-20">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Texto final */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 tracking-widest font-light">
            CONSULTÁ POR DISEÑOS PERSONALIZADOS
          </p>
        </div>

      </div>
    </div>
  );
};

export default ShirtsWindbreakersHero;