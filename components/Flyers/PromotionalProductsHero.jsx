import React, { useState } from 'react';

const PromotionalProductsHero = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const productCategories = [
    {
      id: 1,
      name: "Textil Personalizado",
      description: "Playeras, gorras, uniformes bordados",
      icon: "👕",
      count: "85 productos",
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      id: 2,
      name: "Tecnología",
      description: "Power banks, USB, accesorios tech",
      icon: "🔋",
      count: "42 productos",
      color: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      id: 3,
      name: "Escritorio & Oficina",
      description: "Agendas, lápices, notebooks personalizados",
      icon: "📝",
      count: "56 productos",
      color: "from-green-500 to-emerald-500",
      popular: true
    },
    {
      id: 4,
      name: "Eco-Friendly",
      description: "Productos sustentables y biodegradables",
      icon: "🌱",
      count: "28 productos",
      color: "from-lime-500 to-green-500",
      popular: true
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Auriculares con Tu Logo",
      price: "Desde $189",
      description: "Algodón premium, estampado de alta calidad",
      image: "https://i.postimg.cc/Qd2gz6pV/image-24.jpg",
      category: "textil",
      badge: "MÁS PEDIDO",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]
    },
    {
      id: 2,
      name: "Power Bank con Logo",
      price: "Desde $299",
      description: "10,000 mAh, carga rápida, grabado láser",
      image: "https://i.postimg.cc/Qd2gz6pV/image-24.jpg",
      category: "tecnología",
      badge: "NUEVO",
      colors: ["#000000", "#FFFFFF", "#FFD93D"]
    },
    {
      id: 3,
      name: "Tazas Personalizadas",
      price: "Desde $149",
      description: "Cerámica de alta calidad, impresión full color",
      image: "https://i.postimg.cc/Qd2gz6pV/image-24.jpg",
      category: "hogar",
      badge: "OFERTA",
      colors: ["#FFFFFF", "#000000", "#FF6B6B", "#4ECDC4"]
    },
    {
      id: 4,
      name: "Eco Bottles",
      price: "Desde $229",
      description: "Botellas reutilizables, materiales sustentables",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
      category: "eco",
      badge: "TRENDING",
      colors: ["#6BCF7F", "#4ECDC4", "#45B7D1"]
    }
  ];

  const printingOptions = [
    {
      technique: "Serigrafía",
      description: "Ideal para grandes cantidades",
      bestFor: "Textiles, plásticos",
      minOrder: "100+ unidades"
    },
    {
      technique: "Sublimación",
      description: "Full color, alta definición",
      bestFor: "Tazas, textiles claros",
      minOrder: "50+ unidades"
    },
    {
      technique: "Grabado Láser",
      description: "Precisión y durabilidad",
      bestFor: "Metal, madera, cuero",
      minOrder: "25+ unidades"
    },
    {
      technique: "Vinilo Textil",
      description: "Detalles específicos",
      bestFor: "Playeras, gorras",
      minOrder: "10+ unidades"
    }
  ];

  const stats = [
    { number: "48h", label: "Tiempo de producción" },
    { number: "5,000+", label: "Clientes satisfechos" },
    { number: "100+", label: "Productos diferentes" },
    { number: "10+", label: "Años de experiencia" }
  ];

  return (
    <div className=" px-16 h-auto border-t-4 border-zinc-700">
     
          {/* Featured Products */}
          <div className="rounded-3xl shadow-xl p-8 mb-16 border border-orange-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-7xl uppercase font-semibold text-slate-500 mb-4">
                Articulos Promocionales
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Los artículos promocionales más efectivos para tu campaña de marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-orange-200">
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{product.description}</p>
                  
                  {/* Color Options */}
                  <div className="flex items-center gap-2 mb-3">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    <span className="text-gray-500 text-xs">+{product.colors.length} colores</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">{product.price}</span>
                    <button className="bg-white hover:bg-orange-50 text-orange-600 border border-orange-200 hover:border-orange-300 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                      Personalizar ✓
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Printing Techniques
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 mb-16 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Técnicas de Personalización
              </h2>
              <p className="text-orange-100 text-lg max-w-2xl mx-auto">
                Ofrecemos múltiples métodos para que tu marca luzca perfecta
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {printingOptions.map((option, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{option.technique}</h3>
                  <p className="text-orange-100 text-sm mb-4">{option.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-orange-200">Ideal para:</span>
                      <span className="text-white font-medium">{option.bestFor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-200">Mínimo:</span>
                      <span className="text-white font-medium">{option.minOrder}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
  );
};

export default PromotionalProductsHero;