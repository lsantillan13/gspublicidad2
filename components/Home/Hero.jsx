import React from 'react';

function NuevosIngresos() {
  const products = [
    {
      id: 1,
      title: "Mameluco gabardina 6 y 8oz",
      image: "https://i.postimg.cc/Gm3GBXqL/bf46f740-13b9-4e95-85c2-80959a43701b.jpg"
    },
    {
      id: 2,
      title: "Pantalón cargo ripstop anti desgarro",
      image: "https://i.postimg.cc/jSnyTD5K/469183570-18311125285161809-7108907641079336159-n.jpg"
    },
    {
      id: 3,
      title: "Pantalón cargo gabardina",
      image: "https://i.postimg.cc/wxrkPGjv/image.png"
    },
    {
      id: 4,
      title: "Campera trucker azul marino",
      image: "https://i.postimg.cc/XvTH3M31/469249637-18311125294161809-1471411744939780625-n.jpg"
    },
    {
      id: 5,
      title: "Campera 3 en 1 calidad premium",
      image: "https://i.postimg.cc/XqfRvGLH/70a49122-e1eb-4a13-bebc-597f893d9f35.jpg"
    },
    {
      id: 6,
      title: "Valija Carry On / Cabina",
      image: "https://i.postimg.cc/C1BN73fb/image.png"
    }
  ];

  return (
    <section className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 hero lg:block md:mt-0">
      <div className="max-w-7xl mx-auto ">
        {/* Encabezado */}
        <div className="text-center mt-4 md:mt-2 mb-4 md:mb-6">
          <h2 className="italic  p-3 hero-title text-3xl md:text-4xl font-bold text-[#ffd700]">
            ¡Nuevos <i className="text-[#ffd000] text-3xl md:text-4xl">Ingresos!</i>
          </h2>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              {/* Imagen del producto */}
              <div className="relative h-60 w-full overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Detalles del producto */}
              <div className="p-4 flex-grow flex flex-col justify-center">
                <h3 className="font-semibold text-gray-800 text-center text-sm sm:text-base leading-tight">
                  {product.title}
                </h3>
              </div>
              
              {/* Botón (opcional) */}
              <div className="px-4 pb-4">
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">
                  Ver detalle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NuevosIngresos;