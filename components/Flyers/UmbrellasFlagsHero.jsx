import React from 'react';

const UmbrellasFlagsHero = () => {
  const products = [
    {
      id: 1,
      name: "Banderas Publicitarias",
      description: "Banderas de alta calidad para exterior e interior",
      image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=300&fit=crop",
      price: "Desde $15.990",
      features: ["Material resistente", "Mástil incluido", "Varios tamaños"]
    },
    {
      id: 2,
      name: "Sombrillas Publicitarias",
      description: "Protección solar con branding personalizado",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=400&h=300&fit=crop",
      price: "Desde $24.990",
      features: ["Base estable", "Tela UV protection", "360° rotación"]
    },
    {
      id: 3,
      name: "Paraguas Promocionales",
      description: "Paraguas personalizados para tu marca",
      image: "https://images.unsplash.com/photo-1532578498851-432e4bf6c4b5?w=400&h=300&fit=crop",
      price: "Desde $8.990",
      features: ["Automático", "Resistente al viento", "Logo bordado"]
    },
    {
      id: 4,
      name: "Kits Completos",
      description: "Sets promocionales para eventos",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=300&fit=crop",
      price: "Desde $45.990",
      features: ["Combo ahorro", "Incluye base", "Fácil instalación"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-8 bg-[url(https://i.postimg.cc/SNKCnm9Q/9047558.jpg)]">
      <div className="container mx-auto px-4">
        
        {/* Header Simple */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Banderas • Sombrillas • Paraguas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Productos promocionales de alta calidad para tu marca
          </p>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-[300px] border border-gray-100"
            >
              {/* Product Image */}
              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Cotizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center w-full sm:w-auto">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold text-gray-800 mb-2">Personalización</h3>
            <p className="text-gray-600 text-sm">Logo y colores de tu marca</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center w-full sm:w-auto">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-bold text-gray-800 mb-2">Envío Rápido</h3>
            <p className="text-gray-600 text-sm">Entrega en 48-72 horas</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center w-full sm:w-auto">
            <div className="text-3xl mb-3">🏭</div>
            <h3 className="font-bold text-gray-800 mb-2">Fabricación</h3>
            <p className="text-gray-600 text-sm">Calidad garantizada</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Necesitás cotizar un pedido?
          </h2>
          <p className="text-gray-600 mb-6">
            Contactanos para precios por volumen y personalización
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              📞 Llamar Ahora
            </button>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors">
              💬 WhatsApp
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UmbrellasFlagsHero;