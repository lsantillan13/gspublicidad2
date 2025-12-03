import React from 'react';

const SportswearHero = () => {
  const products = [
    {
      id: 1,
      title: "CAMISETAS DEPORTIVAS",
      imageUrl: "https://i.postimg.cc/xTCdxBzB/camiseta-en-tela-set-deportiva-sublimada-full-color.jpg",
      brands: ["FITNESS", "DEL PRADO", "INDEPENDIENTE"]
    },
    {
      id: 2,
      title: "CONJUNTOS DEPORTIVOS", 
      imageUrl: "https://i.postimg.cc/Pr4mYGjk/Camiseta-en-set-deportivo-y-pantalon-deportivo-en-laycra-termica.jpg",
      brands: ["DEPORTES", "PACÍFICO", "FITNESS"]
    },
    {
      id: 3,
      title: "CAMPERAS Y ROMPEVIENTOS",
      imageUrl: "https://i.postimg.cc/Xv04bPrj/DSC-2414.jpg",
      brands: ["DEPORTES", "DEL PRADO", "ABRIL PAZOS"]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Header Minimalista */}
        <div className="text-center mb-20 uppercase">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            Que tu ropa deportiva
            <span className="block text-gray-500 text-4xl md:text-5xl mt-4">Sea <i className="underline underline-offset-4 not-italic text-gray-500 text-4xl md:text-5xl mt-4">única</i></span>
          </h1>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group cursor-pointer text-center"
            >
              {/* Imagen cuadrada */}
              <div className="aspect-square mb-6 overflow-hidden bg-gray-50">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-normal text-gray-800 mb-4 tracking-wide">
                {product.title}
              </h3>
              
              {/* Marcas */}
              <div className="flex flex-wrap justify-center gap-2">
                {product.brands.map((brand, brandIndex) => (
                  <span 
                    key={brandIndex}
                    className="text-xs text-gray-500 font-light px-2 py-1 border border-gray-200 rounded-full"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
            VER IMÁGENES EN INSTAGRAM
          </p>
        </div>

      </div>
    </div>
  );
};

export default SportswearHero;