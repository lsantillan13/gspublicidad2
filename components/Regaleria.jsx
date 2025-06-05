import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 1,
    name: 'MARROQUINERÍA',
    image: 'https://i.postimg.cc/kXDdJZ8p/image.png',
    link: '/categoria/marroquineria'
  },
  {
    id: 2,
    name: 'HOME & DECO',
    image: 'https://i.postimg.cc/k5bGhGfq/image.png',
    link: '/categoria/home-deco'
  },
  {
    id: 3,
    name: 'TERMOS Y VASOS',
    image: 'https://i.postimg.cc/QdnSJ4nv/image.png',
    link: '/categoria/termos-vasos'
  },
  {
    id: 4,
    name: 'BOLÍGRAFOS',
    image: 'https://i.postimg.cc/Njzq2x8j/image.png',
    link: '/categoria/boligrafos'
  },
  {
    id: 5,
    name: 'TECNOLOGÍA',
    image: 'https://i.postimg.cc/N0dyHSJr/image.png',
    link: '/categoria/tecnologia'
  }
];

function Regaleria() {
  return (
    <section className="gift-section saturate-150">
      <section className="drop-shadow-3xl bg-[#0c0f1c]/40 text-center text-white py-16 px-6 mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-wider text-cyan-500">REGALOS</h2>
        <p className="text-3xl md:text-5xl font-semibold text-blue-400 mb-8 md:mb-12 underline underline-offset-4">
          CON TU LOGO
        </p>
        
        {/* Contenedor responsivo */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center max-w-6xl mx-auto mb-12">
          {CATEGORIES.map((category) => (
            <Link 
              to={category.link}
              key={category.id}
              className="group flex flex-col items-center gap-4 md:gap-7 transition-transform hover:scale-105 w-full md:w-auto"
              aria-label={`Ver productos de ${category.name}`}
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#1b1f2e] overflow-hidden flex items-center justify-center">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover rounded-full transition-opacity group-hover:opacity-90"
                  loading="lazy"
                />
              </div>
              <p className="text-md md:text-lg lg:text-md w-auto text-gray-100 font-semibold box-shadow-lg bg-black/80 px-4 py-2 text-center group-hover:bg-black/90 transition-colors">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
        
        <Link
          to="/productos"
          className="inline-block bg-white text-blue-700 font-bold py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-gray-100 active:scale-95 transition-all text-xs md:text-sm"
          aria-label="Ver todos los productos"
        >
          VER TODOS LOS PRODUCTOS
        </Link>
      </section>
    </section>
  );
}

export default React.memo(Regaleria);