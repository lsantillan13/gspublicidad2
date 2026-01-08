import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const BannersCategorySelector = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 'banderas',
      name: 'Banderas',
      description: 'Banderas publicitarias y corporativas de alta calidad',
      image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&auto=format&fit=crop',
      icon: '🚩',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-rose-50',
      borderColor: 'border-red-200',
      features: ['Personalizable', 'Exterior/Interior', 'Materiales premium']
    },
    {
      id: 'sombrillas',
      name: 'Sombrillas',
      description: 'Sombrillas publicitarias para eventos y establecimientos',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop',
      icon: '☂️',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      features: ['Resistentes', 'Portátiles', 'Branding visible']
    },
    {
      id: 'portabanners',
      name: 'Portabanners',
      description: 'Soportes profesionales para exhibición de banners',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop',
      icon: '🖼️',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200',
      features: ['Ajustables', 'Estables', 'Fácil montaje']
    },
    {
      id: 'flybanners',
      name: 'Fly Banners',
      description: 'Banners voladores para máxima visibilidad',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop',
      icon: '🪁',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
      borderColor: 'border-purple-200',
      features: ['Aéreos', 'Gran impacto', 'Eventos especiales']
    }
  ];

  const handleCategorySelect = (categoryId) => {
    navigate(`/catalogo/banners?categoria=${categoryId}`);
  };

  return (
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
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-semibold uppercase tracking-wider text-sm">
              Productos Publicitarios
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 mb-4"
          >
            <span className="block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Banderas • Sombrillas
            </span>
            <span className="block bg-gradient-to-r from-red-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Portabanners • Fly Banners
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light"
          >
            Soluciones publicitarias de alto impacto para potenciar tu visibilidad
          </motion.p>
        </div>

        {/* Categories Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
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
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent z-10" />
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className={`
                            px-3 py-1.5 text-xs font-medium rounded-full
                            ${category.id === 'banderas' ? 'bg-red-100 text-red-700 border border-red-200' :
                              category.id === 'sombrillas' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                              category.id === 'portabanners' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                              'bg-purple-100 text-purple-700 border border-purple-200'}
                            transition-all duration-300
                            ${hoveredCategory === category.id ? 'scale-105' : ''}
                          `}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
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
              ¿Necesitas asesoramiento personalizado?
            </h3>
            <p className="text-slate-600 mb-6">
              Nuestros expertos te ayudarán a elegir la mejor solución para tu campaña publicitaria
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => navigate('/contacto')}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contactar con un Asesor
              </button>
              <button
                onClick={() => navigate('/merchandising')}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-white to-slate-50 text-slate-700 font-semibold px-8 py-3.5 rounded-xl hover:scale-105 transition-all duration-300 border border-slate-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Ver Todos los Productos
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannersCategorySelector;