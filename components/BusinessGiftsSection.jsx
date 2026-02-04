import { Link } from "react-router-dom";
import { useState, useEffect, useMemo, lazy, Suspense } from 'react';

// Lazy load de imágenes para mejor rendimiento
const ProductImage = lazy(() => import('./ProductImage'));

const BADGE_CONFIG = {
  'MÁS VENDIDO': { icon: '🔥', color: 'bg-gradient-to-r from-red-500/30 to-orange-500/30', border: 'border-red-400/40', text: 'text-red-100' },
  'NUEVO': { icon: '🆕', color: 'bg-gradient-to-r from-emerald-500/30 to-green-500/30', border: 'border-emerald-400/40', text: 'text-emerald-100' },
  'PERSONALIZABLE': { icon: '🎨', color: 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30', border: 'border-blue-400/40', text: 'text-blue-100' },
  'EDICIÓN LIMITADA': { icon: '⭐', color: 'bg-gradient-to-r from-purple-500/30 to-violet-500/30', border: 'border-purple-400/40', text: 'text-purple-100' },
  'RECOMENDADO': { icon: '👍', color: 'bg-gradient-to-r from-amber-500/30 to-yellow-500/30', border: 'border-amber-400/40', text: 'text-amber-100' }
};

const FALLBACK_PRODUCTS = [
  {
    id: 1,
    name: 'Botella negra 600 ml acero inoxidable',
    image: 'https://i.postimg.cc/XvhRG9YH/image.png',
    link: '/producto/set-mate-stanley',
    badge: 'MÁS VENDIDO',
    description: 'Botella térmica de acero inoxidable en negro mate con capacidad ideal (600ml) y resistencia premium'
  },
  {
    id: 2,
    name: 'Jarro azul c/ manija',
    image: 'https://i.postimg.cc/X7Xt8GSp/image.png',
    link: '/producto/matera-termica',
    badge: 'NUEVO',
    description: 'Jarro azul de alta calidad con manija ergonómica y diseño clásico'
  },
  {
    id: 3,
    name: 'Botella Térmica Muak y Botella C/ Pico Sport 600ml',
    image: 'https://i.postimg.cc/CLFxL4qX/PHOTO-2024-11-20-14-10-00.webp',
    link: '/producto/mate-ginebra-logo',
    badge: 'PERSONALIZABLE',
    description: 'Aislamiento térmico estilo Muak / Pico deportivo y capacidad ideal (600ml)'
  },
  {
    id: 4,
    name: 'Gorra Vintage Gabardina 100% Algodón Prelavado',
    image: 'https://i.postimg.cc/bJkwdCLN/image.png',
    link: '/producto/mate-cuero-imperial-alpaca',
    badge: 'EDICIÓN LIMITADA',
    description: 'Diseño clásico, ajuste cómodo, estilo con acabado gastado, algodón premium'
  }
];

// Componente Skeleton con tamaño fijo
const ProductCardSkeleton = () => (
  <div className="flex flex-col bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 animate-pulse h-[450px] sm:h-[500px]">
    <div className="w-full h-[250px] sm:h-[280px] bg-gradient-to-br from-gray-800/50 to-gray-900/50"></div>
    <div className="p-4 sm:p-6 space-y-3 flex flex-col flex-grow">
      <div className="h-5 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded w-3/4 mx-auto"></div>
      <div className="h-3 bg-gradient-to-r from-gray-700/30 to-gray-600/30 rounded w-full mt-2"></div>
      <div className="h-3 bg-gradient-to-r from-gray-700/30 to-gray-600/30 rounded w-5/6 mx-auto"></div>
      <div className="mt-auto pt-4">
        <div className="h-10 bg-gradient-to-r from-gray-700/40 to-gray-600/40 rounded-xl w-full"></div>
      </div>
    </div>
  </div>
);

const BusinessGiftsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch('https://gserver.zeabur.app/api/products?featuredIn=regalos-empresariales', {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError('No se pudieron cargar los productos destacados. Mostrando productos de ejemplo.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const displayProducts = products.length > 0 ? products : FALLBACK_PRODUCTS;
  const showLoadMore = displayProducts.length > visibleProducts && !loading;

  const loadMoreProducts = () => {
    setVisibleProducts(prev => Math.min(prev + 4, displayProducts.length));
  };

  const getBadgeConfig = (badgeName) => {
    return BADGE_CONFIG[badgeName] || BADGE_CONFIG.RECOMENDADO;
  };

  return (
    <section 
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-12 sm:py-16 lg:py-20 xl:py-24"
      aria-labelledby="business-gifts-title"
    >
      {/* Background optimizado */}
      <div 
        className="absolute inset-0 bg-[url('https://i.postimg.cc/J4h2vQsv/upscalemedia-transformed.png')] bg-cover bg-fixed bg-center bg-no-repeat opacity-[0.15] saturate-125"
        aria-hidden="true"
      />
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-blue-950/85 to-slate-900/80" aria-hidden="true" />
      
      {/* Efectos de partículas sutiles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-16 xl:mb-24 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-white/15 shadow-lg">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-300 text-sm sm:text-base font-semibold uppercase tracking-wider">
              Productos Destacados
            </span>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 
              id="business-gifts-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white mb-2 sm:mb-4 leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-blue-50 to-cyan-100 bg-clip-text text-transparent text-3xl md:text-6xl">
                
                Regalos <i className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2 sm:mt-4 not-italic text-3xl md:text-6xl">Empresariales</i>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300/90 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
              Soluciones <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">premium personalizadas</span> para fortalecer relaciones comerciales y fidelizar clientes
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <Suspense fallback={
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {Array(4).fill().map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          }>
            {loading ? (
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {Array(4).fill().map((_, i) => <ProductCardSkeleton key={i} />)}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-red-400/20 mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-300 font-medium">{error}</span>
                </div>
              </div>
            ) : displayProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/10 to-gray-600/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-gray-400/20">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="text-gray-300 font-medium">No hay productos destacados disponibles</span>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {displayProducts.slice(0, visibleProducts).map((product) => {
                    const badgeConfig = getBadgeConfig(product.badge);
                    const productId = product._id || product.id;
                    
                    return (
                      <article 
                        key={productId}
                        className="group relative h-full"
                        onMouseEnter={() => setHoveredCard(productId)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <Link 
                          to={product.link || `/producto/${productId}`}
                          className="block focus:outline-none focus:ring-3 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-2xl transition-transform duration-300 hover:-translate-y-1 h-full"
                          aria-label={`Ver detalles de ${product.name} - ${product.description}`}
                        >
                          <div className={`
                            relative flex flex-col bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden 
                            border border-white/10 transition-all duration-500 ease-out h-full min-h-[450px] sm:min-h-[500px]
                            ${hoveredCard === productId 
                              ? 'shadow-2xl shadow-blue-500/40 scale-[1.02] border-white/25 ring-1 ring-white/20' 
                              : 'shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-blue-500/20'
                            }
                          `}>
                            {/* Badge mejorado con gradiente */}
                            {product.badge && (
                              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                                <span className={`
                                  inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border backdrop-blur-md shadow-lg whitespace-nowrap
                                  ${badgeConfig.color} ${badgeConfig.border} ${badgeConfig.text}
                                  transition-transform duration-300
                                  ${hoveredCard === productId ? 'scale-110' : ''}
                                `}>
                                  <span aria-hidden="true" className="text-sm">{badgeConfig.icon}</span>
                                  <span>{product.badge}</span>
                                </span>
                              </div>
                            )}
                            
                            {/* Contenedor de imagen con tamaño fijo y contain */}
                            <div className="relative w-full h-[250px] sm:h-[280px] bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden flex items-center justify-center">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 z-10" />
                              
                              {/* Contenedor interno para mantener proporción */}
                              <div className="relative w-full h-full flex items-center justify-center p-4">
                                <ProductImage
                                  src={product.imageUrl || product.image}
                                  alt={product.name}
                                  className="max-w-full max-h-full object-contain transition-all duration-700 ease-out group-hover:scale-105"
                                  width={280}
                                  height={280}
                                  style={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    maxHeight: '100%'
                                  }}
                                />
                              </div>
                              
                              {/* Overlay en hover */}
                              <div className={`
                                absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                                transition-opacity duration-500
                                ${hoveredCard === productId ? 'opacity-100' : 'opacity-0'}
                                pointer-events-none
                              `} />
                            </div>
                            
                            {/* Contenido con altura mínima fija */}
                            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow min-h-[200px]">
                              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white text-center leading-tight line-clamp-2 flex items-center justify-center group-hover:text-blue-50 transition-colors duration-300 min-h-[3rem]">
                                {product.name}
                              </h3>
                              
                              <p className="text-gray-300/90 text-xs sm:text-sm text-center leading-relaxed line-clamp-3 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                                {product.description}
                              </p>
                              
                              {/* CTA Button con posición fija al final */}
                              <div className="pt-2 sm:pt-3 mt-auto">
                                <span className={`
                                  w-full py-3 sm:py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300
                                  border-2 backdrop-blur-sm whitespace-nowrap cursor-pointer select-none flex items-center justify-center gap-2
                                  ${hoveredCard === productId
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-transparent shadow-lg shadow-blue-500/30 scale-105'
                                    : 'bg-gradient-to-r from-white/10 to-white/5 text-white border-white/20 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10'
                                  }
                                `}>
                                  {hoveredCard === productId ? (
                                    <>
                                      VER DETALLES
                                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                      </svg>
                                    </>
                                  ) : (
                                    'VER PRODUCTO'
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </article>
                    );
                  })}
                </div>

                {/* Botón Load More */}
                {showLoadMore && (
                  <div className="text-center mt-10 sm:mt-12">
                    <button
                      onClick={loadMoreProducts}
                      className="group inline-flex items-center justify-center bg-gradient-to-r from-white/35 to-white/35 hover:from-white/20 hover:to-white/10 text-white font-semibold py-3 sm:py-3.5 px-8 sm:px-10 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base border border-white/15 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 font-semibold"
                    >
                      CARGAR MÁS PRODUCTOS
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2  transition-transform" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </Suspense>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 sm:space-y-10">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              ¿Necesitás regalos <span className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">personalizados</span> para tu empresa?
            </h2>
            <p className="text-gray-300/90 text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contámos con servicio de branding, packaging premium y logística para regalos corporativos
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Link
                to="/regaleria-empresarial"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-base sm:text-lg shadow-xl sm:shadow-2xl shadow-blue-500/30 border border-white/20 overflow-hidden w-full sm:w-auto text-center"
                aria-label="Explorar catálogo completo de regalos empresariales"
              >
                <span className="relative z-10 text-white font-semibold flex items-center gap-2 sm:gap-3 justify-center">
                  EXPLORAR CATÁLOGO COMPLETO
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform selection:text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>

              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-transparent to-transparent hover:from-white/10 hover:to-white/5 text-white font-semibold py-3.5 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-base sm:text-lg border border-white/20 backdrop-blur-xl w-full sm:w-auto text-center"
                aria-label="Contactar para presupuesto personalizado"
              >
                SOLICITAR PRESUPUESTO
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGiftsSection;