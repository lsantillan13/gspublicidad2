import React, { useState, useMemo, lazy, Suspense, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Lazy load de imágenes para mejor rendimiento
const ProductImage = lazy(() => import('../ProductImage'));

const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: "BANDERAS",
    description: "Tecnología y confort con tu logo",
    imageUrl: "https://i.postimg.cc/Bb7mQn7V/image.png",
    link: "/catalogo/banners?categoria=banderas",
    badge: "POPULAR"
  },
  {
    id: 2,
    title: "SOMBRILLAS", 
    description: "Diseños exclusivos para exteriores",
    imageUrl: "https://i.postimg.cc/zXyZFGYH/U314-Roja-Abierta.jpg",
    link: "/catalogo/banners?categoria=sombrillas",
    badge: "NUEVO"
  },
  {
    id: 3,
    title: "PORTABANNERS",
    description: "Gabardina grafa de máxima durabilidad",
    imageUrl: "https://i.postimg.cc/nhD3pZ43/image.png",
    link: "/catalogo/banners?categoria=portabanners",
    badge: "PROFESIONAL"
  },
  {
    id: 4,
    title: "FLY BANNERS",
    description: "Resistencia petrolera con tu marca",
    imageUrl: "https://i.postimg.cc/26zGQZPt/image.png",
    link: "/catalogo/banners?categoria=flybanners",
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

// Componente ProductCard mejorado con carga diferida
const ProductCard = ({ product, hoveredCard, setHoveredCard, isSelected, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(product.id);
      navigate(product.link);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    onSelect(product.id);
    navigate(product.link);
  };

  return (
    <li 
      ref={cardRef}
      className="group relative list-none"
      onMouseEnter={() => setHoveredCard(product.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="button"
      aria-label={`Seleccionar categoría: ${product.title}. ${product.description}`}
      aria-selected={isSelected}
    >
      <div className={`
        relative flex flex-col bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden 
        border transition-all duration-500 ease-out
        h-full shadow-2xl shadow-black/30 min-w-[280px] cursor-pointer
        ${isSelected ? 'border-2 border-cyan-500 shadow-2xl shadow-cyan-500/40 transform scale-[1.02]' : 'border-white/10'}
        ${hoveredCard === product.id && !isSelected ? 'shadow-xl shadow-cyan-500/20 border-cyan-400/30' : ''}
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

        {/* Indicador de selección */}
        {isSelected && (
          <div className="absolute top-4 right-4 z-20">
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        )}

        {/* Image Container */}
        <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          {isVisible ? (
            imageError ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 p-4">
                <svg className="w-16 h-16 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 text-center text-sm">Imagen no disponible</span>
              </div>
            ) : (
              <Suspense fallback={
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse" />
              }>
                <ProductImage
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={400}
                  height={320}
                  onError={() => setImageError(true)}
                />
              </Suspense>
            )
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse" />
          )}
          
          {/* Overlay gradiente */}
          <div className={`
            absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
            transition-opacity duration-500
            ${hoveredCard === product.id || isSelected ? 'opacity-80' : 'opacity-60'}
          `} />

          {/* Efecto de brillo en hover/selección */}
          <div className={`
            absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10
            transition-opacity duration-500
            ${hoveredCard === product.id || isSelected ? 'opacity-100' : 'opacity-0'}
          `} />
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white text-center leading-tight line-clamp-2">
            {product.title}
          </h3>
          
          <p className="text-gray-300 text-base text-center leading-relaxed line-clamp-2 flex-grow">
            {product.description}
          </p>

          {/* CTA Button mejorado */}
          <div className="pt-2">
            <button
              className={`
                w-full py-3 px-4 rounded-xl font-semibold text-base transition-all duration-300
                border-2 backdrop-blur-lg text-center focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900
                ${isSelected
                  ? 'bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/40'
                  : hoveredCard === product.id
                    ? 'bg-white text-cyan-700 border-white shadow-lg shadow-white/30'
                    : 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50'
                }
              `}
              aria-label={`Ver más sobre ${product.title}`}
            >
              {isSelected ? 'SELECCIONADO ✓' : (hoveredCard === product.id ? 'VER MÁS →' : 'VER MÁS')}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

// Componente Skeleton más ancho
const ProductCardSkeleton = () => (
  <li className="group flex flex-col bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 animate-pulse list-none">
    <div className="w-full h-80 bg-gradient-to-br from-gray-700 to-gray-900"></div>
    <div className="p-6 space-y-4">
      <div className="h-6 bg-gray-600/50 rounded w-4/5 mx-auto"></div>
      <div className="h-4 bg-gray-600/30 rounded w-full"></div>
      <div className="h-12 bg-gray-600/40 rounded-xl w-full mt-4"></div>
    </div>
  </li>
);

function PromocionaTuEmpresa() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState(PRODUCT_CATEGORIES);

  const memoizedProducts = useMemo(() => categories, [categories]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    // Aquí puedes agregar lógica adicional:
    // - Filtrar productos relacionados
    // - Actualizar estado global
    // - Enviar analytics
    // - Mostrar más detalles
    
    console.log(`Categoría seleccionada: ${categoryId}`);
    
    // Ejemplo: Resaltar la categoría seleccionada por 3 segundos
    setTimeout(() => {
      setSelectedCategory(null);
    }, 3000);
  };

  // Manejar navegación por teclado entre tarjetas
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Escape' && selectedCategory) {
        setSelectedCategory(null);
      }
      
      // Navegación con flechas (opcional)
      if (e.key === 'ArrowRight' && selectedCategory) {
        e.preventDefault();
        const nextId = selectedCategory < PRODUCT_CATEGORIES.length ? selectedCategory + 1 : 1;
        setSelectedCategory(nextId);
      }
      
      if (e.key === 'ArrowLeft' && selectedCategory) {
        e.preventDefault();
        const prevId = selectedCategory > 1 ? selectedCategory - 1 : PRODUCT_CATEGORIES.length;
        setSelectedCategory(prevId);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [selectedCategory]);

  // Efecto para anunciar selección a lectores de pantalla
  useEffect(() => {
    if (selectedCategory) {
      const selectedProduct = PRODUCT_CATEGORIES.find(p => p.id === selectedCategory);
      if (selectedProduct) {
        const ariaLive = document.getElementById('selection-announcement');
        if (ariaLive) {
          ariaLive.textContent = `Categoría seleccionada: ${selectedProduct.title}. ${selectedProduct.description}`;
        }
      }
    }
  }, [selectedCategory]);

  return (
    <section 
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 sm:py-20 lg:py-28"
      aria-labelledby="promociona-empresa-title"
    >
      {/* Área para anuncios de accesibilidad */}
      <div 
        id="selection-announcement"
        className="sr-only" 
        aria-live="polite" 
        aria-atomic="true"
      >
        {/* El contenido se actualizará dinámicamente */}
      </div>

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

          {/* Indicador de selección actual */}
          {selectedCategory && (
            <div className="inline-flex items-center gap-3 bg-cyan-500/20 backdrop-blur-md rounded-full px-6 py-3 border border-cyan-400/30 animate-pulse">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-cyan-300 text-sm font-semibold uppercase tracking-wider">
                Categoría seleccionada: {PRODUCT_CATEGORIES.find(p => p.id === selectedCategory)?.title}
              </span>
            </div>
          )}

          {/* Línea divisoria */}
          <div className="w-56 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Products Grid */}
        <div className="flex justify-center mb-16 sm:mb-20 lg:mb-24">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full max-w-7xl" role="list">
            <Suspense fallback={
              <React.Fragment>
                {Array(5).fill().map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </React.Fragment>
            }>
              {memoizedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  isSelected={selectedCategory === product.id}
                  onSelect={handleCategorySelect}
                />
              ))}
            </Suspense>
          </ul>
        </div>

        {/* Instrucciones de uso (solo para lectores de pantalla) */}
        <div className="sr-only">
          <p>Usa las teclas Tab para navegar entre las categorías. Presiona Enter o Espacio para seleccionar una categoría.</p>
          <p>Usa las flechas izquierda y derecha para navegar entre categorías cuando una está seleccionada.</p>
          <p>Presiona Escape para deseleccionar.</p>
        </div>

        {/* CTA Principal Centrado */}
        <div className="flex justify-center">
          <Link
            to="/catalogo/banners?categoria=todos"
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
        
        /* Mejoras de focus para accesibilidad */
        :focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 2px;
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}

export default PromocionaTuEmpresa;