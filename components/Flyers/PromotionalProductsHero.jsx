import { useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

// Lazy load de imágenes para mejor rendimiento
const ProductImage = lazy(() => import('../ProductImage'));

const BADGE_CONFIG = {
  'MÁS PEDIDO': { icon: '🔥', color: 'bg-gradient-to-r from-red-500/30 to-orange-500/30', border: 'border-red-400/40', text: 'text-red-100' },
  'NUEVO': { icon: '🆕', color: 'bg-gradient-to-r from-emerald-500/30 to-green-500/30', border: 'border-emerald-400/40', text: 'text-emerald-100' },
  'OFERTA': { icon: '💸', color: 'bg-gradient-to-r from-amber-500/30 to-yellow-500/30', border: 'border-amber-400/40', text: 'text-amber-100' },
  'TRENDING': { icon: '📈', color: 'bg-gradient-to-r from-purple-500/30 to-violet-500/30', border: 'border-purple-400/40', text: 'text-purple-100' },
  'RECOMENDADO': { icon: '👍', color: 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30', border: 'border-blue-400/40', text: 'text-blue-100' }
};

const FALLBACK_PRODUCTS = [
  {
    id: 1,
    name: "Auriculares con Tu Logo",
    price: "Desde $189",
    description: "Algodón premium, estampado de alta calidad",
    image: "https://i.postimg.cc/Qd2gz6pV/image-24.jpg",
    category: "textil",
    badge: "MÁS PEDIDO",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]
  },
  {
    id: 2,
    name: "Power Bank con Logo",
    price: "Desde $299",
    description: "10,000 mAh, carga rápida, grabado láser",
    image: "https://i.postimg.cc/brCPNGcq/image.png",
    category: "tecnología",
    badge: "NUEVO",
    colors: ["#000000", "#FFFFFF", "#FFD93D"]
  },
  {
    id: 3,
    name: "Tazas Personalizadas",
    price: "Desde $149",
    description: "Cerámica de alta calidad, impresión full color",
    image: "https://i.postimg.cc/J0684yV4/image.png",
    category: "hogar",
    badge: "OFERTA",
    colors: ["#FFFFFF", "#000000", "#FF6B6B", "#4ECDC4"]
  },
  {
    id: 4,
    name: "Eco Bottles",
    price: "Desde $229",
    description: "Botellas reutilizables, materiales sustentables",
    image: "https://i.postimg.cc/BbyXSHhq/PHOTO-2024-11-20-14-15-17.jpg",
    category: "eco",
    badge: "TRENDING",
    colors: ["#6BCF7F", "#4ECDC4", "#45B7D1"]
  }
];

// Componente Skeleton con tamaño fijo
const ProductCardSkeleton = () => (
  <div className="group flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-white/60 shadow-lg animate-pulse h-[450px] sm:h-[500px]">
    <div className="w-full h-[250px] sm:h-[280px] bg-gradient-to-br from-slate-200 to-slate-300"></div>
    <div className="p-4 sm:p-6 space-y-3 flex flex-col flex-grow">
      <div className="h-5 bg-gradient-to-r from-slate-300 to-slate-400 rounded w-3/4 mx-auto"></div>
      <div className="h-3 bg-gradient-to-r from-slate-300/70 to-slate-400/70 rounded w-full mt-2"></div>
      <div className="h-3 bg-gradient-to-r from-slate-300/70 to-slate-400/70 rounded w-5/6 mx-auto"></div>
      <div className="mt-auto pt-4">
        <div className="h-10 bg-gradient-to-r from-slate-300/80 to-slate-400/80 rounded-xl w-full"></div>
      </div>
    </div>
  </div>
);

const PromotionalProductsHero = () => {
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
        
        const response = await fetch('https://gserver.zeabur.app/api/products?featuredIn=articulos-promocionales', {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError('No se pudieron cargar los productos promocionales. Mostrando productos de ejemplo.');
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
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      
      {/* Elementos decorativos de fondo sutil */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-lg rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-slate-200/80 shadow-sm">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></span>
            <span className="text-cyan-700 text-sm sm:text-base font-semibold uppercase tracking-wider">
              Productos Promocionales
            </span>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 
              id="promotional-products-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-slate-800 mb-2 sm:mb-4 leading-tight"
            >
              <span className="text-3xl md:text-6xl block bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                Artículos <i className="text-3xl md:text-6xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2 sm:mt-4 not-italic">Promocionales</i>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600/90 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
              Los artículos promocionales más efectivos para tu <span className="text-lg sm:text-xl lg:text-2xlfont-semibold text-slate-800 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">campaña de marketing</span>
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <Suspense fallback={
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {Array(4).fill().map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          }>
            {loading ? (
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {Array(4).fill().map((_, i) => <ProductCardSkeleton key={i} />)}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-orange-400/20 mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-orange-600 font-medium">{error}</span>
                </div>
              </div>
            ) : displayProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-300/10 to-slate-400/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-slate-400/20">
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="text-slate-600 font-medium">No hay productos promocionales disponibles</span>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                          to={`/producto/${productId}`}
                          className="block focus:outline-none focus:ring-3 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-50 rounded-2xl transition-transform duration-300 hover:-translate-y-1 h-full"
                          aria-label={`Ver detalles de ${product.name} - ${product.description}`}
                        >
                          <div className={`
                            relative flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden 
                            border border-white/60 transition-all duration-500 ease-out h-full min-h-[450px] sm:min-h-[500px]
                            ${hoveredCard === productId 
                              ? 'shadow-2xl shadow-blue-500/30 scale-[1.02] border-blue-200/60 ring-1 ring-blue-100' 
                              : 'shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10'
                            }
                          `}>
                            {/* Badge con gradiente */}
                            {product.badge && (
                              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                                <span className={`
                                  inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border backdrop-blur-md shadow-md whitespace-nowrap
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
                            <div className="relative w-full h-[250px] sm:h-[280px] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex items-center justify-center">
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
                                absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent
                                transition-opacity duration-500
                                ${hoveredCard === productId ? 'opacity-100' : 'opacity-0'}
                                pointer-events-none
                              `} />
                            </div>
                            
                            {/* Contenido con altura mínima fija */}
                            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow min-h-[200px]">
                              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 text-center leading-tight line-clamp-2 flex items-center justify-center group-hover:text-slate-900 transition-colors duration-300 min-h-[3rem]">
                                {product.name}
                              </h3>
                              
                              <p className="text-slate-600/90 text-xs sm:text-sm text-center leading-relaxed line-clamp-3 flex-grow group-hover:text-slate-700 transition-colors duration-300">
                                {product.description}
                              </p>
                              
                              {/* Precio */}
                              {product.price && (
                                <div className="flex justify-center">
                                  <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    {product.price}
                                  </span>
                                </div>
                              )}
                              
                              {/* CTA Button */}
                              <div className="pt-2 sm:pt-3 mt-auto">
                                <span className={`
                                  w-full py-3 sm:py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300
                                  border-2 backdrop-blur-sm whitespace-nowrap cursor-pointer select-none flex items-center justify-center gap-2
                                  ${hoveredCard === productId
                                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent shadow-lg shadow-blue-500/30 scale-105'
                                    : 'bg-gradient-to-r from-cyan-600/10 to-blue-600/10 text-cyan-700 border-cyan-600/20 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20'
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
                      className="group inline-flex items-center justify-center bg-gradient-to-r from-white/80 to-white/60 hover:from-white hover:to-white/80 text-slate-700 font-semibold py-3 sm:py-3.5 px-8 sm:px-10 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base border border-slate-300 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
                    >
                      CARGAR MÁS PRODUCTOS
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
              ¿Listo para potenciar tu <span className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">visibilidad de marca</span>?
            </h2>
            <p className="text-slate-600/90 text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Transforma tus campañas de marketing con productos promocionales de alta calidad y alto impacto
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Link
                to="/articulos-promocionales"
                className="group relative inline-flex items-center justify-center hover:bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 font-bold py-3.5 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-base sm:text-lg shadow-xl hover:shadow-2xl border border-slate-600 overflow-hidden w-full sm:w-auto text-center"
                aria-label="Explorar catálogo completo de productos promocionales"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center hover:text-white">
                  VER CATÁLOGO COMPLETO
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>

              <Link
                to="/contacto"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-white/40 hover:to-white/20 text-white hover:text-slate-700 font-semibold py-3.5 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-base sm:text-lg border border-slate-300 backdrop-blur-xl w-full sm:w-auto text-center"
                aria-label="Contactar para cotización personalizada"
              >
                SOLICITAR COTIZACIÓN
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx='true'>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default PromotionalProductsHero;