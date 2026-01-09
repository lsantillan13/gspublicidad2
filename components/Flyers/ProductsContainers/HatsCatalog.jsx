import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Geder from '../../Geder';
import Footer from '../../Footer';

// Componente de Skeleton Loading con altura fija
const ProductCardSkeleton = () => (
  <div className="group flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 animate-pulse h-[420px]">
    <div className="w-full h-56 bg-gradient-to-br from-slate-200 to-slate-300"></div>
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

const HatsCatalog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Categorías disponibles con mapeo a subcategorías de la API
  const categories = [
    { 
      id: 'todos', 
      name: 'Todo', 
      icon: '', 
      color: 'from-cyan-500 to-blue-500',
      subcategories: []
    },
    { 
      id: 'gorros', 
      name: 'Gorros', 
      icon: '🧢', 
      color: 'from-cyan-500 to-blue-500',
      subcategories: ['Gorros', 'Gorras', 'Chorritos', 'Gorras Trucker']
    },
    { 
      id: 'pilusos', 
      name: 'Pilusos', 
      icon: '🧵', 
      color: 'from-emerald-500 to-green-500',
      subcategories: ['Pilusos']
    },
    { 
      id: 'sombreros', 
      name: 'Sombreros', 
      icon: '🎩', 
      color: 'from-amber-500 to-orange-500',
      subcategories: ['Sombreros de paja', 'Sombreros Panama']
    },
  ];

  // Mapeo de categorías de la API a nuestras categorías del catálogo
  const categoryMapping = {
    'gorros': ['Chorritos', 'Gorros', 'Gorras'],
    'pilusos': ['Pilusos'],
    'sombreros': ['Sombreros de paja', 'Sombreros Panama']
  };

  // Obtener categoría de la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('categoria') || 'gorros';
    
    // Validar que la categoría sea válida
    const validCategory = categories.find(cat => cat.id === categoryParam) 
      ? categoryParam 
      : 'gorros';
    
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
        
        // Usar datos de ejemplo si hay error
        setProducts([
          {
            _id: '1',
            name: 'Gorro Beanie Premium',
            description: 'Material suave y cálido, ideal para invierno',
            price: '$299',
            imageUrl: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&auto=format&fit=crop',
            subcategory: 'Gorros'
          },
          {
            _id: '2',
            name: 'Piluso Casual',
            description: 'Estilo deportivo y moderno',
            price: '$249',
            imageUrl: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&auto=format&fit=crop',
            subcategory: 'Pilusos'
          },
          {
            _id: '3',
            name: 'Sombrero Fedora',
            description: 'Elegancia y estilo clásico',
            price: '$399',
            imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop',
            subcategory: 'Sombreros'
          },
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
      if (selectedCategory === 'todos') {
        // Mostrar todos los productos de gorros, pilusos y sombreros
        const allSubcategories = [
          ...categoryMapping.gorros,
          ...categoryMapping.pilusos,
          ...categoryMapping.sombreros
        ];
        const filtered = products.filter(product => 
          allSubcategories.includes(product.subcategory)
        );
        setFilteredProducts(filtered);
      } else {
        // Filtrar por subcategorías específicas
        const subcategories = categoryMapping[selectedCategory] || [];
        const filtered = products.filter(product => 
          subcategories.includes(product.subcategory)
        );
        setFilteredProducts(filtered);
      }
    }
  }, [products, selectedCategory]);

  // Obtener información de la categoría actual
  const currentCategory = useMemo(() => {
    return categories.find(cat => cat.id === selectedCategory) || categories[0];
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    navigate(`/catalogo/gorras?categoria=${categoryId}`);
  };

  // Determinar color de categoría para badge
  const getCategoryColor = (subcategory) => {
    if (categoryMapping.gorros.includes(subcategory)) {
      return 'bg-cyan-100 text-cyan-700';
    } else if (categoryMapping.pilusos.includes(subcategory)) {
      return 'bg-emerald-100 text-emerald-700';
    } else if (categoryMapping.sombreros.includes(subcategory)) {
      return 'bg-amber-100 text-amber-700';
    } else {
      return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <section>
      <Geder />
      
      <section className="bg-gradient-to-br from-slate-50 to-white block">
        <div className="bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 lg:py-20 top-16 relative">
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
                      Volver
                    </Link>
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl  ${selectedCategory === 'gorros' ? 'text-cyan-600' : 
                        selectedCategory === 'pilusos' ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {currentCategory.icon}
                      </span>
                      <span className="flex text-slate-600 font-medium ">
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
                    Descubre nuestra colección exclusiva de {currentCategory.name.toLowerCase()} de alta calidad
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
                  <div className="text-5xl">🧢</div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">No hay productos en esta categoría</h3>
                    <p className="text-slate-600 mb-6">Prueba seleccionando otra categoría</p>
                    <button
                      onClick={() => navigate('/catalogo/gorras/selector')}
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
                      className="group h-full"
                    >
                      <Link
                        to={`/producto/${product._id}`}
                        className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:rounded-2xl"
                      >
                        <div className={`
                          relative flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden 
                          border border-slate-200 transition-all duration-300 h-full min-h-[420px]
                          ${hoveredProduct === product._id 
                            ? 'shadow-xl shadow-blue-500/10 border-blue-200' 
                            : 'shadow-sm hover:shadow-md'
                          }
                        `}>
                          {/* Imagen del Producto - Altura fija */}
                          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                            <img
                              src={product.imageUrl || product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&auto=format&fit=crop';
                              }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent
                              transition-opacity duration-300 ${hoveredProduct === product._id ? 'opacity-100' : 'opacity-0'}`}
                            />
                          </div>

                          {/* Contenido - Altura fija con flex-grow para mantener consistencia */}
                          <div className="p-5 sm:p-6 flex flex-col flex-grow">
                            <div className="mb-4">
                              <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 min-h-[56px]">
                                {product.name}
                              </h3>
                              <p className="text-slate-600 text-sm line-clamp-3 min-h-[60px]">
                                {product.description || 'Producto de alta calidad'}
                              </p>
                            </div>

                            {/* Precio - Fijo en la parte inferior */}
                            <div className="mt-auto pt-4 border-t border-slate-100">
                              <div className="flex items-center justify-between">
                                <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
                                  {product.price || 'Consultar'}
                                </span>
                                <span className={`
                                  inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                                  transition-all duration-300 min-w-[120px] justify-center
                                  ${hoveredProduct === product._id
                                    ? `bg-gradient-to-r ${currentCategory.color} text-white`
                                    : 'bg-slate-100 text-slate-700'
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

                          {/* Categoría Badge */}
                          {product.subcategory && (
                            <div className="absolute top-3 right-3">
                              <span className={`
                                px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm whitespace-nowrap
                                ${getCategoryColor(product.subcategory)}
                              `}>
                                {product.subcategory}
                              </span>
                            </div>
                          )}
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
                  Todos nuestros productos pueden ser personalizados con tu logo o diseño
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Solicitar Presupuesto Personalizado
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
<section className="mt-12">
        <Footer/>
</section>
</section>
  );
};

export default HatsCatalog;