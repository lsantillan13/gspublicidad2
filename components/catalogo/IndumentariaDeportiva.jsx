import React from 'react';
import { Link } from 'react-router-dom';

const SPORTS_ITEMS = [
  {
    id: 1,
    title: "Dri fit",
    image: "https://i.postimg.cc/qgf0Rt4Z/image.png",
    alt: "Sports Jersey",
    link: "/productos/dri-fit"
  },
  {
    id: 2,
    title: "Conjuntos Deportivos",
    image: "https://i.postimg.cc/NjmqNfBQ/image.png",
    alt: "Sports Outfits",
    link: "/productos/conjuntos-deportivos"
  },
  {
    id: 3,
    title: "Las mejores telas",
    image: "https://i.postimg.cc/tRznLnGY/image.png",
    alt: "Sports Accessories",
    link: "/productos/mejores-telas"
  }
];

function IndumentariaDeportiva() {
  return (
    <section className="w-full bg-cyan-900/80 animate-fade-in-up py-8">
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-2xl md:text-5xl font-extrabold text-gray-50 bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 text-center mb-3">
          Que tu equipo sea el N° 1
        </h2>
        <p className="text-gray-200 md:text-gray-300 text-md md:text-xl mb-8 text-center italic">
          Hacemos tu camiseta, tu conjunto deportivo, tu gorra, tu bolso, tu caramañola.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SPORTS_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-[400px] object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/70 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                    {item.title}
                  </h3>
                  <Link
                    to={item.link}
                    className="inline-block bg-gradient-to-r from-neutral-700 to-slate-800 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg"
                    aria-label={`Ver más sobre ${item.title}`}
                  >
                    Ver Más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-100 md:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto text-center font-light leading-relaxed">
          Más de 30 años de trayectoria, fabricando la indumentaria para el entrenamiento deportivo.
        </p>
      </div>
    </section>
  );
}

export default React.memo(IndumentariaDeportiva);