import React from 'react';

const BagsVestsHero = () => {
  const products = {
    oilBags: [
      {
        id: 1,
        title: "BOLSOS PETROLEROS",
        description: "Confeccionamos el bolso que necesitas, con medidas y compartimientos para tus necesidades",
        features: ["Lona cobertura impermeable", "Cierres y correas de alta duración", "Compartimientos personalizados"],
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
      }
    ],
    backpacks: [
      {
        id: 1,
        title: "MOCHILAS Y MATERAS",
        description: "Adecuadas al producto final que necesitas. Todo en marroquinería",
        features: ["Diseños personalizados", "Materiales duraderos", "Variedad de tamaños"],
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
      }
    ],
    documentHolders: [
      {
        id: 1,
        title: "PORTADOCUMENTOS",
        description: "Para concesionarias, inmobiliarias. Producto promocional para entregar papeles bien resguardados",
        features: ["Logo visible", "Protección de documentos", "Imagen profesional"],
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
      }
    ],
    vests: [
      {
        id: 1,
        title: "CHALECOS PERSONALIZADOS",
        description: "Realizamos todo tipo de chalecos según tu necesidad",
        features: ["Telas: impermeables, gabardina, alta montaña", "Poliamida básicos reflectivos", "Sublimación full color o bordados"],
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Bolsos • Mochilas • Chalecos
          </h1>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-8"></div>
          <p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto">
            Productos personalizados de alta durabilidad para trabajo y promoción
          </p>
        </div>

        {/* Bolsos Petroleros */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="aspect-square overflow-hidden bg-gray-50">
              <img
                src={products.oilBags[0].imageUrl}
                alt={products.oilBags[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-800">{products.oilBags[0].title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {products.oilBags[0].description}
              </p>
              <div className="space-y-3">
                {products.oilBags[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mochilas y Materas */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:order-2 aspect-square overflow-hidden bg-gray-50">
              <img
                src={products.backpacks[0].imageUrl}
                alt={products.backpacks[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-1 space-y-6">
              <h2 className="text-3xl font-light text-gray-800">{products.backpacks[0].title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {products.backpacks[0].description}
              </p>
              <div className="space-y-3">
                {products.backpacks[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portadocumentos */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="aspect-square overflow-hidden bg-gray-50">
              <img
                src={products.documentHolders[0].imageUrl}
                alt={products.documentHolders[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-800">{products.documentHolders[0].title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {products.documentHolders[0].description}
              </p>
              <div className="space-y-3">
                {products.documentHolders[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chalecos */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:order-2 aspect-square overflow-hidden bg-gray-50">
              <img
                src={products.vests[0].imageUrl}
                alt={products.vests[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-1 space-y-6">
              <h2 className="text-3xl font-light text-gray-800">{products.vests[0].title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {products.vests[0].description}
              </p>
              <div className="space-y-3">
                {products.vests[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
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

export default BagsVestsHero;