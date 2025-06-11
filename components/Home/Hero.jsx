import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const galleryItems = [
    { 
      src: 'https://i.postimg.cc/59qwPgq8/Copilot-20250605-185201.png', 
      alt: 'Mameluco Gabardina 6 y 8oz', 
      caption: 'Mameluco Gabardina 6 y 8oz',
      category: 'Indumentaria Laboral'
    },
    { 
      src: 'https://i.postimg.cc/DyDy1WpR/image.png', 
      alt: 'Camiseta con Logo', 
      caption: 'Pantalón Cargo Ripstop Anti Desgarro',
      category: 'Indumentaria Laboral'
    },
    { 
      src: 'https://i.postimg.cc/pL9wN5SP/Chomba-pique-de-trabajo-y-pantal-n-cargo-tela-antidesgarro-con-bolsillos-laterales.jpg', 
      alt: 'Pantalón Cargo Gabardina', 
      caption: 'Pantalón Cargo Gabardina',
      category: 'Indumentaria Laboral'
    },
    { 
      src: 'https://i.postimg.cc/dQfLjSLW/image.png', 
      alt: 'Campera Trucker Azul Marino', 
      caption: 'Campera Trucker Azul Marino',
      category: 'Indumentaria Laboral' 
    },
    { 
      src: 'https://i.postimg.cc/ZRHfDbjp/image.png', 
      alt: 'Campera 3 en 1 Calidad Premium',
      caption: 'Campera 3 en 1 Calidad Premium',
      category: 'Indumentaria Laboral'
    },
    { 
      src: 'https://i.postimg.cc/jj9r5hyL/image.png', 
      alt: 'Valija Carry On / Cabina',
      caption: 'Valija Carry On / Cabina',
      category: 'Viajes y Accesorios' 
    }
  ];

  const marqueeRef = useRef(null);

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

  const carouselItems = [...galleryItems, ...galleryItems];

  return (
    <section className="relative py-4 min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-[#181e29] top-12">
      {/* Fondo geométrico sutil */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#232b3e] via-[#181e29] to-[#232b3e] opacity-100" />
        {/* Líneas diagonales sutiles */}
        <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" viewBox="0 0 1440 900" fill="none">
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
        {/* Círculo decorativo discreto */}
        <div className="absolute  -top-24 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-[#bfa046]/20 to-transparent blur-2xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tr from-[#0ea5e9]/10 to-transparent blur-2xl" />
      </div>

      {/* Card central sobria */}
      <div className="relative z-10 mt-2  mb-12 px-10 py-2 w-max w-full text-center rounded-2xl">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#fbbf24] mb-6 uppercase">
          <i className="text-white text-4xl md:text-5xl font-black not-italic tracking-tight mb-2 uppercase">¡Descubrí los Nuevos</i> Ingresos!
        </h2>
        <h3 className='text-3xl md:text-4xl w-100 font-black tracking-tight text-gray-300/90 mb-2 uppercase'>Encontrá la mejor opción para vos</h3>
      </div>
      {/* Carousel destacado */}
      <div className="relative z-10 w-full w-3/4 mx-auto overflow-hidden rounded-2xl shadow-xl backdrop-blur-lg animate-fadein delay-300">
        <div
          ref={marqueeRef}
          className="flex w-max gap-8 py-2"
          style={{
            animation: 'marquee 36s linear infinite',
          }}
        >
          {carouselItems.map((item, idx) => (
            item.src && (
              <div
                key={`${idx}-${item.caption}`}
                className="group w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#181e29]/80 border border-[#bfa046]/10"
              >
                <div className="relative h-80 w-full">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#181e29]/90 via-transparent to-transparent">
                    <span className="inline-block px-3 py-1 bg-[#bfa046] text-[#232b3e] text-xs font-bold rounded-full mb-2 shadow">
                      {item.category}
                    </span>
                    <h4 className="text-white font-bold text-base drop-shadow">
                      {item.caption}
                    </h4>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      <Link
        to="/productos"
        className="inline-block px-8 py-3 font-bold text-base rounded-full bg-[#bfa046] text-black shadow-md hover:bg-[#0ea5e9] hover:text-white transition-colors duration-300 tracking-wide uppercase flex justify-center mt-10 font-['Montserrat']"
      >
        Ver Catálogo completo
      </Link>
      </div>


      {/* Animaciones CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
          }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        .delay-300 { animation-delay: .3s; }
      `}</style>
    </section>
  );
}

export default Hero;