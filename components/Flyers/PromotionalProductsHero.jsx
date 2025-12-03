import React from 'react';
import { Link } from 'react-router-dom';

const PromotionalProductsHero = () => {
  const featuredProducts = [
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
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
      category: "eco",
      badge: "TRENDING",
      colors: ["#6BCF7F", "#4ECDC4", "#45B7D1"]
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      
      {/* Elementos decorativos de fondo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Header Section - Consistente con el anterior */}
        <div className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-slate-200 mb-2 sm:mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-cyan-700 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Productos Promocionales
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-slate-800 mb-4 sm:mb-6 leading-tight sm:leading-none">
            Artículos
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-2 sm:mt-4">
              Promocionales
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-600 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            Los artículos promocionales más efectivos para tu <span className="font-semibold text-slate-800">campaña de marketing</span>
          </p>
        </div>

        {/* Products Grid - Mejorado y responsive */}
        <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl">
            {featuredProducts.map((product) => (
              <article 
                key={product.id}
                className="group relative flex flex-col bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 h-full"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                    <span className={`
                      inline-block px-2 py-1 text-xs font-bold rounded-full border backdrop-blur-sm whitespace-nowrap
                      ${product.badge === 'MÁS PEDIDO' ? 'bg-red-500/20 text-red-700 border-red-400/30' :
                        product.badge === 'NUEVO' ? 'bg-green-500/20 text-green-700 border-green-400/30' :
                        product.badge === 'OFERTA' ? 'bg-orange-500/20 text-orange-700 border-orange-400/30' :
                        'bg-purple-500/20 text-purple-700 border-purple-400/30'
                      }
                    `}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 text-center leading-tight line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-slate-600 text-xs sm:text-sm text-center leading-relaxed line-clamp-2 mb-3">
                      {product.description}
                    </p>

                    {/* Color Options */}
                    <div className="flex justify-center items-center gap-1.5 sm:gap-2 mb-3 flex-wrap">
                      {product.colors.slice(0, 4).map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-slate-300 flex-shrink-0 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      {product.colors.length > 4 && (
                        <span className="text-slate-500 text-xs">
                          +{product.colors.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-1 sm:pt-2">
                    <Link
                      to={`/producto/${product.id}`}
                      className="block w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border border-cyan-600 hover:border-cyan-500 shadow-md hover:shadow-lg text-center"
                      aria-label={`Ver detalles de ${product.name}`}
                    >
                      VER PRODUCTO
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              to="/promocionales"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-base sm:text-lg shadow-xl hover:shadow-2xl border border-slate-600 overflow-hidden w-full sm:w-auto text-center"
              aria-label="Explorar catálogo completo de productos promocionales"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
                VER CATÁLOGO COMPLETO
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
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