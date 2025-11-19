import React, { useState } from 'react';

const CorporateGiftsHero = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 1,
      name: "Ejecutivos",
      description: "Regalos de alta gama para directivos",
      icon: "💼",
      count: "45 productos",
      color: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      name: "Empleados",
      description: "Detalles para todo el equipo",
      icon: "👥",
      count: "32 productos",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      name: "Clientes",
      description: "Regalos para fidelización",
      icon: "🤝",
      count: "28 productos",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      name: "Eventos",
      description: "Kits corporativos especiales",
      icon: "🎉",
      count: "15 productos",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const featuredGifts = [
    {
      id: 1,
      name: "Set Ejecutivo Premium",
      price: "$89.900",
      description: "Incluye agenda de cuero, bolígrafo grabado y porta documentos",
      image: "https://images.unsplash.com/photo-1587339276567-2da3e574d5cd?w=300&h=300&fit=crop",
      category: "ejecutivos",
      badge: "POPULAR"
    },
    {
      id: 2,
      name: "Kit Bienvenida",
      price: "$45.900",
      description: "Taza personalizada, notebook y productos de escritorio",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop",
      category: "empleados",
      badge: "NUEVO"
    },
    {
      id: 3,
      name: "Caja Gourmet Empresarial",
      price: "$67.900",
      description: "Selección de productos premium con branding corporativo",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      category: "clientes",
      badge: "OFERTA"
    },
    {
      id: 4,
      name: "Set Tecnología",
      price: "$124.900",
      description: "Power bank, auriculares y accesorios con logo",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=300&fit=crop",
      category: "ejecutivos",
      badge: "PREMIUM"
    }
  ];

  const services = [
    {
      icon: "🎨",
      title: "Personalización",
      description: "Grabado, bordado y branding corporativo"
    },
    {
      icon: "📦",
      title: "Embalaje Premium",
      description: "Presentación exclusiva para regalos"
    },
    {
      icon: "🚚",
      title: "Entrega Nacional",
      description: "Enviamos a todo el país sin costo"
    },
    {
      icon: "⚡",
      title: "Entrega Express",
      description: "Preparación en 24-48 horas"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Regalos Empresariales
            </h1>
          </div>


          {/* Featured Gifts */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-gray-100">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredGifts.map((gift) => (
                <div key={gift.id} className="group bg-gray-50 rounded-2xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img 
                      src={gift.image} 
                      alt={gift.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {gift.badge}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-2">{gift.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{gift.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">{gift.price}</span>
                    <button className="bg-white hover:bg-purple-50 text-purple-600 border border-purple-200 hover:border-purple-300 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                      + Info
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateGiftsHero;