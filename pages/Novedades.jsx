import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Geder from '../components/Geder';

const Ofertas = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [filter, setFilter] = useState('all'); // Filtro para productos en oferta

  // Datos para el banner hero específico de ofertas
  const bannerSlides = [
    {
      id: 1,
      title: "Ofertas Especiales",
      subtitle: "Hasta 50% de descuento en productos seleccionados",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&h=600&fit=crop",
      cta: "Ver Ofertas",
      link: "/ofertas",
      bgGradient: "from-orange-500/20 to-red-600/20"
    },
    {
      id: 2,
      title: "Liquidación de Temporada",
      subtitle: "Aprovecha los mejores precios antes que se agoten",
      image: "https://images.unsplash.com/photo-1608190003443-86ab6a3b2d65?w=1200&h=600&fit=crop",
      cta: "Comprar Ahora",
      link: "/ofertas",
      bgGradient: "from-red-500/20 to-pink-600/20"
    },
    {
      id: 3,
      title: "Descuentos Exclusivos",
      subtitle: "Precios especiales para clientes empresariales",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
      cta: "Solicitar Cotización",
      link: "/contacto",
      bgGradient: "from-purple-500/20 to-indigo-600/20"
    }
  ];

  // Fetch de TODOS los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://gsnode.onrender.com/api/products');
        
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
        product.isOnSale
      );
    }
    return products; // Mostrar TODOS los productos
  }, [products, filter]);

  // Manejo de clic en indicadores del banner
  const goToSlide = (index) => {
    setCurrentBanner(index);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error al cargar productos</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className='container-xl'>
      <Geder />
    <section className="min-h-screen bg-gradient-to-br from-orange-50 py-16 md:py-32 relative via-white to-red-50">
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-orange-200 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-700 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Catálogo Completo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Todas las Ofertas
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
            Explora nuestro catálogo completo de productos promocionales
          </p>

          {/* Filtros */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 border border-orange-200 shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === 'all' 
                    ? 'bg-orange-500 text-white shadow-md' 
                    : 'text-slate-600 hover:text-orange-600'
                }`}
              >
                Todos los Productos
              </button>
              <button
                onClick={() => setFilter('ofertas')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === 'ofertas' 
                    ? 'bg-red-500 text-white shadow-md' 
                    : 'text-slate-600 hover:text-red-600'
                }`}
              >
                Solo Ofertas
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(12).fill().map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-lg animate-pulse">
                <div className="w-full h-48 bg-gray-300 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2 mb-3"></div>
                <div className="h-10 bg-gray-300 rounded-xl"></div>
              </div>
            ))}
          </div>
        )}

        {/* Products Grid - TODOS los productos */}
        {!loading && filteredProducts.length > 0 && (
          <>
            <div className="mb-6 text-slate-600">
              Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
              {filter === 'ofertas' && ' en oferta'}
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product) => {
                const hasDiscount = product.onSale || product.discount || product.oldPrice;
                const discountPercent = product.discount || 
                  (product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null);

                return (
                  <article 
                    key={product._id || product.id}
                    className="group bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105"
                  >
                    {/* Imagen del producto */}
                    <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <img 
                        src={product.imageUrl || product.images?.[0] || '/placeholder-product.jpg'}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Overlay en hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {hasDiscount && (
                          <span className="bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                            -{discountPercent}%
                          </span>
                        )}
                        <span className="bg-orange-500/90 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                          OFERTA
                        </span>
                      </div>
                    </div>
                    
                    {/* Contenido */}
                    <div className="p-4 sm:p-6 space-y-3">
                      <h3 className="font-bold text-slate-800 text-base sm:text-lg leading-tight line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                        {product.description || 'Producto promocional de alta calidad'}
                      </p>

                      {/* Precio */}
                      {/* <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-red-600">
                            ${product.price || 'Consultar'}
                          </span>
                          {product.oldPrice && (
                            <span className="text-sm text-slate-400 line-through">
                              ${product.oldPrice}
                            </span>
                          )}
                        </div>
                        {product.stock && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            product.stock > 10 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {product.stock} en stock
                          </span>
                        )}
                      </div> */}

                      {/* CTA Button */}
                      <Link
                        to={`/producto/${product._id || product.id}`}
                        className="block w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-center font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:shadow-lg border border-orange-600"
                      >
                        Ver Detalles
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}

        {/* Empty State */}
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">
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
                onClick={() => setFilter('all')}
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Ver Todos los Productos
              </button>
            )}
          </div>
        )}
      </div>
    </section>
    </section>
  );
};

export default Ofertas;