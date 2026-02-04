import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Geder from '../Geder.jsx';

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

// Mapeo de parámetros URL a categorías de la API
const CATEGORY_MAPPING = {
  // Mapeo principal de categorías
  'indumentaria-deportiva': {
    apiCategory: 'INDUMENTARIA DEPORTIVA',
    name: 'Indumentaria Deportiva',
    icon: '⚽',
    color: 'from-blue-500 to-cyan-500'
  },
  'ropa-de-trabajo': {
    apiCategory: 'ROPA DE TRABAJO',
    name: 'Ropa de Trabajo',
    icon: '👷',
    color: 'from-orange-500 to-amber-500'
  },
  'calzado': {
    apiCategory: 'CALZADO',
    name: 'Calzado',
    icon: '👟',
    color: 'from-gray-500 to-slate-500'
  },
  'indumentaria-urbana': {
    apiCategory: 'INDUMENTARIA URBANA',
    name: 'Indumentaria Urbana',
    icon: '👕',
    color: 'from-purple-500 to-pink-500'
  },
  'indumentaria-premium': {
    apiCategory: 'INDUMENTARIA PREMIUM',
    name: 'Indumentaria Premium',
    icon: '⭐',
    color: 'from-yellow-500 to-amber-500'
  },
  'regaleria-empresarial': {
    apiCategory: 'REGALERIA EMPRESARIAL',
    name: 'Regalería Empresarial',
    icon: '🎁',
    color: 'from-emerald-500 to-green-500'
  },
  'articulos-promocionales': {
    apiCategory: 'ARTICULOS PROMOCIONALES',
    name: 'Artículos Promocionales',
    icon: '🎯',
    color: 'from-red-500 to-rose-500'
  },
  'elementos-de-seguridad': {
    apiCategory: 'ELEMENTOS DE SEGURIDAD',
    name: 'Elementos de Seguridad',
    icon: '🛡️',
    color: 'from-red-600 to-orange-500'
  },
  'hospitalarios-limpieza': {
    apiCategory: 'HOSPITALARIOS Y LIMPIEZA',
    name: 'Hospitalarios y Limpieza',
    icon: '🏥',
    color: 'from-blue-400 to-cyan-400'
  },
  'publicidad-punto-fijo': {
    apiCategory: 'PUBLICIDAD PUNTO FIJO',
    name: 'Publicidad Punto Fijo',
    icon: '📌',
    color: 'from-indigo-500 to-purple-500'
  },
  'cocina': {
    apiCategory: 'COCINA',
    name: 'Cocina',
    icon: '👨‍🍳',
    color: 'from-orange-600 to-red-500'
  },
  'articulos-verano': {
    apiCategory: 'ARTICULOS DE VERANO',
    name: 'Artículos de Verano',
    icon: '☀️',
    color: 'from-yellow-400 to-orange-400'
  },
  'egresados': {
    apiCategory: 'EGRESADOS',
    name: 'Egresados',
    icon: '🎓',
    color: 'from-purple-600 to-pink-600'
  },
  
  // Subcategorías específicas
  'camisetas-shorts': {
    filterFn: (product) => 
      product.subcategory?.toLowerCase().includes('camisetas') || 
      product.subcategory?.toLowerCase().includes('shorts'),
    name: 'Camisetas y Shorts',
    icon: '👕',
    color: 'from-blue-400 to-cyan-400'
  },
  'camperas': {
    filterFn: (product) => product.subcategory?.toLowerCase().includes('campera'),
    name: 'Camperas',
    icon: '🧥',
    color: 'from-gray-600 to-slate-600'
  },
  'remeras': {
    filterFn: (product) => product.subcategory?.toLowerCase().includes('remera'),
    name: 'Remeras',
    icon: '👚',
    color: 'from-red-400 to-pink-400'
  },
  'botellas-tazas': {
    filterFn: (product) => 
      product.subcategory?.toLowerCase().includes('botella') || 
      product.subcategory?.toLowerCase().includes('taza'),
    name: 'Botellas y Tazas',
    icon: '🥤',
    color: 'from-teal-500 to-emerald-500'
  },
  'sombrillas': {
    filterFn: (product) => product.subcategory?.toLowerCase().includes('sombrilla'),
    name: 'Sombrillas',
    icon: '☂️',
    color: 'from-sky-500 to-blue-500'
  },
  // Agrega más mapeos según necesites
};

// Categorías para la navegación
const CATEGORIES = [
  { id: 'indumentaria-deportiva', name: 'Indumentaria Deportiva', icon: '⚽' },
  { id: 'ropa-de-trabajo', name: 'Ropa de Trabajo', icon: '👷' },
  { id: 'calzado', name: 'Calzado', icon: '👟' },
  { id: 'indumentaria-urbana', name: 'Indumentaria Urbana', icon: '👕' },
  { id: 'indumentaria-premium', name: 'Indumentaria Premium', icon: '⭐' },
  { id: 'regaleria-empresarial', name: 'Regalería Empresarial', icon: '🎁' },
  { id: 'articulos-promocionales', name: 'Artículos Promocionales', icon: '🎯' },
  { id: 'elementos-de-seguridad', name: 'Elementos de Seguridad', icon: '🛡️' },
  { id: 'hospitalarios-limpieza', name: 'Hospitalarios y Limpieza', icon: '🏥' },
  { id: 'publicidad-punto-fijo', name: 'Publicidad Punto Fijo', icon: '📌' },
  { id: 'cocina', name: 'Cocina', icon: '👨‍🍳' },
  { id: 'articulos-verano', name: 'Artículos de Verano', icon: '☀️' },
  { id: 'egresados', name: 'Egresados', icon: '🎓' },
];

const AllProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Obtener categoría de la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('cat') || '';
    
    // Si hay categoría en la URL, usarla
    if (categoryParam && CATEGORY_MAPPING[categoryParam]) {
      setSelectedCategory(categoryParam);
    } else if (categoryParam) {
      // Si la categoría existe pero no está en el mapeo, usar el valor tal cual
      setSelectedCategory(categoryParam);
    } else {
      // Si no hay categoría, mostrar todas
      setSelectedCategory('todos');
    }
  }, [location.search]);

  // Fetch de productos
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://gserver.zeabur.app/api/products');
        if (!response.ok) throw new Error('Error al cargar productos');
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.error('Error:', error);
        setError('No se pudieron cargar los productos. Por favor, intente nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtrar productos por categoría seleccionada
  useEffect(() => {
    if (products.length > 0 && selectedCategory) {
      if (selectedCategory === 'todos') {
        // Mostrar todos los productos
        setFilteredProducts(products);
      } else {
        const categoryConfig = CATEGORY_MAPPING[selectedCategory];
        
        if (categoryConfig) {
          if (categoryConfig.apiCategory) {
            // Filtrar por categoría principal de la API
            const filtered = products.filter(product => 
              product.category?.toUpperCase() === categoryConfig.apiCategory
            );
            setFilteredProducts(filtered);
          } else if (categoryConfig.filterFn) {
            // Usar función de filtro personalizada
            const filtered = products.filter(categoryConfig.filterFn);
            setFilteredProducts(filtered);
          }
        } else {
          // Si no hay configuración, intentar filtrar por nombre de categoría o subcategoría
          const filtered = products.filter(product => 
            product.category?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            product.subcategory?.toLowerCase().includes(selectedCategory.toLowerCase())
          );
          setFilteredProducts(filtered);
        }
      }
    }
  }, [products, selectedCategory]);

  // Obtener información de la categoría actual
  const currentCategory = useMemo(() => {
    if (selectedCategory === 'todos') {
      return {
        name: 'Todos los Productos',
        icon: '📦',
        color: 'from-slate-500 to-gray-600'
      };
    }
    
    const categoryConfig = CATEGORY_MAPPING[selectedCategory];
    if (categoryConfig) {
      return {
        name: categoryConfig.name,
        icon: categoryConfig.icon || '📦',
        color: categoryConfig.color || 'from-slate-500 to-gray-600'
      };
    }
    
    // Si no está en el mapeo, usar el valor tal cual
    return {
      name: selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1),
      icon: '📦',
      color: 'from-slate-500 to-gray-600'
    };
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === 'todos') {
      navigate('/all-products');
    } else {
      navigate(`/all-products?cat=${categoryId}`);
    }
  };

  // Obtener color de categoría para el badge
  const getCategoryColor = (product) => {
    const category = product.category?.toUpperCase();
    
    // Mapear colores por categoría principal
    const colorMap = {
      'INDUMENTARIA DEPORTIVA': 'bg-blue-100 text-blue-700 border-blue-200',
      'ROPA DE TRABAJO': 'bg-orange-100 text-orange-700 border-orange-200',
      'EGRESADOS': 'bg-purple-100 text-purple-700 border-purple-200',
      'INDUMENTARIA URBANA': 'bg-purple-100 text-purple-700 border-purple-200',
      'INDUMENTARIA PREMIUM': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'REGALERIA EMPRESARIAL': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'ARTICULOS PROMOCIONALES': 'bg-red-100 text-red-700 border-red-200',
      'ARTICULOS DE VERANO': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'ELEMENTOS DE SEGURIDAD': 'bg-red-100 text-red-700 border-red-200',
      'HOSPITALARIOS Y LIMPIEZA': 'bg-blue-100 text-blue-700 border-blue-200',
      'PUBLICIDAD PUNTO FIJO': 'bg-indigo-100 text-indigo-700 border-indigo-200',
      'COCINA': 'bg-orange-100 text-orange-700 border-orange-200',
      'CALZADO': 'bg-gray-100 text-gray-700 border-gray-200',
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
    
    return features.slice(0, 3);
  };

  return (
    <>
      <Geder />
      
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white block">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 lg:py-20 top-16 relative">
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
                      to="/"
                      className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Volver al Inicio
                    </Link>
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">
                        {currentCategory.icon}
                      </span>
                      <span className="flex text-slate-600 font-medium">
                        Catálogo de
                        <h1 className="flex ml-1 text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800">
                          <i className={`not-italic bg-gradient-to-r ${currentCategory.color} bg-clip-text text-transparent`}>
                            {currentCategory.name}
                          </i>
                        </h1>
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 mt-2 max-w-2xl">
                    Descubre nuestra colección exclusiva de {currentCategory.name.toLowerCase()}. 
                    {selectedCategory !== 'todos' && ' Productos de alta calidad y durabilidad.'}
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
                {/* Botón "Todos" */}
                <button
                  onClick={() => handleCategoryChange('todos')}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300
                    ${selectedCategory === 'todos'
                      ? 'bg-gradient-to-r from-slate-500 to-gray-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                    }
                  `}
                >
                  <span className="text-lg">📦</span>
                  <span>Todos</span>
                  {selectedCategory === 'todos' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                
                {/* Botones de categorías principales */}
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300
                      ${selectedCategory === category.id
                        ? `bg-gradient-to-r ${CATEGORY_MAPPING[category.id]?.color || 'from-slate-500 to-gray-600'} text-white shadow-lg`
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
                  <div className="text-5xl">{currentCategory.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">
                      No hay productos en esta categoría
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Prueba seleccionando otra categoría o vuelve más tarde
                    </p>
                    <button
                      onClick={() => handleCategoryChange('todos')}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-medium px-6 py-3 rounded-lg hover:scale-105 transition-all"
                    >
                      Ver todos los productos
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
                  {filteredProducts.map((product, index) => {
                    const features = extractFeatures(product.description);
                    
                    return (
                      <motion.article
                        key={product._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        onMouseEnter={() => setHoveredProduct(product._id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        className="group h-full"
                      >
                        <Link
                          to={`/producto/${product._id}`}
                          className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:rounded-2xl"
                        >
                          <div className={`
                            relative flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden 
                            border border-slate-200 transition-all duration-300 h-full min-h-[460px]
                            ${hoveredProduct === product._id 
                              ? 'shadow-xl shadow-blue-500/10 border-blue-200' 
                              : 'shadow-sm hover:shadow-md'
                            }
                          `}>
                            {/* Imagen del Producto */}
                            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                              <img
                                src={product.imageUrl || product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&auto=format&fit=crop';
                                }}
                              />
                              <div className={`absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent
                                transition-opacity duration-300 ${hoveredProduct === product._id ? 'opacity-100' : 'opacity-0'}`}
                              />
                            </div>

                            {/* Contenido */}
                            <div className="p-5 sm:p-6 flex flex-col flex-grow">
                              <div className="mb-4">
                                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 min-h-[56px]">
                                  {product.name}
                                </h3>
                                <p className="text-slate-600 text-sm line-clamp-3 min-h-[60px] mb-3">
                                  {product.description || 'Producto de alta calidad'}
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
                                  <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
                                    {product.price || 'Consultar'}
                                  </span>
                                  <span className={`
                                    inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                                    transition-all duration-300 border backdrop-blur-sm min-w-[120px] justify-center
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
                            </div>

                            {/* Badge de categoría */}
                            {(product.category || product.subcategory) && (
                              <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                                {product.subcategory && (
                                  <span className={`
                                    px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border whitespace-nowrap max-w-[200px] truncate
                                    ${getCategoryColor(product)}
                                  `}>
                                    {product.subcategory}
                                  </span>
                                )}
                                {product.category && !product.subcategory && (
                                  <span className={`
                                    px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border whitespace-nowrap
                                    ${getCategoryColor(product)}
                                  `}>
                                    {product.category}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </Link>
                      </motion.article>
                    );
                  })}
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
        </div>
      </section>
    </>
  );
};

export default AllProducts;