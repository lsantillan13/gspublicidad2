import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const [products, setProducts] = useState([]);
  const marqueeRef = useRef(null);

  useEffect(() => {
    fetch('https://gserver.zeabur.app/api/products?featuredIn=novedades')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseEnter = () => marquee.style.animationPlayState = 'paused';
    const handleMouseLeave = () => marquee.style.animationPlayState = 'running';
    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const carouselItems = [products[0], products[1], products[2], products[3], products[4], products[5], products[6], products[7], products[8], products[9], products[10]].map((product, index) => {
    if (!product) return null;
    return {
      src: product.imageUrl,
      alt: product.name,
      caption: product.name,
      category: product.category,
      id: product._id
    };
  });

  return (
    <section className="w-full bg-gradient-to-r from-zinc-900 via-stone-900 to-zinc-900 relative py-16 sm:py-20 lg:py-24 xl:py-32 flex flex-col justify-center items-center overflow-hidden">
      {/* Fondo geométrico sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#232b3e] via-[#181e29] to-[#232b3e] opacity-100" />
        {/* Líneas diagonales sutiles */}
        <svg className="absolute inset-0 w-full h-full hidden sm:block" width="100%" height="100%" viewBox="0 0 1440 900" fill="none">
          <defs>
            <linearGradient id="lineGrad2" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#bfa046" />
              <stop offset="1" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1={0}
              y1={120 + i * 120}
              x2={1440}
              y2={80 + i * 120}
              stroke="url(#lineGrad2)"
              strokeWidth="1"
              opacity="0.07"
            />
          ))}
        </svg>
        {/* Círculos decorativos responsivos */}
        <div className="absolute -top-12 sm:-top-24 -left-16 sm:-left-32 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#bfa046]/20 to-transparent blur-xl sm:blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-tr from-[#0ea5e9]/10 to-transparent blur-xl sm:blur-2xl" />
      </div>

      {/* Card central sobria */}
      <div className="relative z-10 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 px-4 sm:px-6 lg:px-4 w-full text-center mt-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-1 sm:mb-2 uppercase pt-4 md:py-8">
          ¡Novedades y{' '}
          <span className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Oportunidades!</span>
        </h2>
        <h3 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black tracking-tight text-gray-200/80  sm:mb-4 uppercase px-2">
          Tenemos lo que necesitás
        </h3>
      </div>

      {/* Carousel destacado */}
      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 xl:w-3/4 mx-auto overflow-hidden rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-lg animate-fadein delay-300">
        <div
          ref={marqueeRef}
          className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-2 sm:py-3"
          style={{
            animation: 'marquee 18s linear infinite',
          }}
        >
          {carouselItems.map((item, idx) =>
            item ? (
              <Link to={`/producto/${item.id}`} key={`${idx}-${item.id}`}>
                <div
                  className="group w-28 h-56 sm:w-36 sm:h-44 md:w-44 md:h-52 lg:w-56 lg:h-64 xl:w-64 xl:h-80 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 outline outline-1 sm:outline-2 outline-yellow-400/40"
                >
                  <div className="relative w-full h-full">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      draggable={false}
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <span className="inline-block px-2 py-1 bg-[#bfa046] text-[#232b3e] text-xs font-bold rounded-full mb-1 sm:mb-2 shadow">
                        {item.category}
                      </span>
                      <h4 className="text-white font-bold text-xs sm:text-sm md:text-base drop-shadow line-clamp-2">
                        {item.caption}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </div>

      {/* Botón Ver Todo */}
      <Link
        to="/novedades"
        className="relative z-10 inline-block mx-4 mt-8 px-6 py-3 sm:px-8 sm:py-3 font-bold text-sm sm:text-base rounded-full shadow-md tracking-wide uppercase mt-6 sm:mt-8 lg:mt-14 text-white bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 transition-all duration-300 ease-out active:scale-95"
      >
        Ver Todo
      </Link>

      {/* Flecha de Desplazamiento */}
      <div className="flex justify-center mt-12 sm:mt-8 lg:mt-16 pb-4 sm:pb-6 lg:pb-0">
        <svg 
          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#bfa046] animate-bounce" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="white"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        .delay-300 { animation-delay: .3s; }
        
        /* Responsive marquee speeds */
        @media (max-width: 640px) {
          .marquee-container {
            animation-duration: 10s;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .marquee-container {
            animation-duration: 14s;
          }
        }
        @media (min-width: 1025px) {
          .marquee-container {
            animation-duration: 18s;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;