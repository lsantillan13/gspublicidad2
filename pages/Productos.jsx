import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Geder from '../components/Geder';
import Footer from '../components/Footer';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Hero background image with blur effect
  const heroBg = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80";

  // Product data with high-quality images
  const productData = useMemo(() => [
    {
      id: 1,
      name: 'Mameluco Industrial',
      description: 'Resistente gabardina con refuerzos, ideal para sector petrolero. Personalizable con tu logo bordado o estampado.',
      category: 'Indumentaria',
      image: 'https://i.postimg.cc/7ZpLzJ5h/image.png',
      price: 'Consultar',
      featured: true,
      colors: ['#1E3A8A', '#111827', '#374151']
    },
    {
      id: 2,
      name: 'Campera Trucker Premium',
      description: 'Jean wash con cierre metálico y detalles en cuero. Ideal para branding corporativo.',
      category: 'Indumentaria',
      image: 'https://i.postimg.cc/XqfRvGLH/70a49122-e1eb-4a13-bebc-597f893d9f35.jpg',
      price: 'Consultar',
      featured: true,
      colors: ['#2563EB', '#1E40AF', '#1E3A8A']
    },
    {
      id: 3,
      name: 'Pantalón Táctico',
      description: 'Ripstop con múltiples bolsillos y rodilleras integradas. Alta durabilidad.',
      category: 'Indumentaria',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 'Consultar',
      colors: ['#4B5563', '#111827']
    },
    {
      id: 4,
      name: 'Valija Ejecutiva',
      description: 'Policarbonato reforzado con ruedas 360° y sistema TSA. Grabado láser para tu logo.',
      category: 'Regalería',
      image: 'https://i.postimg.cc/C1BN73fb/image.png',
      price: 'Consultar',
      featured: true,
      colors: ['#1E3A8A', '#000000']
    },
    // {
    //   id: 5,
    //   name: 'Set Corporativo Premium',
    //   description: 'Taza cerámica + lapicera + cuaderno con estampado a todo color de tu marca.',
    //   category: 'Regalería',
    //   image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    //   price: 'Consultar',
    //   colors: ['#FFFFFF', '#F3F4F6']
    // },
    {
      id: 6,
      name: 'Banner Corporativo',
      description: 'Lona frontlit de 450gr con terminación termosellada. Ideal para eventos.',
      category: 'Cartelería',
      image: 'https://i.postimg.cc/9QSSs9d3/ebe0f8b2-7d00-475c-a206-f3906481ba22.jpg',
      price: 'Consultar',
      colors: ['#2563EB', '#1D4ED8']
    },
    {
      id: 7,
      name: 'Portafolio Ejecutivo',
      description: 'Cuero genuino con terminación artesanal. Grabado en dorado o plateado.',
      category: 'Marroquinería',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: 'Consultar',
      featured: true,
      colors: ['#111827', '#000000']
    },
  ], []);

  const categories = useMemo(() => ['all', 'Indumentaria', 'Regalería', 'Cartelería', 'Marroquinería'], []);

  const filteredProducts = useMemo(() => 
    selectedCategory === 'all' 
      ? productData 
      : productData.filter(product => product.category === selectedCategory),
    [selectedCategory, productData]
  );

  return (
    <>
      <Geder />
      
      {/* Hero Section with Blur Background */}
      <section className="relative min-h-screen pt-32 md:pt-40 pb-16 overflow-hidden">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 -z-10">
          {/* <img 
            src={heroBg} 
            alt="Fondo hero" 
            className="w-full h-full object-cover blur-sm saturate-200"
            loading="eager"
          /> */}
          <img 
            src={'https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-an-image-of-a-clothing-store-image_2519172.jpg'} 
            alt="Fondo hero" 
            className="w-full h-full object-cover blur-sm saturate-200"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Animated Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-16"
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-white mb-2 uppercase tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-blue-500">
                Productos Premium
              </span>
            </motion.h2>
            <motion.div 
              className="w-4/5 md:w-3/5 lg:w-2/5 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4 md:mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.p
              className="text-lg text-white/90 max-w-3xl mx-auto -mb-2 md:-mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Soluciones gráficas de alta gama diseñadas para elevar tu marca
            </motion.p>
          </motion.div>

          {/* Floating Category Filter */}
          <motion.div 
            className="max-w-4xl mx-auto mb-8 bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-white/90 text-gray-800 hover:bg-white'
                  }`}
                >
                  {category === 'all' ? 'Todos los Productos' : category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Gallery with Enhanced Visuals */}
          <div className="max-w-7xl mx-auto mb-16">
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm"
              >
                <p className="text-gray-700 text-xl mb-4">
                  No encontramos productos en esta categoría
                </p>
                <Link 
                  to="/contacto" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md"
                >
                  Solicitar catálogo completo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="relative group"
                      onHoverStart={() => setHoveredProduct(product.id)}
                      onHoverEnd={() => setHoveredProduct(null)}
                    >
                      {/* Product Card */}
                      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                        {/* Image with Color Overlay */}
                        <div className="relative overflow-hidden h-72">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Dynamic Color Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 ${
                            hoveredProduct === product.id ? 'opacity-100' : 'opacity-90'
                          }`} />
                          
                          {/* Price Tag */}
                          <span className="absolute top-4 right-4 bg-white/90 text-blue-600 px-3 py-1.5 rounded-full text-sm font-bold backdrop-blur-sm">
                            {product.price}
                          </span>
                          
                          {/* Featured Badge */}
                          {product.featured && (
                            <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                              ⭐ Destacado
                            </span>
                          )}
                        </div>
                        
                        {/* Product Info */}
                        <div className="p-6 flex-grow flex flex-col">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium">
                              {product.category}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                          
                          {/* Color Options */}
                          <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-2">COLORES DISPONIBLES:</p>
                            <div className="flex gap-2">
                              {product.colors?.map((color, i) => (
                                <span 
                                  key={i}
                                  className="w-5 h-5 rounded-full border border-gray-200 shadow-inner"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                            <Link
                              to={`/productos/${product.id}`}
                              className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium"
                            >
                              Ver detalles
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                            <Link
                              to="/contacto"
                              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md"
                            >
                              Personalizar
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

          {/* Premium CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center bg-gradient-to-r from-blue-900/80 to-cyan-800/80 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-3">¿Buscas algo exclusivo para tu marca?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Diseñamos productos premium 100% personalizados que reflejen la esencia de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Solicitar cotización
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link
                to="/catalogo"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Ver catálogo completo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Products;