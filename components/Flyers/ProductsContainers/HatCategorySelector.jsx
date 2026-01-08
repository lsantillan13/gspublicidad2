import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Geder from '../../Geder';

const HatCategorySelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 'gorros',
      name: 'Gorros',
      description: 'Gorros de alta calidad para todo tipo de ocasiones',
      image: 'https://i.postimg.cc/9QWG9QcW/image.png',
      icon: '🧢',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200'
    },
    {
      id: 'pilusos',
      name: 'Pilusos',
      description: 'Estilo casual y moderno para el día a día',
      image: 'https://i.postimg.cc/DySSzQk6/image.png',
      icon: '🧵',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200'
    },
    {
      id: 'sombreros',
      name: 'Sombreros',
      description: 'Elegancia y protección con los mejores materiales',
      image: 'https://i.postimg.cc/C5cfHjhD/image.png',
      icon: '🎩',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      borderColor: 'border-amber-200'
    }
  ];

  const handleCategorySelect = (categoryId) => {
    navigate(`/catalogo/gorras?categoria=${categoryId}`);
  };

  return (
    <section>
    <Geder />
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 border border-slate-200 shadow-sm mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-semibold uppercase tracking-wider text-sm">
              Selecciona una Categoría
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 mb-4"
          >
            <span className="block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Gorros, Pilusos
            </span>
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
              y Sombreros
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light"
          >
            Descubre nuestra colección premium de accesorios para la cabeza
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="relative"
            >
              <button
                onClick={() => handleCategorySelect(category.id)}
                className="w-full h-full text-left focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-white focus:rounded-3xl"
                aria-label={`Explorar ${category.name} - ${category.description}`}
              >
                <div className={`
                  relative overflow-hidden rounded-2xl sm:rounded-3xl 
                  ${category.bgColor} border-2 ${category.borderColor}
                  transition-all duration-500 h-full
                  ${hoveredCategory === category.id ? 'shadow-2xl shadow-blue-500/20' : 'shadow-lg'}
                `}>
                  {/* Background Image with Overlay */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-white/50 to-transparent z-10" />
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 mix-blend-overlay`} />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                        bg-gradient-to-br ${category.color} text-white shadow-lg
                        transform transition-transform duration-300
                        ${hoveredCategory === category.id ? 'scale-110 rotate-3' : ''}
                      `}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                          {category.name}
                        </h3>
                        <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${category.color} mt-2`} />
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {category.description}
                    </p>

                    {/* CTA */}
                    <div className="pt-2">
                      <span className={`
                        inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm
                        transition-all duration-300 transform
                        ${hoveredCategory === category.id 
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg translate-y-0` 
                          : 'bg-white text-slate-700 border border-slate-200'
                        }
                      `}>
                        Explorar Catálogo
                        <svg 
                          className={`w-4 h-4 transition-transform ${hoveredCategory === category.id ? 'translate-x-1' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 
                    transition-opacity duration-500 pointer-events-none
                    ${hoveredCategory === category.id ? 'opacity-5' : ''}
                  `} />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-slate-600 mb-6">
              Contáctanos para productos personalizados o solicita nuestro catálogo completo
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contactar con un Asesor
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default HatCategorySelector;