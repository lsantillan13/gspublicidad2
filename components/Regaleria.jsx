import React from 'react';

const categorias = [
  {
    nombre: 'MARROQUINERÍA',
    imagen: 'https://i.postimg.cc/kXDdJZ8p/image.png',
  },
  {
    nombre: 'HOME & DECO',
    imagen: 'https://i.postimg.cc/k5bGhGfq/image.png',
  },
  {
    nombre: 'TERMOS Y VASOS',
    imagen: 'https://i.postimg.cc/QdnSJ4nv/image.png',
  },
  {
    nombre: 'BOLÍGRAFOS EMPRESARIALES',
    imagen: 'https://i.postimg.cc/Njzq2x8j/image.png',
  },
  {
    nombre: 'TECNOLOGÍA',
    imagen: 'https://i.postimg.cc/N0dyHSJr/image.png',
  },
];

const Regaleria = () => {
  return (
    <section className="gift-section saturate-150">
        <section className=" drop-shadow-3xl  bg-[#0c0f1c]/40 text-center text-white py-12">
        <h2 className="text-6xl font-bold tracking-wider text-cyan-500">REGALOS</h2>
        <p className="text-5xl font-semibold text-blue-400 mb-12 underline underline-offset-4">CON TU LOGO</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center max-w-6xl mx-auto mb-12">
            {categorias.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
                <div className="w-36 h-36 rounded-full bg-[#1b1f2e] overflow-hidden flex items-center justify-center">
                <img src={item.imagen} alt={item.nombre} className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="text-sm w-max text-gray-100 font-semibold box-shadow-lg bg-black/80 px-2 py-1 text-center">
                {item.nombre}
                </p>
            </div>
            ))}
        </div>
        <a
            href="#productos"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition text-sm"
        >
            VER TODOS LOS PRODUCTOS
        </a>
        </section>
    </section>
  );
};

export default Regaleria;
