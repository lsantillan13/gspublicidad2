import React, { useState, useMemo, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

// Lazy load de imágenes para mejor rendimiento
const ProductImage = lazy(() => import('../ProductImage'));

const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: "BANDERAS",
    description: "Tecnología y confort con tu logo",
    imageUrl: "https://i.postimg.cc/Bb7mQn7V/image.png",
    link: "/productos/banderas",
    badge: "POPULAR"
  },
  {
    id: 2,
    title: "SOMBRILLAS", 
    description: "Diseños exclusivos para exteriores",
    imageUrl: "https://i.postimg.cc/zXyZFGYH/U314-Roja-Abierta.jpg",
    link: "/productos/sombrillas",
    badge: "NUEVO"
  },
  {
    id: 4,
    title: "PORTABANNERS",
    description: "Gabardina grafa de máxima durabilidad",
    imageUrl: "https://i.postimg.cc/nhD3pZ43/image.png",
    link: "/productos/portabanners",
    badge: "PROFESIONAL"
  },
  {
    id: 5,
    title: "FLY BANNERS",
    description: "Resistencia petrolera con tu marca",
    imageUrl: "https://i.postimg.cc/26zGQZPt/image.png",
    link: "/productos/flybanners",
    badge: "RESISTENTE"
  }
];

const ANIMATED_LIGHTS = [
  {
    id: 'cyan',
    position: 'top-1/4 -left-20',
    size: 'w-96 h-96',
    color: 'bg-cyan-600/20',
    animation: 'animate-float-cyan'
  },
  {
    id: 'blue',
    position: 'bottom-1/4 -right-20',
    size: 'w-96 h-96',
    color: 'bg-blue-600/20',
    animation: 'animate-float-blue'
  },
  {
    id: 'sky',
    position: 'top-1/3 right-1/4',
    size: 'w-64 h-64',
    color: 'bg-sky-500/15',
    animation: 'animate-float-sky'
  }
];

// Componente Skeleton más ancho
const ProductCardSkeleton = () => (
  <div className="group flex flex-col bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 animate-pulse">
    <div className="w-full h-80 bg-gray-700/50"></div>
    <div className="p-6 space-y-4">
      <div className="h-6 bg-gray-600/50 rounded w-4/5 mx-auto"></div>
      <div className="h-4 bg-gray-600/30 rounded w-full"></div>
      <div className="h-12 bg-gray-600/40 rounded-xl w-full mt-4"></div>
    </div>
  </div>
);

function PromocionaTuEmpresa() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const memoizedProducts = useMemo(() => PRODUCT_CATEGORIES, []);

  return (
    <section 
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 sm:py-20 lg:py-28"
      aria-labelledby="promociona-empresa-title"
    >
      {/* Background con efectos animados */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated lights */}
      {ANIMATED_LIGHTS.map(light => (
        <div 
          key={light.id}
          className={`absolute ${light.position} ${light.size} ${light.color} rounded-full filter blur-3xl mix-blend-screen ${light.animation}`}
        ></div>
      ))}

      {/* Background con ruido sutil */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Header Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-4">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-300 text-sm font-semibold uppercase tracking-wider">
              Soluciones Visuales
            </span>
          </div>

          <h1 
            id="promociona-empresa-title"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white mb-6 leading-none bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent"
          >
            Promocioná
            <span className="block bg-gradient-to-r from-cyan-400 text-5xl sm:text-6xl md:text-7xl lg:text-7xl to-blue-500 bg-clip-text text-transparent mt-4">
              Tu Empresa
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Soluciones <span className="font-semibold text-white text-xl sm:text-2xl lg:text-2xl">visuales impactantes</span> para fortalecer tu presencia en el mercado
          </p>

          {/* Línea divisoria */}
          <div className="w-56 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Products Grid - Tarjetas más anchas */}
        <div className="flex justify-center mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full max-w-7xl">
            <Suspense fallback={
              <div className="contents">
                {Array(4).fill().map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            }>
              {memoizedProducts.map((product) => (
                <article 
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link 
                    to={product.link}
                    className="block h-full"
                    aria-label={`Explorar productos de ${product.title} - ${product.description}`}
                  >
                    <div className={`
                      relative flex flex-col bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden 
                      border border-white/10 transition-all duration-500 ease-out
                      h-full shadow-2xl shadow-black/30 min-w-[280px]
                      ${hoveredCard === product.id 
                        ? 'shadow-2xl shadow-cyan-500/30 transform scale-105 border-cyan-400/30' 
                        : 'hover:shadow-xl hover:shadow-cyan-500/20'
                      }
                    `}>
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-4 left-4 z-20">
                          <span className={`
                            inline-block px-3 py-1.5 text-sm font-bold rounded-full border-2 backdrop-blur-lg whitespace-nowrap
                            ${product.badge === 'POPULAR' ? 'bg-red-500/30 text-red-100 border-red-400/50' :
                              product.badge === 'NUEVO' ? 'bg-green-500/30 text-green-100 border-green-400/50' :
                              product.badge === 'DESTACADO' ? 'bg-blue-500/30 text-blue-100 border-blue-400/50' :
                              product.badge === 'PROFESIONAL' ? 'bg-purple-500/30 text-purple-100 border-purple-400/50' :
                              'bg-amber-500/30 text-amber-100 border-amber-400/50'
                            }
                          `}>
                            {product.badge}
                          </span>
                        </div>
                      )}

                      {/* Image Container más ancho - altura fija */}
                      <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                        <ProductImage
                          src={product.imageUrl}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          width={400}
                          height={320}
                        />
                        
                        {/* Overlay gradiente */}
                        <div className={`
                          absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                          transition-opacity duration-500
                          ${hoveredCard === product.id ? 'opacity-80' : 'opacity-60'}
                        `} />

                        {/* Efecto de brillo en hover */}
                        <div className={`
                          absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10
                          transition-opacity duration-500
                          ${hoveredCard === product.id ? 'opacity-100' : 'opacity-0'}
                        `} />
                      </div>
                      
                      {/* Content - más compacto para tarjetas anchas */}
                      <div className="p-6 space-y-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-white text-center leading-tight line-clamp-2">
                          {product.title}
                        </h3>
                        
                        <p className="text-gray-300 text-base text-center leading-relaxed line-clamp-2 flex-grow">
                          {product.description}
                        </p>

                        {/* CTA Button */}
                        <div className="pt-2">
                          <div 
                            className={`
                              w-full py-3 px-4 rounded-xl font-semibold text-base transition-all duration-300
                              border-2 backdrop-blur-lg text-center
                              ${hoveredCard === product.id
                                ? 'bg-white text-cyan-700 border-white shadow-lg shadow-white/30'
                                : 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50'
                              }
                            `}
                          >
                            {hoveredCard === product.id ? 'VER MÁS →' : 'VER MÁS'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </Suspense>
          </div>
        </div>

        {/* CTA Principal Centrado */}
        <div className="flex justify-center">
          <Link
            to="/mercadotecnia-y-promocionales"
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-black py-4 px-12 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-lg shadow-2xl shadow-cyan-500/30 border-2 border-cyan-400/30 overflow-hidden"
            aria-label="Descubrir catálogo completo de soluciones promocionales"
          >
            <span className="relative z-10 flex text-white/90 hover:text-white items-center gap-3 justify-center">
              VER CATÁLOGO COMPLETO
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-white" fill="white" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Link>
        </div>
      </div>

      <style jsx='true'>{`
        @keyframes float-cyan {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 25px) scale(0.95); }
        }
        @keyframes float-blue {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-25px, 35px) scale(1.05); }
          66% { transform: translate(15px, -20px) scale(0.98); }
        }
        @keyframes float-sky {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(20px, 15px) scale(1.08); }
        }
        .animate-float-cyan { animation: float-cyan 8s ease-in-out infinite; }
        .animate-float-blue { animation: float-blue 7s ease-in-out infinite; }
        .animate-float-sky { animation: float-sky 9s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default PromocionaTuEmpresa;