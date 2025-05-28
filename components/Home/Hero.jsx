import React from 'react';
import './Hero.css';
import ProductosDestacados from '../TopProducts';

const productos = [
  {
    nombre: 'Mameluco gabardina 6 y 8oz',
    imagen: 'https://i.postimg.cc/Gm3GBXqL/bf46f740-13b9-4e95-85c2-80959a43701b.jpg',
  },
  {
    nombre: 'Pantalón cargo ripstop anti desgarro',
    imagen: 'https://i.postimg.cc/jSnyTD5K/469183570-18311125285161809-7108907641079336159-n.jpg',
  },
  {
    nombre: 'Pantalón cargo gabardina',
    imagen: 'https://i.postimg.cc/wxrkPGjv/image.png',
  },
  {
    nombre: 'Campera trucker azul marino',
    imagen: 'https://i.postimg.cc/XvTH3M31/469249637-18311125294161809-1471411744939780625-n.jpg',
  },
  {
    nombre: 'Campera 3 en 1 calidad premium',
    imagen: 'https://i.postimg.cc/XqfRvGLH/70a49122-e1eb-4a13-bebc-597f893d9f35.jpg',
  },
  {
    nombre: 'Valija Carry On / Cabina',
    imagen: 'https://i.postimg.cc/C1BN73fb/image.png',
  },
];

const NuevosIngresos = () => {
  return (

    <section id="background">
      <section className="w-full py-8 relative mx-auto p-24 bg-black/20 " id="">
      
        <div className="pt-6 mt-24 relative py-8">
                <h2 className="hero-title text-center text-white text-2xl p-3">¡Nuevos <span className="hero-subtitle text-4xl">Ingresos!</span></h2>
                <div className="divider"></div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative ">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="group w-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="absolute inset-0 w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="px-4 py-6">
                <h3 className="font-bold text-gray-800 text-center text-sm sm:text-base">
                  {producto.nombre}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductosDestacados />
    </section>
  );
};

export default NuevosIngresos;
