import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ChevronDown,
  Star,
  Palette,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  Download,
  Phone
} from 'lucide-react';
import Geder from '../components/Geder';
import Footer from '../components/Footer';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Mock API fetch - replace with your actual API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  const productData = [
    {
      id: 1,
      name: 'Mameluco Industrial Premium',
      description: 'Resistente gabardina con refuerzos estratégicos, diseñado específicamente para el sector petrolero y industrial. Material ignífugo con costuras reforzadas.',
      category: 'Indumentaria',
      image: 'https://i.postimg.cc/7ZpLzJ5h/image.png',
      price: 'Consultar',
      featured: true,
      premium: true,
      colors: ['#1E3A8A', '#111827', '#374151'],
      features: ['Resistente al fuego', 'Material transpirable', 'Costuras reforzadas'],
      tags: ['industrial', 'premium', 'seguridad']
    },
    {
      id: 2,
      name: 'Campera Trucker Ejecutiva',
      description: 'Jean wash premium con cierre metálico de alta calidad y detalles en cuero genuino. Ideal para branding corporativo y eventos ejecutivos.',
      category: 'Indumentaria',
      image: 'https://i.postimg.cc/XqfRvGLH/70a49122-e1eb-4a13-bebc-597f893d9f35.jpg',
      price: '$89.99',
      featured: true,
      colors: ['#2563EB', '#1E40AF', '#1E3A8A'],
      features: ['Cuero genuino', 'Cierre metálico', 'Personalizable'],
      tags: ['ejecutivo', 'premium', 'corporativo']
    },
    {
      id: 3,
      name: 'Pantalón Táctico Profesional',
      description: 'Ripstop de alta densidad con múltiples bolsillos especializados y sistema de rodilleras integradas. Durabilidad extrema para uso intensivo.',
      category: 'Indumentaria',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$67.50',
      colors: ['#4B5563', '#111827'],
      features: ['Material ripstop', 'Múltiples bolsillos', 'Rodilleras integradas'],
      tags: ['táctico', 'profesional', 'durable']
    },
    {
      id: 4,
      name: 'Valija Ejecutiva Titanium',
      description: 'Policarbonato reforzado con estructura de aluminio, ruedas 360° silenciosas y sistema de seguridad TSA. Elegante y funcional.',
      category: 'Regalería',
      image: 'https://i.postimg.cc/C1BN73fb/image.png',
      price: '$249.99',
      featured: true,
      premium: true,
      colors: ['#1E3A8A', '#000000'],
      features: ['Policarbonato reforzado', 'Ruedas 360°', 'Sistema TSA'],
      tags: ['ejecutivo', 'viaje', 'premium']
    },
    {
      id: 5,
      name: 'Banner Corporativo LED',
      description: 'Lona frontlit de 450gr con tecnología de impresión UV. Terminación termosellada profesional para máxima durabilidad en exteriores.',
      category: 'Cartelería',
      image: 'https://i.postimg.cc/9QSSs9d3/ebe0f8b2-7d00-475c-a206-f3906481ba22.jpg',
      price: 'Consultar',
      colors: ['#2563EB', '#1D4ED8'],
      features: ['Impresión UV', 'Resistente a la intemperie', 'Terminación termosellada'],
      tags: ['corporativo', 'exterior', 'publicidad']
    },
    {
      id: 6,
      name: 'Portafolio Ejecutivo Elite',
      description: 'Cuero genuino de primera calidad con terminación artesanal. Sistema organizativo interior premium y grabado láser personalizado.',
      category: 'Marroquinería',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$189.99',
      featured: true,
      premium: true,
      colors: ['#111827', '#000000'],
      features: ['Cuero genuino', 'Grabado láser', 'Sistema organizativo'],
      tags: ['ejecutivo', 'lujo', 'profesional']
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos los Productos', count: productData.length, icon: '🛍️' },
    { id: 'Indumentaria', name: 'Indumentaria', count: productData.filter(p => p.category === 'Indumentaria').length, icon: '👕' },
    { id: 'Regalería', name: 'Regalería', count: productData.filter(p => p.category === 'Regalería').length, icon: '🎁' },
    { id: 'Cartelería', name: 'Cartelería', count: productData.filter(p => p.category === 'Cartelería').length, icon: '📊' },
    { id: 'Marroquinería', name: 'Marroquinería', count: productData.filter(p => p.category === 'Marroquinería').length, icon: '💼' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => 
      selectedCategory === 'all' || product.category === selectedCategory
    );

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = a.price === 'Consultar' ? Infinity : parseFloat(a.price.replace('$', ''));
          const priceB = b.price === 'Consultar' ? Infinity : parseFloat(b.price.replace('$', ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = a.price === 'Consultar' ? 0 : parseFloat(a.price.replace('$', ''));
          const priceB = b.price === 'Consultar' ? 0 : parseFloat(b.price.replace('$', ''));
          return priceB - priceA;
        });
        break;
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [products, selectedCategory, searchQuery, sortBy]);

  const ProductSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-64 bg-gray-300"></div>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.featured && (
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
              <Star size={12} />
              Destacado
            </span>
          )}
          {product.premium && (
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              ⭐ Premium
            </span>
          )}
        </div>

        {/* Price */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-xl font-bold shadow-lg">
          {product.price}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setSelectedProduct(product)}
            className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 py-2.5 rounded-lg font-semibold text-sm hover:bg-white transition-colors shadow-lg"
          >
            Ver Detalles
          </button>
          <Link
            to="/contacto"
            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2.5 rounded-lg font-semibold text-sm text-center hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg"
          >
            Cotizar
          </Link>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{product.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
            {product.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Color Options */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-2">COLORES:</p>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-lg transition-transform hover:scale-110"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          
          <Link
            to={`/productos/${product.id}`}
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-semibold group/link"
          >
            Más info
            <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );

  const ProductModal = ({ product, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 md:h-full object-cover rounded-l-3xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              ×
            </button>
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              {product.featured && (
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  ⭐ Destacado
                </span>
              )}
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Características principales:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Colores disponibles:</h4>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-900">{product.price}</div>
              <div className="flex gap-3">
                <Link
                  to="/contacto"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg"
                >
                  Solicitar Cotización
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <Geder />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[40vh] pt-52 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Productos{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Premium
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Soluciones de alta gama diseñadas para elevar tu marca y potenciar tu presencia en el mercado
            </p>

          </motion.div>
        </div>
      </section>

      {/* Enhanced Filter & Search Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos, características..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="featured">Destacados</option>
                <option value="name">Nombre A-Z</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-gray-100 rounded-2xl p-1.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
                <span className={`text-sm px-2 py-1 rounded-full ${
                  selectedCategory === category.id 
                    ? 'bg-white/20' 
                    : 'bg-gray-300'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredProducts.length} Productos Encontrados
              </h2>
              <p className="text-gray-600 mt-1">
                {selectedCategory !== 'all' && `en ${categories.find(c => c.id === selectedCategory)?.name}`}
                {searchQuery && ` para "${searchQuery}"`}
              </p>
            </div>
            
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-200 shadow-sm"
            >
              <Download size={20} />
              Descargar Catálogo
            </Link>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-3xl shadow-sm"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600 mb-8">
                  No hay productos que coincidan con tu búsqueda. Intenta con otros filtros o términos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg"
                  >
                    Ver Todos los Productos
                  </button>
                  <Link
                    to="/contacto"
                    className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                  >
                    Solicitar Producto Personalizado
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              layout
              className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1 max-w-4xl mx-auto'
              }`}
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                ¿Necesitas algo{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  exclusivo
                </span>{' '}
                para tu marca?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Diseñamos productos 100% personalizados que reflejen la esencia única de tu empresa. 
                Desde indumentaria técnica hasta regalería corporativa de lujo.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: <Palette className="w-8 h-8" />,
                    title: 'Diseño Personalizado',
                    description: 'Soluciones únicas adaptadas a tu marca'
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: 'Entrega Rápida',
                    description: 'Producción eficiente sin comprometer calidad'
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: 'Garantía Premium',
                    description: 'Calidad asegurada en todos nuestros productos'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  >
                    <div className="text-cyan-400 mb-4">{feature.icon}</div>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Solicitar Cotización Personalizada
                </Link>
                <Link
                  to="/catalogo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Descargar Catálogo Completo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Products;