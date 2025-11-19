import React from 'react';

const CapsHatsHero = () => {
  const products = [
    {
      id: 1,
      name: "Gorras Personalizadas",
      description: "Gorras de calidad con tu logo bordado",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop",
      price: "Desde $12.990",
      features: ["Ajuste regulable", "Bordado premium", "Multiple colores"]
    },
    {
      id: 2,
      name: "Pilusos Deportivos",
      description: "Ideales para equipos y eventos",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=400&h=300&fit=crop",
      price: "Desde $8.990",
      features: ["Tela transpirable", "Secado rápido", "Unisex"]
    },
    {
      id: 3,
      name: "Sombreros de Paja",
      description: "Protección solar elegante",
      image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&h=300&fit=crop",
      price: "Desde $18.990",
      features: ["Material natural", "Protección UV", "Tallas S/M/L"]
    },
    {
      id: 4,
      name: "Gorras Trucker",
      description: "Estilo clásico con malla trasera",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop",
      price: "Desde $15.990",
      features: ["Malla transpirable", "Frente rígido", "Ajuste perfecto"]
    }
  ];

  const customizationOptions = [
    {
      icon: "🧵",
      title: "Bordado",
      description: "Logo de alta definición"
    },
    {
      icon: "🎨",
      title: "Estampado",
      description: "Full color y detalles"
    },
    {
      icon: "📏",
      title: "Talles",
      description: "Ajuste perfecto para todos"
    }
  ];

  return (
    <div className="min-h-screen bg-[url(https://i.postimg.cc/76CjHFV4/3d-vintage-style-image-sand-ocean-landscape.jpg)]  bg-no-repeat bg-cover from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        
        {/* Header Simple */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gorras • Pilusos • Sombreros
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Personalizá tu estilo con nuestros modelos premium
          </p>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-[280px] border border-gray-200"
            >
              {/* Product Image */}
              <div className="h-40 overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-1 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-md font-bold text-green-600">
                    {product.price}
                  </span>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Options */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {customizationOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center w-full sm:w-auto">
              <div className="text-2xl mb-2">{option.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-1">{option.title}</h3>
              <p className="text-gray-600 text-xs">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Bulk Order Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            ¿Pedido por volumen?
          </h2>
          <p className="text-gray-600 mb-4">
            Descuentos especiales para empresas y equipos
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              📧 Pedir Cotización
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-6 rounded-lg transition-colors">
              📞 Consultar Stock
            </button>
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap justify-center gap-6 text-center">
          <div className="text-sm text-gray-600">
            <div className="font-semibold">🚚 Envíos</div>
            <div>a todo el país</div>
          </div>
          <div className="text-sm text-gray-600">
            <div className="font-semibold">⚡ Producción</div>
            <div>5-7 días hábiles</div>
          </div>
          <div className="text-sm text-gray-600">
            <div className="font-semibold">🎯 Mínimo</div>
            <div>10 unidades</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CapsHatsHero;