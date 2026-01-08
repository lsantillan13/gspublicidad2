import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 'pilusos',
    title: "PILUSOS",
    description: "Estilo casual y moderno",
    imageUrl: "https://production.cdn.vaypol.com/variants/lq8t96hnfmamoyezl5mxi23s56ve/e82c8d6171dd25bb538f2e7263b5bc7dfc6a79352d85923074be76df53fbc6f4",
    icon: "🧵",
    color: 'from-emerald-500 to-green-500',
    gradient: 'bg-gradient-to-br from-emerald-50 to-green-50',
    borderColor: 'border-emerald-300',
    bgColor: 'bg-emerald-50'
  },
  {
    id: 'gorros',
    title: "GORROS",
    description: "Calidad y comodidad premium",
    imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&crop=center",
    icon: "🧢",
    color: 'from-cyan-500 to-blue-500',
    gradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
    borderColor: 'border-cyan-300',
    bgColor: 'bg-cyan-50'
  },
  {
    id: 'sombreros',
    title: "SOMBREROS",
    description: "Elegancia y protección solar",
    imageUrl: "https://i.postimg.cc/D0MV3tL0/sombrero-pampero-pampa-portada.jpg",
    icon: "🎩",
    color: 'from-amber-500 to-orange-500',
    gradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
    borderColor: 'border-amber-300',
    bgColor: 'bg-amber-50'
  }
];

const ANIMATED_LIGHTS = [
  {
    id: 'blue',
    position: 'top-1/4 -left-4 sm:-left-10 lg:-left-20',
    size: 'w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96',
    color: 'bg-cyan-500/20',
    animation: 'animate-float-blue'
  },
  {
    id: 'green',
    position: 'bottom-1/4 -right-4 sm:-right-10 lg:-right-20',
    size: 'w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96',
    color: 'bg-emerald-500/20',
    animation: 'animate-float-green'
  },
  {
    id: 'amber',
    position: 'top-1/3 right-1/4',
    size: 'w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64',
    color: 'bg-amber-500/15',
    animation: 'animate-float-amber'
  }
];

const FLOATING_ELEMENTS = [
  {
    id: 1,
    position: 'top-10 left-4 sm:top-20 sm:left-10',
    size: 'w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40',
    gradient: 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10',
    animation: 'animate-float'
  },
  {
    id: 2,
    position: 'bottom-20 right-4 sm:bottom-32 sm:right-16',
    size: 'w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60',
    gradient: 'bg-gradient-to-r from-emerald-500/10 to-green-500/10',
    animation: 'animate-float delay-1000'
  },
  {
    id: 3,
    position: 'top-32 left-1/4',
    size: 'w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48',
    gradient: 'bg-gradient-to-r from-amber-500/10 to-orange-500/10',
    animation: 'animate-float delay-700'
  }
];

const FLOATING_HATS = [
  {
    id: 1,
    type: '🧵',
    position: 'top-4 left-4 sm:top-10 sm:left-20',
    animation: 'animate-bounce-slow delay-300',
    size: 'text-2xl sm:text-3xl lg:text-4xl',
    color: 'text-emerald-500/20'
  },
  {
    id: 2,
    type: '🧢',
    position: 'top-32 right-6 sm:top-40 sm:right-24',
    animation: 'animate-bounce-slow delay-700',
    size: 'text-xl sm:text-2xl lg:text-3xl',
    color: 'text-cyan-500/20'
  },
  {
    id: 3,
    type: '🎩',
    position: 'bottom-16 left-8 sm:bottom-20 sm:left-32',
    animation: 'animate-bounce-slow delay-500',
    size: 'text-3xl sm:text-4xl lg:text-5xl',
    color: 'text-amber-500/20'
  }
];

const CapsHatsHero = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    // Navega al catálogo con la categoría seleccionada
    navigate(`/catalogo/gorras?categoria=${categoryId}`);
  };

  return (
    <section className="font-montserrat bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 text-slate-800 w-full min-h-screen mx-auto overflow-hidden">
      <div className="relative w-full min-h-screen">
        {/* Base de gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-cyan-50/20"></div>
        
        {/* Patrón sutil de textura */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '300px'
          }}></div>
        </div>
        
        {/* Animated lights responsivas */}
        {ANIMATED_LIGHTS.map(light => (
          <div 
            key={light.id}
            className={`absolute ${light.position} ${light.size} ${light.color} rounded-full filter blur-xl sm:blur-2xl lg:blur-3xl mix-blend-multiply opacity-30 sm:opacity-40 lg:opacity-50 ${light.animation}`}
            aria-hidden="true"
          ></div>
        ))}
        
        {/* Hero Section */}
        <section className="relative min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">
          {/* Floating elements responsivos */}
          {FLOATING_ELEMENTS.map(element => (
            <div 
              key={element.id}
              className={`absolute ${element.position} ${element.size} rounded-full ${element.gradient} blur-lg sm:blur-xl ${element.animation} opacity-15 sm:opacity-20`}
              aria-hidden="true"
            ></div>
          ))}
          
          {/* Sombreros flotantes responsivos */}
          {FLOATING_HATS.map(hat => (
            <div 
              key={hat.id}
              className={`absolute ${hat.position} ${hat.size} ${hat.animation} ${hat.color} pointer-events-none select-none`}
              aria-hidden="true"
            >
              {hat.type}
            </div>
          ))}
          
          {/* Main content */}
          <div className="mx-auto relative z-10 w-full max-w-7xl">
            {/* Header responsivo */}
            <div className="text-center mb-10 sm:mb-14 lg:mb-16 px-2">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-2.5 border border-slate-200 shadow-sm mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></span>
                <span className="text-slate-700 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Colección Exclusiva
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 mb-4 sm:mb-6 leading-tight">
                <span className=" bg-gradient-to-r text-4xl sm:text-5xl md:text-6xl lg:text-7xl from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mr-1">
                  GORROS •
                </span>
                <span className=" bg-gradient-to-r text-4xl sm:text-5xl md:text-6xl lg:text-7xl from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mt-1 sm:mt-2">
                  PILUSOS • SOMBREROS
                </span>
              </h1>
              
              <div className="w-40 sm:w-56 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto my-3 sm:my-4 rounded-full"></div>
              
              <p className="text-slate-600/80 text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 max-w-2xl mx-auto font-light leading-relaxed">
                Descubre nuestra exclusiva colección de accesorios para cabeza con <span className="sm:text-lg lg:text-xl font-semibold text-slate-800">estilo, calidad y personalización</span>
              </p>
            </div>
      
            {/* Categories grid responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-4xl lg:max-w-5xl mx-auto">
              {CATEGORIES.map((category, index) => (
                <div 
                  key={category.id} 
                  className="group relative"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className="w-full focus:outline-none focus:ring-3 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-50 focus:rounded-3xl"
                    aria-label={`Explorar colección de ${category.title}`}
                  >
                    <div className={`
                      relative flex flex-col items-center transition-all duration-500
                      ${hoveredCategory === category.id ? 'transform -translate-y-2' : ''}
                    `}>
                      {/* Círculo de imagen */}
                      <div className={`
                        relative h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
                        rounded-full overflow-hidden mb-5 sm:mb-6 shadow-lg
                        ${category.gradient} backdrop-blur-sm
                        border-4 ${category.borderColor} transition-all duration-300
                        ${hoveredCategory === category.id 
                          ? `shadow-xl shadow-blue-500/20 scale-105 border-opacity-100` 
                          : 'group-hover:shadow-xl group-hover:border-opacity-80 border-opacity-60'
                        }
                      `}>
                        <img 
                          src={category.imageUrl} 
                          alt={category.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        
                        {/* Overlay y efecto de brillo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/15 transition-all duration-500"></div>
                        
                        {/* Ícono flotante */}
                        <div className={`
                          absolute -top-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl
                          ${category.gradient} border-2 ${category.borderColor} shadow-md backdrop-blur-sm
                          transition-all duration-300
                          ${hoveredCategory === category.id ? 'scale-110 rotate-12' : ''}
                        `}>
                          {category.icon}
                        </div>
                      </div>
                      
                      {/* Contenido de la categoría */}
                      <div className="text-center space-y-2">
                        <h2 className={`
                          text-xl sm:text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-300
                          ${category.id === 'gorros' ? 'text-blue-700 group-hover:text-blue-800' : 
                            category.id === 'pilusos' ? 'text-emerald-700 group-hover:text-emerald-800' : 
                            'text-amber-700 group-hover:text-amber-800'}
                        `}>
                          {category.title}
                        </h2>
                        
                        <p className={`
                          text-sm sm:text-base max-w-[200px] mx-auto
                          ${category.id === 'gorros' ? 'text-blue-600/80' : 
                            category.id === 'pilusos' ? 'text-emerald-600/80' : 
                            'text-amber-600/80'}
                        `}>
                          {category.description}
                        </p>
                        
                        {/* Botón de acción */}
                        <div className={`
                          inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-lg font-medium text-sm sm:text-base
                          transition-all duration-300 border backdrop-blur-sm
                          ${hoveredCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white shadow-md scale-105 border-transparent`
                            : `bg-white/80 ${category.id === 'gorros' ? 'text-blue-700 border-blue-200' : 
                               category.id === 'pilusos' ? 'text-emerald-700 border-emerald-200' : 
                               'text-amber-700 border-amber-200'}`
                          }
                        `}>
                          Explorar
                          <svg 
                            className={`w-3.5 h-3.5 transition-transform ${hoveredCategory === category.id ? 'translate-x-1' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Línea decorativa */}
                      <div className={`
                        absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 rounded-full
                        bg-gradient-to-r ${category.color} opacity-0 transition-opacity duration-300
                        ${hoveredCategory === category.id ? 'opacity-80' : ''}
                      `}></div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* CTA inferior */}
            <div className="text-center mt-12 sm:mt-16 lg:mt-20">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-lg rounded-2xl px-6 sm:px-8 py-6 border border-slate-200 shadow-lg max-w-2xl mx-auto">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                    ¿Necesitas productos personalizados?
                  </h3>
                  <p className="text-slate-600/80 text-sm sm:text-base">
                    Personaliza con tu logo o diseño exclusivo
                  </p>
                </div>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  Solicitar Cotización
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 lg:h-36 bg-gradient-to-t from-slate-50/95 to-transparent z-0 pointer-events-none"></div>
        </section>
      </div>
      
      {/* Estilos de animación personalizados */}
      <style jsx='true'>{`
        @keyframes float-blue {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-20px) rotate(2deg) scale(1.05); }
        }
        @keyframes float-green {
          0%, 100% { transform: translateX(0px) translateY(0px) scale(1); }
          50% { transform: translateX(10px) translateY(-15px) scale(1.03); }
        }
        @keyframes float-amber {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.08); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-blue {
          animation: float-blue 10s ease-in-out infinite;
        }
        .animate-float-green {
          animation: float-green 12s ease-in-out infinite;
        }
        .animate-float-amber {
          animation: float-amber 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default React.memo(CapsHatsHero);