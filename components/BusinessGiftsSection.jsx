import { Link } from "react-router-dom";
import { useState, useMemo, lazy, Suspense } from 'react';

// Lazy load de imágenes para mejor rendimiento
const ProductImage = lazy(() => import('./ProductImage'));

const PRODUCTS = [
  {
    id: 1,
    name: 'SET MATE STANLEY',
    image: 'https://i.postimg.cc/pT5rTbkp/image.png',
    link: '/producto/set-mate-stanley',
    badge: 'MÁS VENDIDO',
    description: 'Set premium con mate y termo Stanley'
  },
  {
    id: 2,
    name: 'MATERA TÉRMICA',
    image: 'https://i.postimg.cc/hGb7nqyP/wmremove-transformed.png',
    link: '/producto/matera-termica',
    badge: 'NUEVO',
    description: 'Matera con aislamiento térmico premium'
  },
  {
    id: 3,
    name: 'MATE GINEBRA CON LOGO',
    image: 'https://i.postimg.cc/pLB2XXH7/1994067565614628864-artguru.png',
    link: '/producto/mate-ginebra-logo',
    badge: 'PERSONALIZABLE',
    description: 'Kit completo con bombilla y packaging'
  },
  {
    id: 4,
    name: 'MATE CUERO IMPERIAL ALPACA',
    image: 'https://i.postimg.cc/ZKtBWR1V/image.png',
    link: '/producto/mate-cuero-imperial-alpaca',
    badge: 'EDICIÓN LIMITADA',
    description: 'Cuero genuino y alpaca de lujo'
  }
];

// Componente Skeleton responsive
const ProductCardSkeleton = () => (
  <div className="group flex flex-col bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 animate-pulse">
    <div className="w-full aspect-square bg-gray-700/50"></div>
    <div className="p-4 sm:p-6 space-y-3">
      <div className="h-4 bg-gray-600/50 rounded w-3/4 mx-auto"></div>
      <div className="h-3 bg-gray-600/30 rounded w-full"></div>
      <div className="h-10 bg-gray-600/40 rounded-xl w-full mt-2"></div>
    </div>
  </div>
);

const BusinessGiftsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const memoizedProducts = useMemo(() => PRODUCTS, []);

  return (
    <section 
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-12 sm:py-16 lg:py-24 xl:py-8"
      aria-labelledby="business-gifts-title"
    >
      {/* Background optimizado para mobile */}
      <div 
        className="absolute inset-0 bg-[url('https://i.postimg.cc/J4h2vQsv/upscalemedia-transformed.png')] bg-cover bg-fixed bg-center bg-no-repeat opacity-20 saturate-150"
      />
      
      {/* Overlay gradiente responsive */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-blue-900/85 sm:from-slate-900/90 sm:via-slate-900/70 sm:to-blue-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Header Section - Mejorado para mobile */}
        <div className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-white/20 mb-2 sm:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Productos Destacados
            </span>
          </div>

          <h1 
            id="business-gifts-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white mb-4 sm:mb-6 leading-tight sm:leading-none bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
          >
            Regalos
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2 sm:mt-4">
              Empresariales
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            Soluciones <span className="font-semibold text-white">premium personalizadas</span> para fortalecer relaciones comerciales
          </p>

        </div>

        {/* Products Grid - Completamente responsive */}
        <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 w-full max-w-7xl px-2 sm:px-0">
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
                    className="block"
                    aria-label={`Ver detalles de ${product.name} - ${product.description}`}
                  >
                    <div className={`
                      relative flex flex-col bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden 
                      border border-white/10 transition-all duration-500 ease-out
                      h-full
                      ${hoveredCard === product.id 
                        ? 'shadow-2xl shadow-blue-500/20 transform scale-105 border-white/20' 
                        : 'shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-blue-500/10'
                      }
                    `}>
                      {/* Badge responsive */}
                      {product.badge && (
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                          <span className={`
                            inline-block px-2 py-1 text-xs font-bold rounded-full border backdrop-blur-sm whitespace-nowrap
                            ${product.badge === 'MÁS VENDIDO' ? 'bg-red-500/20 text-red-200 border-red-400/30' :
                              product.badge === 'NUEVO' ? 'bg-green-500/20 text-green-200 border-green-400/30' :
                              product.badge === 'PERSONALIZABLE' ? 'bg-blue-500/20 text-blue-200 border-blue-400/30' :
                              'bg-purple-500/20 text-purple-200 border-purple-400/30'
                            }
                          `}>
                            {product.badge}
                          </span>
                        </div>
                      )}

                      {/* Image Container responsive */}
                      <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                        <ProductImage
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110"
                          width={400}
                          height={400}
                        />
                        
                        {/* Overlay en hover - solo desktop */}
                        <div className={`
                          absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                          transition-opacity duration-500
                          ${hoveredCard === product.id ? 'opacity-100' : 'opacity-0'}
                          hidden sm:block
                        `} />
                      </div>
                      
                      {/* Content responsive */}
                      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white text-center leading-tight line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                          {product.name}
                        </h3>
                        
                        <p className="text-gray-300 text-xs sm:text-sm text-center leading-relaxed line-clamp-2 flex-grow">
                          {product.description}
                        </p>

                        {/* CTA Button responsive */}
                        <div className="pt-1 sm:pt-2">
                          <button 
                            className={`
                              w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300
                              border-2 backdrop-blur-sm whitespace-nowrap
                              ${hoveredCard === product.id
                                ? 'bg-white text-blue-700 border-white shadow-lg shadow-white/20'
                                : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                              }
                            `}
                            onClick={(e) => e.preventDefault()}
                          >
                            {hoveredCard === product.id ? 'VER DETALLES →' : 'VER PRODUCTO'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </Suspense>
          </div>
        </div>

        {/* CTA Section - Responsive */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              to="/merchandising"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-base sm:text-lg shadow-xl sm:shadow-2xl shadow-blue-500/30 border border-white/20 overflow-hidden w-full sm:w-auto text-center"
              aria-label="Explorar todos los productos empresariales"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
                EXPLORAR CATÁLOGO
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGiftsSection;