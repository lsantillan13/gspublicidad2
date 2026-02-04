import { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Geder from './../Geder.jsx'

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

const RegalosEmpresarialesCatalogo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  
  // Referencia para la sección de productos
  const productsSectionRef = useRef(null);

  // Subcategorías específicas para Regalos Empresariales
  const SUBCATEGORIES = [
    { 
      id: 'todos', 
      name: 'Todos los Productos', 
      icon: '🎁', 
      color: 'from-emerald-500 to-green-500',
      keywords: ['REGALERIA EMPRESARIAL', 'regalos-empresariales']
    },
    { 
      id: 'termos-jarros', 
      name: 'Termos y Jarros', 
      icon: '🥤', 
      color: 'from-blue-500 to-cyan-500',
      keywords: ['Termos y jarras', 'Termos y jarros', 'jarro', 'termo']
    },
    { 
      id: 'botellas-tazas', 
      name: 'Botellas y Tazas', 
      icon: '🍶', 
      color: 'from-purple-500 to-pink-500',
      keywords: ['Botellas y tazas', 'botella', 'taza', 'vaso']
    },
    { 
      id: 'asado-mate', 
      name: 'Asado y Mate', 
      icon: '🍖', 
      color: 'from-orange-500 to-amber-500',
      keywords: ['Asado y mate', 'mate', 'asado']
    },
    { 
      id: 'mochilas-marroquineria', 
      name: 'Mochilas y Marroquinería', 
      icon: '🎒', 
      color: 'from-indigo-500 to-violet-500',
      keywords: ['Mochilas y marroquinería', 'mochila', 'bolso']
    },
    { 
      id: 'tecnologia', 
      name: 'Tecnología', 
      icon: '💻', 
      color: 'from-gray-500 to-slate-500',
      keywords: ['Tecnologia', 'tecnología', 'gadget']
    },
    { 
      id: 'boligrafos', 
      name: 'Bolígrafos', 
      icon: '✒️', 
      color: 'from-red-500 to-rose-500',
      keywords: ['Bolígrafos', 'boligrafo', 'lapicera']
    },
    { 
      id: 'trofeos-placas', 
      name: 'Trofeos y Placas', 
      icon: '🏆', 
      color: 'from-yellow-500 to-amber-500',
      keywords: ['Trofeos y placas', 'trofeo', 'placa']
    },
    { 
      id: 'medallas-pins', 
      name: 'Medallas y Pins', 
      icon: '🎖️', 
      color: 'from-cyan-500 to-blue-500',
      keywords: ['Medallas - pins', 'medalla', 'pin']
    },
    { 
      id: 'congresos-oficina', 
      name: 'Congresos y Oficina', 
      icon: '🏢', 
      color: 'from-slate-500 to-gray-500',
      keywords: ['Congresos y oficina', 'oficina', 'congreso']
    },
    { 
      id: 'playa-tiempo-libre', 
      name: 'Playa y Tiempo Libre', 
      icon: '🏖️', 
      color: 'from-sky-500 to-blue-400',
      keywords: ['Playa y tiempo libre', 'playa', 'tiempo libre']
    },
    { 
      id: 'bolsos-petroleros', 
      name: 'Bolsos Petroleros', 
      icon: '🛢️', 
      color: 'from-black to-gray-700',
      keywords: ['Bolsos petroleros', 'petrolero']
    },
  ];

  // Obtener subcategoría de la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subcategoryParam = params.get('subcategoria') || 'todos';
    setSelectedSubcategory(subcategoryParam);
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

  // Filtrar productos por subcategoría
  useEffect(() => {
    if (products.length > 0 && selectedSubcategory) {
      if (selectedSubcategory === 'todos') {
        // Mostrar todos los productos de regalería empresarial
        const filtered = products.filter(product => 
          product.category?.toUpperCase() === 'REGALERIA EMPRESARIAL' ||
          (product.featuredIn && product.featuredIn.includes('regalos-empresariales'))
        );
        setFilteredProducts(filtered);
      } else {
        const subcategoryConfig = SUBCATEGORIES.find(s => s.id === selectedSubcategory);
        if (subcategoryConfig) {
          const filtered = products.filter(product => {
            // Primero verificar categoría
            if (product.category?.toUpperCase() !== 'REGALERIA EMPRESARIAL' && 
                !(product.featuredIn && product.featuredIn.includes('regalos-empresariales'))) {
              return false;
            }
            
            // Luego verificar subcategoría por keywords
            const productSubcategory = product.subcategory?.toLowerCase() || '';
            const productName = product.name?.toLowerCase() || '';
            
            return subcategoryConfig.keywords.some(keyword => 
              productSubcategory.includes(keyword.toLowerCase()) ||
              productName.includes(keyword.toLowerCase())
            );
          });
          setFilteredProducts(filtered);
        }
      }
    }
  }, [products, selectedSubcategory]);

  // Calcular paginación
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Cambiar página con scroll suave
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    
    // Scroll suave hacia la sección de productos
    setTimeout(() => {
      if (productsSectionRef.current) {
        const yOffset = -100; // Ajuste para el header fijo
        const y = productsSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  // Obtener información de la subcategoría actual
  const currentSubcategory = useMemo(() => {
    const subcategory = SUBCATEGORIES.find(s => s.id === selectedSubcategory) || SUBCATEGORIES[0];
    return subcategory;
  }, [selectedSubcategory]);

  const handleSubcategoryChange = (subcategoryId) => {
    navigate(`/regaleria-empresarial?subcategoria=${subcategoryId}`);
    setCurrentPage(1); // Resetear a página 1
  };

  // Obtener color de categoría para el badge
  const getCategoryColor = (product) => {
    // Determinar color basado en subcategoría
    const productSubcategory = product.subcategory?.toLowerCase() || '';
    
    for (const subcategory of SUBCATEGORIES) {
      if (subcategory.keywords.some(keyword => 
        productSubcategory.includes(keyword.toLowerCase()) ||
        product.name?.toLowerCase().includes(keyword.toLowerCase())
      )) {
        const colorClass = subcategory.color.replace('from-', 'bg-').replace(' to-', '-');
        return `${colorClass.replace('from-', 'bg-').split(' ')[0]}-100 text-${colorClass.split('-')[1]}-700 border-${colorClass.split('-')[1]}-200`;
      }
    }
    
    return 'bg-emerald-100 text-emerald-700 border-emerald-200';
  };

  // Extraer características del producto
  const extractFeatures = (description) => {
    if (!description) return [];
    
    const features = [];
    const desc = description.toLowerCase();
    
    if (desc.includes('impermeable')) features.push('Impermeable');
    if (desc.includes('termo') || desc.includes('térmico')) features.push('Térmico');
    if (desc.includes('personaliz')) features.push('Personalizable');
    if (desc.includes('premium')) features.push('Premium');
    if (desc.includes('calidad')) features.push('Alta calidad');
    if (desc.includes('acero')) features.push('Acero inoxidable');
    if (desc.includes('import')) features.push('Importado');
    if (desc.includes('ecológico')) features.push('Ecológico');
    
    return features.slice(0, 3);
  };

  return (
    <>
      <Geder />
      
      <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 py-12 sm:py-16 lg:py-20 top-16 relative">
          {/* Header con Categoría */}
          <div className="bg-gradient-to-r from-white to-emerald-50 border-b border-emerald-200">
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
                      className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Volver al Inicio
                    </Link>
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">
                        {currentSubcategory.icon}
                      </span>
                      <span className="flex text-slate-600 font-medium">
                        Regalos Empresariales
                        <h1 className="flex ml-1 text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800">
                          <i className={`not-italic bg-gradient-to-r ${currentSubcategory.color} bg-clip-text text-transparent`}>
                            {currentSubcategory.name}
                          </i>
                        </h1>
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 mt-2 max-w-2xl">
                    Catálogo completo de {currentSubcategory.name.toLowerCase()} para empresas. 
                    Productos premium personalizables para fidelización de clientes y reconocimiento corporativo.
                  </p>
                </div>

                {/* Contador de productos */}
                <div className="bg-white/80 backdrop-blur-lg rounded-xl px-6 py-4 border border-emerald-200 shadow-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">{filteredProducts.length}</div>
                    <div className="text-sm text-slate-600">Productos disponibles</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Filtros de Subcategoría */}
          <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-wrap gap-3">
                {SUBCATEGORIES.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => handleSubcategoryChange(subcategory.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap
                      ${selectedSubcategory === subcategory.id
                        ? `bg-gradient-to-r ${subcategory.color} text-white shadow-lg`
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                      }
                    `}
                  >
                    <span className="text-lg">{subcategory.icon}</span>
                    <span>{subcategory.name}</span>
                    {selectedSubcategory === subcategory.id && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Referencia para el scroll */}
          <div ref={productsSectionRef} className="scroll-mt-32"></div>

          {/* Contenido Principal */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Grid de Productos */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {Array(productsPerPage).fill().map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
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
                <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-slate-50 to-emerald-50 backdrop-blur-lg rounded-2xl px-8 py-12 border border-slate-200 max-w-md mx-auto">
                  <div className="text-5xl">{currentSubcategory.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">
                      No hay productos en esta subcategoría
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Prueba seleccionando otra subcategoría o vuelve más tarde
                    </p>
                    <button
                      onClick={() => handleSubcategoryChange('todos')}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-medium px-6 py-3 rounded-lg hover:scale-105 transition-all"
                    >
                      Ver todos los productos
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                    key={`products-grid-${currentPage}-${selectedSubcategory}`}
                  >
                    {currentProducts.map((product, index) => {
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
                            className="block h-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:rounded-2xl"
                          >
                            <div className={`
                              relative flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden 
                              border border-slate-200 transition-all duration-300 h-full min-h-[460px]
                              ${hoveredProduct === product._id 
                                ? 'shadow-xl shadow-emerald-500/10 border-emerald-200' 
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
                                    e.target.src = 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=400&auto=format&fit=crop';
                                  }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent
                                  transition-opacity duration-300 ${hoveredProduct === product._id ? 'opacity-100' : 'opacity-0'}`}
                                />
                                
                                {/* Badge de Regalos Empresariales */}
                                <div className="absolute top-3 left-3">
                                  <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    EMPRESARIAL
                                  </span>
                                </div>
                              </div>

                              {/* Contenido */}
                              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 min-h-[56px]">
                                    {product.name}
                                  </h3>
                                  <p className="text-slate-600 text-sm line-clamp-3 min-h-[60px] mb-3">
                                    {product.description || 'Producto empresarial de alta calidad'}
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
                                        ? `bg-gradient-to-r ${currentSubcategory.color} text-white border-transparent`
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

                              {/* Badge de subcategoría */}
                              {product.subcategory && (
                                <div className="absolute top-3 right-3">
                                  <span className={`
                                    px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border whitespace-nowrap
                                    ${getCategoryColor(product)}
                                  `}>
                                    {product.subcategory}
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
                                  ? `bg-gradient-to-r ${currentSubcategory.color} text-white shadow-lg`
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
                                  ? `bg-gradient-to-r ${currentSubcategory.color} text-white shadow-lg`
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
                        className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
            )}

            {/* CTA Final */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-white to-emerald-50 rounded-2xl p-8 border border-emerald-200 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  ¿Necesitas personalización corporativa?
                </h3>
                <p className="text-slate-600 mb-6">
                  Todos nuestros productos empresariales pueden ser personalizados con el logo de tu empresa, 
                  colores corporativos y packaging exclusivo.
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

export default RegalosEmpresarialesCatalogo;