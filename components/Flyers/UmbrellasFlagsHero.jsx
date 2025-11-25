import React from 'react';


const UmbrellasFlagsHero = () => {
  const products = [
    {
      id: 1,
      title: "BANDERAS",
      imageUrl: "http://gspublicidad.com.ar/wp-content/uploads/2018/06/banderas.jpg"
    },
    {
      id: 2,
      title: "SOMBRILLAS", 
      imageUrl: "http://gspublicidad.com.ar/wp-content/uploads/2019/06/U314_Roja_Abierta.jpg"
    },
    {
      id: 3,
      title: "PARAGUAS",
      imageUrl: "http://gspublicidad.com.ar/wp-content/uploads/2018/05/U316_negro.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Header Mejorado */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight leading-tight uppercase m-4">
            Banderas - Sombrillas - Paraguas
          </h2>
          <div className="w-32 h-0.5 bg-gray-300 mx-auto mt-10"></div>
        </div>

        {/* Products Grid Mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group cursor-pointer relative"
            >
              {/* Número sutil */}
              <div className="absolute -top-8 -left-4 text-8xl font-light text-gray-100 -z-10 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Imagen con marco sutil */}
              <div className="aspect-square mb-8 overflow-hidden bg-gray-50 border border-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay sutil al hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
              
              {/* Título con subrayado animado */}
              <div className="text-center">
                <h3 className="text-2xl font-normal text-gray-800 tracking-wider relative inline-block">
                  {product.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-500 ease-out"></span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Línea divisoria mejorada */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmbrellasFlagsHero;