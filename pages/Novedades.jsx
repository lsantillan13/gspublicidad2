import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Geder from '../components/Geder';

// Componente de Skeleton Loading
const ProductCardSkeleton = () => (
  <div className="group flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 animate-pulse h-[460px]">
    <div className="w-full h-56 bg-gradient-to-br from-slate-200 to-slate-300"></div>
    <div className="p-6 space-y-3 flex flex-col flex-grow">
      <div className="h-6 bg-gradient-to-r from-slate-300 to-slate-400 rounded w-3/4"></div>
      <div className="h-4 bg-gradient-to-r from-slate-300/70 to-slate-400/70 rounded w-full"></div>
      <div className="h-4 bg-gradient-to-r from-slate-300/70 to-slate-400/70 rounded w-5/6"></div>
      <div className="flex flex-wrap gap-2 mt-2">
        <div className="h-6 bg-gradient-to-r from-slate-300/70 to-slate-400/70 rounded-full w-16"></div>
        <div className="h-6 bg-gradient-to-r from-slate-300/70 to-slate-400/70 rounded-full w-20"></div>
      </div>
      <div className="mt-auto pt-4">
        <div className="h-12 bg-gradient-to-r from-slate-300/80 to-slate-400/80 rounded-xl w-full"></div>
      </div>
    </div>
  </div>
);

const Ofertas = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [filter, setFilter] = useState('all'); // Filtro para productos en oferta
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // Productos por página
  
  // Referencia para la sección de productos
  const productsSectionRef = useRef(null);

  // Datos para el banner hero específico de ofertas
  const bannerSlides = [
    {
      id: 1,
      title: "Ofertas Especiales",
      subtitle: "Hasta 50% de descuento en productos seleccionados",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&h=600&fit=crop",
      cta: "Ver Ofertas",
      link: "/ofertas",
      bgGradient: "from-orange-500/20 to-red-600/20",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 2,
      title: "Liquidación de Temporada",
      subtitle: "Aprovecha los mejores precios antes que se agoten",
      image: "https://images.unsplash.com/photo-1608190003443-86ab6a3b2d65?w=1200&h=600&fit=crop",
      cta: "Comprar Ahora",
      link: "/ofertas",
      bgGradient: "from-red-500/20 to-pink-600/20",
      color: "from-red-600 to-pink-600"
    },
    {
      id: 3,
      title: "Descuentos Exclusivos",
      subtitle: "Precios especiales para clientes empresariales",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
      cta: "Solicitar Cotización",
      link: "/contacto",
      bgGradient: "from-purple-500/20 to-indigo-600/20",
      color: "from-purple-600 to-indigo-600"
    }
  ];

  // Obtener filtro de la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get('filtro') || 'all';
    setFilter(filterParam);
  }, [location.search]);

  // Fetch de TODOS los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://gserver.zeabur.app/api/products');
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerSlides.length]);

  // Filtrar productos (todos o solo ofertas)
  const filteredProducts = useMemo(() => {
    if (filter === 'ofertas') {
      return products.filter(product => 
        product.onSale || 
        product.discount || 
        product.oldPrice || 
        product.isOnSale ||
        (product.featuredIn && product.featuredIn.includes('novedades')) ||
        (product.featuredIn && product.featuredIn.includes('oferta'))
      );
    }
    return products; // Mostrar TODOS los productos
  }, [products, filter]);

  // Calcular paginación
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Cambiar página con scroll suave
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    
    // Scroll suave hacia la sección de productos con pequeño delay
    setTimeout(() => {
      if (productsSectionRef.current) {
        const yOffset = -100; // Ajuste para el header fijo
        const y = productsSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  // Manejo de clic en indicadores del banner
  const goToSlide = (index) => {
    setCurrentBanner(index);
  };

  // Manejar cambio de filtro
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  // Obtener color para badge
  const getCategoryColor = (product) => {
    const category = product.category?.toUpperCase();
    
    const colorMap = {
      'INDUMENTARIA DEPORTIVA': 'bg-blue-100 text-blue-700 border-blue-200',
      'ROPA DE TRABAJO': 'bg-orange-100 text-orange-700 border-orange-200',
      'EGRESADOS': 'bg-purple-100 text-purple-700 border-purple-200',
      'INDUMENTARIA URBANA': 'bg-purple-100 text-purple-700 border-purple-200',
      'INDUMENTARIA PREMIUM': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'REGALERIA EMPRESARIAL': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'ARTICULOS PROMOCIONALES': 'bg-red-100 text-red-700 border-red-200',
      'ARTICULOS DE VERANO': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    };
    
    return colorMap[category] || 'bg-slate-100 text-slate-700 border-slate-200';
  };

  // Extraer características del producto
  const extractFeatures = (description) => {
    if (!description) return [];
    
    const features = [];
    const desc = description.toLowerCase();
    
    if (desc.includes('impermeable')) features.push('Impermeable');
    if (desc.includes('resisten')) features.push('Resistente');
    if (desc.includes('personaliz')) features.push('Personalizable');
    if (desc.includes('premium')) features.push('Premium');
    if (desc.includes('calidad')) features.push('Alta calidad');
    if (desc.includes('import')) features.push('Importado');
    if (desc.includes('sublim')) features.push('Sublimado');
    if (desc.includes('bordado')) features.push('Bordado');
    if (desc.includes('oferta') || desc.includes('descuento')) features.push('En oferta');
    
    return features.slice(0, 3);
  };

  if (error) {
    return (
      <>
        <Geder />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
          <div className="text-center">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Error al cargar productos</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Reintentar
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Geder />
      <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        {/* Banner Hero para Ofertas */}
        <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Imagen de fondo */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Overlay gradiente */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
              
              {/* Contenido del banner */}
              <div className="relative h-full flex items-center justify-center text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 font-light drop-shadow-lg max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <Link
                    to={slide.link}
                    className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 text-lg sm:text-xl shadow-2xl"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Indicadores del banner */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBanner 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Flechas de navegación */}
          <button
            onClick={() => setCurrentBanner((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-20"
            aria-label="Slide anterior"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentBanner((prev) => (prev + 1) % bannerSlides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-20"
            aria-label="Slide siguiente"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Sección de Ofertas */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 top-16">
          
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-orange-200 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-orange-700 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {filter === 'ofertas' ? 'Ofertas Especiales' : 'Catálogo Completo'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4">
              <span className={`bg-gradient-to-r ${bannerSlides[currentBanner].color} bg-clip-text text-transparent`}>
                {filter === 'ofertas' ? 'Productos en Oferta' : 'Todos los Productos'}
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light mb-8">
              {filter === 'ofertas' 
                ? 'Descubre nuestras mejores ofertas y promociones especiales'
                : 'Explora nuestro catálogo completo de productos promocionales'
              }
            </p>

            {/* Filtros y Contador */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Filtros */}
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 border border-orange-200 shadow-sm">
                <button
                  onClick={() => handleFilterChange('all')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filter === 'all' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' 
                      : 'text-slate-600 hover:text-orange-600'
                  }`}
                >
                  Todos los Productos
                </button>
                <button
                  onClick={() => handleFilterChange('ofertas')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filter === 'ofertas' 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md' 
                      : 'text-slate-600 hover:text-red-600'
                  }`}
                >
                  Solo Ofertas
                </button>
              </div>

              {/* Contador */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-700 font-medium">
                    {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
                  </span>
                  {filter === 'ofertas' && (
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                      OFERTA
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Referencia para el scroll */}
          <div ref={productsSectionRef} className="scroll-mt-32"></div>

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {Array(productsPerPage).fill().map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {/* Products Grid */}
              {currentProducts.length > 0 ? (
                <>
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                      key={`products-grid-${currentPage}-${filter}`}
                    >
                      {currentProducts.map((product, index) => {
                        const features = extractFeatures(product.description);
                        const isOnSale = product.onSale || product.discount || product.oldPrice || 
                                          (product.featuredIn && product.featuredIn.includes('novedades'));
                        
                        return (
                          <motion.article
                            key={product._id || product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group h-full"
                          >
                            <Link
                              to={`/producto/${product._id || product.id}`}
                              className="block h-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:rounded-2xl"
                            >
                              <div className={`
                                relative flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden 
                                border border-slate-200 transition-all duration-300 h-full min-h-[460px]
                                ${isOnSale ? 'border-orange-200 shadow-lg' : 'shadow-sm hover:shadow-md'}
                                hover:shadow-xl hover:border-orange-300
                              `}>
                                {/* Imagen del Producto */}
                                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                                  <img
                                    src={product.imageUrl || product.images?.[0]}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=400&auto=format&fit=crop';
                                    }}
                                  />
                                  <div className={`absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent
                                    transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
                                  />
                                  
                                  {/* Badge de Oferta */}
                                  {isOnSale && (
                                    <div className="absolute top-3 left-3">
                                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        OFERTA
                                      </span>
                                    </div>
                                  )}
                                </div>

                                {/* Contenido */}
                                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                  <div className="mb-4">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 min-h-[56px]">
                                      {product.name}
                                    </h3>
                                    <p className="text-slate-600 text-sm line-clamp-3 min-h-[60px] mb-3">
                                      {product.description || 'Producto promocional de alta calidad'}
                                    </p>
                                  </div>

                                  {/* Features */}
                                  {features.length > 0 && (
                                    <div className="mb-4 min-h-[48px]">
                                      <div className="flex flex-wrap gap-2">
                                        {features.map((feature, idx) => (
                                          <span
                                            key={idx}
                                            className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap"
                                          >
                                            {feature}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Precio y CTA */}
                                  <div className="mt-auto pt-4 border-t border-slate-100">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
                                          {product.price || 'Consultar'}
                                        </span>
                                        {(product.oldPrice || product.discount) && (
                                          <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-400 line-through">
                                              ${product.oldPrice}
                                            </span>
                                            {product.discount && (
                                              <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                                                -{product.discount}%
                                              </span>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                      <span className={`
                                        inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                                        transition-all duration-300 border backdrop-blur-sm min-w-[120px] justify-center
                                        ${isOnSale
                                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent'
                                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                                        }
                                      `}>
                                        Ver detalles
                                        <svg className={`w-3 h-3 transition-transform group-hover:translate-x-1`}
                                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* Badge de categoría */}
                                {(product.category || product.subcategory) && (
                                  <div className="absolute top-3 right-3">
                                    <span className={`
                                      px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border whitespace-nowrap
                                      ${getCategoryColor(product)}
                                    `}>
                                      {product.subcategory || product.category}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </Link>
                          </motion.article>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>

                  {/* Paginación */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                      {/* Información de página */}
                      <div className="text-slate-600 text-sm">
                        Página {currentPage} de {totalPages} • 
                        Mostrando {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} de {filteredProducts.length} productos
                      </div>
                      
                      {/* Controles de paginación */}
                      <div className="flex items-center gap-2">
                        {/* Botón anterior */}
                        <button
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            currentPage === 1
                              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          <span className="hidden sm:inline">Anterior</span>
                        </button>

                        {/* Números de página */}
                        <div className="flex items-center gap-1">
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNumber;
                            
                            if (totalPages <= 5) {
                              pageNumber = i + 1;
                            } else if (currentPage <= 3) {
                              pageNumber = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNumber = totalPages - 4 + i;
                            } else {
                              pageNumber = currentPage - 2 + i;
                            }

                            return (
                              <button
                                key={pageNumber}
                                onClick={() => paginate(pageNumber)}
                                className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all duration-300 ${
                                  currentPage === pageNumber
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                                }`}
                              >
                                {pageNumber}
                              </button>
                            );
                          })}

                          {/* Puntos suspensivos si hay muchas páginas */}
                          {totalPages > 5 && currentPage < totalPages - 2 && (
                            <>
                              <span className="text-slate-400 px-2">...</span>
                              <button
                                onClick={() => paginate(totalPages)}
                                className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all duration-300 ${
                                  currentPage === totalPages
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                                }`}
                              >
                                {totalPages}
                              </button>
                            </>
                          )}
                        </div>

                        {/* Botón siguiente */}
                        <button
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            currentPage === totalPages
                              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                          }`}
                        >
                          <span className="hidden sm:inline">Siguiente</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Selector de página */}
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600 text-sm hidden md:inline">Ir a página:</span>
                        <select
                          value={currentPage}
                          onChange={(e) => paginate(Number(e.target.value))}
                          className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          {Array.from({ length: totalPages }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Empty State */
                <div className="text-center py-16">
                  <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-slate-50 to-orange-50 backdrop-blur-lg rounded-2xl px-8 py-12 border border-slate-200 max-w-md mx-auto">
                    <div className="text-5xl">
                      {filter === 'ofertas' ? '🎁' : '📦'}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-700 mb-2">
                        {filter === 'ofertas' ? 'No hay ofertas disponibles' : 'No hay productos disponibles'}
                      </h3>
                      <p className="text-slate-600 mb-6">
                        {filter === 'ofertas' 
                          ? 'Pronto tendremos nuevas ofertas para ti' 
                          : 'Estamos actualizando nuestro catálogo'
                        }
                      </p>
                      {filter === 'ofertas' && (
                        <button
                          onClick={() => handleFilterChange('all')}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-medium px-6 py-3 rounded-lg hover:scale-105 transition-all"
                        >
                          Ver todos los productos
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-white to-slate-50 rounded-2xl p-8 border border-slate-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                ¿Necesitas algo específico?
              </h3>
              <p className="text-slate-600 mb-6">
                Si no encuentras lo que buscas, contáctanos para un presupuesto personalizado
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Solicitar Presupuesto
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-white to-slate-50 text-slate-700 font-semibold px-8 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 border border-slate-200"
                >
                  Volver al Inicio
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Ofertas;