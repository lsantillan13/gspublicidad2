import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Componente de Skeleton Loading
const ProductCardSkeleton = () => (
  <div className="group flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 animate-pulse h-[420px]">
    <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300"></div>
    <div className="p-6 space-y-3 flex flex-col flex-grow">
      <div className="h-6 bg-gradient-to-r from-slate-300 to-slate-400 rounded w-3/4"></div>
      <div className="h-4 bg-gradient-to-r from-slate-300/70 to-slate-400/70 rounded w-full"></div>
      <div className="h-4 bg-gradient-to-r from-slate-300/70 to-slate-400/70 rounded w-5/6"></div>
      <div className="mt-auto pt-4">
        <div className="h-12 bg-gradient-to-r from-slate-300/80 to-slate-400/80 rounded-xl w-full"></div>
      </div>
    </div>
  </div>
);

const BannersCatalog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Categorías disponibles
  const categories = [
    { id: 'todos', name: 'Todo', icon: '📦', color: 'from-slate-500 to-slate-700' },
    { id: 'banderas', name: 'Banderas', icon: '🚩', color: 'from-red-500 to-rose-500' },
    { id: 'sombrillas', name: 'Sombrillas', icon: '☂️', color: 'from-blue-500 to-cyan-500' },
    { id: 'portabanners', name: 'Portabanners', icon: '🖼️', color: 'from-emerald-500 to-green-500' },
    { id: 'flybanners', name: 'Fly Banners', icon: '🪁', color: 'from-purple-500 to-violet-500' },
  ];

  // Obtener categoría de la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('categoria') || 'banderas';
    
    // Validar que la categoría sea válida
    const validCategory = categories.find(cat => cat.id === categoryParam) 
      ? categoryParam 
      : 'banderas';
    
    setSelectedCategory(validCategory);
  }, [location.search]);

  // Fetch de productos
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://gsnode.onrender.com/api/products');
        if (!response.ok) throw new Error('Error al cargar productos');
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.error('Error:', error);
        setError('No se pudieron cargar los productos. Por favor, intente nuevamente.');
        
        // Datos de ejemplo para desarrollo
        setProducts([
          {
            _id: '1',
            name: 'Bandera Publicitaria 3x5m',
            description: 'Material impermeable, impresión full color, mástil incluido',
            price: '$8.990',
            image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&auto=format&fit=crop',
            category: 'banderas',
            features: ['Impermeable', 'UV Resistent', 'Incluye mástil']
          },
          {
            _id: '2',
            name: 'Sombrilla Publicitaria XL',
            description: 'Diámetro 2.5m, estructura metálica, personalización total',
            price: '$12.500',
            image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&auto=format&fit=crop',
            category: 'sombrillas',
            features: ['2.5m diámetro', 'Estructura metal', 'Base estable']
          },
          {
            _id: '3',
            name: 'Portabanner Profesional',
            description: 'Soporte ajustable para banners hasta 2m, fácil transporte',
            price: '$6.800',
            image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&auto=format&fit=crop',
            category: 'portabanners',
            features: ['Ajustable', 'Portátil', 'Montaje rápido']
          },
          {
            _id: '4',
            name: 'Fly Banner Publicitario',
            description: 'Banner volador para eventos, materiales ligeros y resistentes',
            price: '$15.200',
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&auto=format&fit=crop',
            category: 'flybanners',
            features: ['Material ligero', 'Gran visibilidad', 'Control remoto']
          },
          {
            _id: '5',
            name: 'Bandera Corporativa Personalizada',
            description: 'Diseño exclusivo con logo de empresa, alta durabilidad',
            price: '$9.800',
            image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&auto=format&fit=crop',
            category: 'banderas',
            features: ['Personalizable', 'Alta durabilidad', 'Varios tamaños']
          },
          {
            _id: '6',
            name: 'Sombrilla Promocional Plegable',
            description: 'Compacta y portátil, ideal para eventos al aire libre',
            price: '$7.500',
            image: 'https://images.unsplash.com/photo-1584184924103-e310d9dc9f06?w=400&auto=format&fit=crop',
            category: 'sombrillas',
            features: ['Plegable', 'Portátil', 'Resistente']
          },
          {
            _id: '7',
            name: 'Portabanner Doble Cara',
            description: 'Exhibición por ambos lados, ideal para interiores',
            price: '$8.200',
            image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&auto=format&fit=crop',
            category: 'portabanners',
            features: ['Doble cara', 'Estable', 'Fácil almacenaje']
          },
          {
            _id: '8',
            name: 'Fly Banner LED Nocturno',
            description: 'Banner con iluminación LED para visibilidad nocturna',
            price: '$18.500',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop',
            category: 'flybanners',
            features: ['LED integrado', 'Nocturno', 'Batería recargable']
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtrar productos por categoría
  useEffect(() => {
    if (products.length > 0 && selectedCategory) {
      const filtered = products.filter(product => 
        product.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        product.name?.toLowerCase().includes(selectedCategory.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [products, selectedCategory]);

  // Obtener información de la categoría actual
  const currentCategory = useMemo(() => {
    return categories.find(cat => cat.id === selectedCategory) || categories[0];
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    navigate(`/catalogo/banners?categoria=${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header con Categoría */}
      <div className="bg-gradient-to-r from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Link
                  to="/catalogo/banners/selector"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver a categorías
                </Link>
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl ${
                    selectedCategory === 'banderas' ? 'text-red-600' : 
                    selectedCategory === 'sombrillas' ? 'text-blue-600' : 
                    selectedCategory === 'portabanners' ? 'text-emerald-600' : 
                    'text-purple-600'
                  }`}>
                    {currentCategory.icon}
                  </span>
                  <span className="text-slate-600 font-medium">Catálogo de</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800">
                <span className={`bg-gradient-to-r ${currentCategory.color} bg-clip-text text-transparent`}>
                  {currentCategory.name}
                </span>
              </h1>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Descubre nuestra colección exclusiva de {currentCategory.name.toLowerCase()} publicitarios de alta calidad
              </p>
            </div>

            {/* Contador de productos */}
            <div className="bg-white/80 backdrop-blur-lg rounded-xl px-6 py-4 border border-slate-200 shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">{filteredProducts.length}</div>
                <div className="text-sm text-slate-600">Productos disponibles</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filtros de Categoría */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300
                  ${selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                  }
                `}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                {selectedCategory === category.id && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Grid de Productos */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {Array(8).fill().map((_, i) => <ProductCardSkeleton key={i} />)}
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 backdrop-blur-lg rounded-2xl px-8 py-6 border border-red-200 max-w-md mx-auto">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-1">Error al cargar</h3>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-slate-50 to-blue-50 backdrop-blur-lg rounded-2xl px-8 py-12 border border-slate-200 max-w-md mx-auto">
              <div className={`text-5xl ${currentCategory.icon}`}></div>
              <div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No hay productos en esta categoría</h3>
                <p className="text-slate-600 mb-6">Prueba seleccionando otra categoría</p>
                <button
                  onClick={() => navigate('/catalogo/banners/selector')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-medium px-6 py-3 rounded-lg hover:scale-105 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Volver a categorías
                </button>
              </div>
            </div>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.article
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredProduct(product._id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="group"
                >
                  <Link
                    to={`/producto/${product._id}`}
                    className="block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:rounded-2xl"
                  >
                    <div className={`
                      relative flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden 
                      border border-slate-200 transition-all duration-300 h-full min-h-[420px]
                      ${hoveredProduct === product._id 
                        ? 'shadow-xl shadow-blue-500/10 border-blue-200' 
                        : 'shadow-sm hover:shadow-md'
                      }
                    `}>
                      {/* Imagen del Producto */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent
                          transition-opacity duration-300 ${hoveredProduct === product._id ? 'opacity-100' : 'opacity-0'}`}
                        />
                      </div>

                      {/* Contenido */}
                      <div className="p-5 sm:p-6 space-y-4 flex flex-col flex-grow">
                        <div>
                          <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                            {product.description}
                          </p>
                        </div>

                        {/* Features */}
                        {product.features && (
                          <div className="flex flex-wrap gap-2">
                            {product.features.slice(0, 2).map((feature, idx) => (
                              <span
                                key={idx}
                                className={`
                                  px-2 py-1 text-xs font-medium rounded-full
                                  ${product.category === 'banderas' ? 'bg-red-50 text-red-700 border border-red-100' :
                                    product.category === 'sombrillas' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                                    product.category === 'portabanners' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                                    'bg-purple-50 text-purple-700 border border-purple-100'}
                                `}
                              >
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 2 && (
                              <span className="text-slate-500 text-xs">
                                +{product.features.length - 2}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Precio y CTA */}
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
                            {product.price}
                          </span>
                          <span className={`
                            inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                            transition-all duration-300 border backdrop-blur-sm
                            ${hoveredProduct === product._id
                              ? `bg-gradient-to-r ${currentCategory.color} text-white border-transparent`
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                            }
                          `}>
                            Ver detalles
                            <svg className={`w-3 h-3 transition-transform ${hoveredProduct === product._id ? 'translate-x-1' : ''}`}
                              fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Categoría Badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border
                          ${product.category === 'banderas' ? 'bg-red-100 text-red-700 border-red-200' :
                            product.category === 'sombrillas' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                            product.category === 'portabanners' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                            'bg-purple-100 text-purple-700 border-purple-200'}
                        `}>
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
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
              ¿Necesitas personalización?
            </h3>
            <p className="text-slate-600 mb-6">
              Todos nuestros productos pueden ser personalizados con tu logo, diseño o medidas específicas
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Solicitar Presupuesto Personalizado
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                onClick={() => navigate('/catalogo/banners/selector')}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-white to-slate-50 text-slate-700 font-semibold px-8 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 border border-slate-200"
              >
                Ver Otras Categorías
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannersCatalog;