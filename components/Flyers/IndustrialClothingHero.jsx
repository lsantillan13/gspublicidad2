import React, { useState, useEffect } from 'react';

const IndustrialClothingHero = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    {
      id: 1,
      name: "Mamelucos",
      description: "Protección integral profesional",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
      count: "12 modelos",
      color: "blue"
    },
    {
      id: 2,
      name: "Pantalones",
      description: "Durabilidad y confort",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
      count: "8 tipos",
      color: "green"
    },
    {
      id: 3,
      name: "Camperas",
      description: "Protección climática",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      count: "15 diseños",
      color: "orange"
    },
    {
      id: 4,
      name: "Chombas",
      description: "Seguridad certificada",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      count: "20 modelos",
      color: "red"
    }
    ,
    {
      id: 5,
      name: "Calzados",
      description: "Seguridad certificada",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      count: "20 modelos",
      color: "red"
    },
    {
      id: 5,
      name: "Buzos",
      description: "Seguridad certificada",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      count: "20 modelos",
      color: "red"
    },
    {
      id: 5,
      name: "Chalecos de seguridad",
      description: "Seguridad certificada",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      count: "20 modelos",
      color: "red"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Grid Section */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 to-transparent"></div>
        </div>

        <div className="relative container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-4 uppercase">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Indumentaria
              <span className="text-blue-600 text-6xl"> Industrial</span>
              <br />
              <span className="text-4xl md:text-5xl text-yellow-600">De alto desempeño</span>
            </h1>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-2 ${
                  activeCategory === index ? 'border-slate-300 border-1' : 'border-transparent'
                }`}
                onMouseEnter={() => setActiveCategory(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 font-semibold">{category.name}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-blue-600 text-sm font-semibold">{category.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialClothingHero;