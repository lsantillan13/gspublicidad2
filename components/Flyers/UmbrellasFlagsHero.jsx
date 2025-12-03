import React from 'react';

const UmbrellasFlagsHero = () => {
  const products = [
    {
      id: 1,
      title: "BANDERAS",
      imageUrl: "https://i.postimg.cc/yxbqCwcG/image.png"
    },
    {
      id: 2,
      title: "SOMBRILLAS", 
      imageUrl: "https://i.postimg.cc/zXyZFGYH/U314-Roja-Abierta.jpg"
    },
    {
      id: 3,
      title: "PARAGUAS",
      imageUrl: "https://i.postimg.cc/c4Pq9Gsd/image.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Mejorado */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight uppercase">
            Banderas - Sombrillas - Paraguas
          </h2>
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-0.5 bg-gray-300 mx-auto mt-6 sm:mt-8 lg:mt-10"></div>
        </div>

        {/* Products Grid Mejorado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group cursor-pointer relative"
            >
              {/* Número sutil responsivo */}
              <div className="absolute -top-4 sm:-top-6 lg:-top-8 -left-2 sm:-left-3 lg:-left-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-100 -z-10 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Imagen con marco sutil responsivo */}
              <div className="aspect-square mb-4 sm:mb-6 lg:mb-8 overflow-hidden bg-gray-50 border border-gray-100 rounded-none sm:rounded-sm">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Overlay sutil al hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
              
              {/* Título con subrayado animado responsivo */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-800 tracking-wider relative inline-block">
                  {product.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-500 ease-out"></span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Línea divisoria mejorada responsiva */}
        <div className="max-w-2xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4">
            <div className="w-8 sm:w-10 lg:w-12 h-px bg-gray-300"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-8 sm:w-10 lg:w-12 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmbrellasFlagsHero;