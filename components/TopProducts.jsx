import React from 'react';

const destacados = [
  {
    nombre: 'Mameluco Gabardina',
    descripcion: 'Resistente y cómodo para el trabajo diario.',
    imagen: 'https://i.postimg.cc/Gm3GBXqL/bf46f740-13b9-4e95-85c2-80959a43701b.jpg',
  },
  {
    nombre: 'Pantalón Cargo Ripstop',
    descripcion: 'Durabilidad y estilo en un solo producto.',
    imagen: 'https://i.postimg.cc/jSnyTD5K/469183570-18311125285161809-7108907641079336159-n.jpg',
  },
  {
    nombre: 'Campera Trucker',
    descripcion: 'Ideal para climas fríos y trabajo al aire libre.',
    imagen: 'https://i.postimg.cc/L8Pg7GC8/364045712-254675847357090-8715174950490439912-n.jpg',
  },
];

const ProductosDestacados = () => {
  return (
    <section className="py-4 pb-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destacados.map((producto, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{producto.nombre}</h3>
              <p className="text-gray-600">{producto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosDestacados;
