import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 1,
    title: "PILUSOS",
    imageUrl: "https://production.cdn.vaypol.com/variants/lq8t96hnfmamoyezl5mxi23s56ve/e82c8d6171dd25bb538f2e7263b5bc7dfc6a79352d85923074be76df53fbc6f4",
    link: "/productos/pilusos"
  },
  {
    id: 2,
    title: "GORROS",
    imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    link: "/productos/gorros"
  },
  {
    id: 3,
    title: "SOMBREROS",
    imageUrl: "https://i.postimg.cc/D0MV3tL0/sombrero-pampero-pampa-portada.jpg",
    link: "/productos/sombreros"
  }
];

const ANIMATED_LIGHTS = [
  {
    id: 'amber',
    position: 'top-1/4 -left-4 sm:-left-10 lg:-left-20',
    size: 'w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96',
    color: 'bg-amber-600/25',
    animation: 'animate-float-amber'
  },
  {
    id: 'brown',
    position: 'bottom-1/4 -right-4 sm:-right-10 lg:-right-20',
    size: 'w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96',
    color: 'bg-amber-900/20',
    animation: 'animate-float-brown'
  },
  {
    id: 'gold',
    position: 'top-1/3 right-1/4',
    size: 'w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64',
    color: 'bg-yellow-500/15',
    animation: 'animate-float-gold'
  }
];

const FLOATING_ELEMENTS = [
  {
    id: 1,
    position: 'top-10 left-4 sm:top-20 sm:left-10',
    size: 'w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40',
    gradient: 'bg-gradient-to-r from-amber-600/25 to-yellow-600/20',
    animation: 'animate-float'
  },
  {
    id: 2,
    position: 'bottom-20 right-4 sm:bottom-32 sm:right-16',
    size: 'w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60',
    gradient: 'bg-gradient-to-r from-amber-400/15 to-orange-500/10',
    animation: 'animate-float delay-1000'
  }
];

const FLOATING_HATS = [
  {
    id: 1,
    type: '👒',
    position: 'top-4 left-4 sm:top-10 sm:left-20',
    animation: 'animate-bounce-slow delay-300',
    size: 'text-2xl sm:text-3xl lg:text-4xl'
  },
  {
    id: 2,
    type: '🧢',
    position: 'top-32 right-6 sm:top-40 sm:right-24',
    animation: 'animate-bounce-slow delay-700',
    size: 'text-xl sm:text-2xl lg:text-3xl'
  },
  {
    id: 3,
    type: '🎩',
    position: 'bottom-16 left-8 sm:bottom-20 sm:left-32',
    animation: 'animate-bounce-slow delay-500',
    size: 'text-3xl sm:text-4xl lg:text-5xl'
  }
];

const CapsHatsHero = () => {
  return (
    <section className="font-montserrat bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-amber-900 w-full min-h-screen mx-auto">
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Base cálida */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
        
        {/* Animated lights responsivas */}
        {ANIMATED_LIGHTS.map(light => (
          <div 
            key={light.id}
            className={`absolute ${light.position} ${light.size} ${light.color} rounded-full filter blur-xl sm:blur-2xl lg:blur-3xl mix-blend-multiply opacity-40 sm:opacity-50 lg:opacity-60 ${light.animation}`}
          ></div>
        ))}
        
        {/* Hero Section */}
        <section className="relative min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">
          {/* Textura sutil */}
          <div className="absolute inset-0 z-0 opacity-5 sm:opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 sm:opacity-30"></div>
          </div>
          
          {/* Floating elements responsivos */}
          {FLOATING_ELEMENTS.map(element => (
            <div 
              key={element.id}
              className={`absolute ${element.position} ${element.size} rounded-full ${element.gradient} blur-lg sm:blur-xl ${element.animation} opacity-30 sm:opacity-40`}
            ></div>
          ))}
          
          {/* Sombreros flotantes responsivos */}
          {FLOATING_HATS.map(hat => (
            <div 
              key={hat.id}
              className={`absolute ${hat.position} ${hat.size} ${hat.animation} opacity-15 sm:opacity-20 pointer-events-none`}
            >
              {hat.type}
            </div>
          ))}
          
          {/* Main content */}
          <div className="mx-auto relative z-10 w-full max-w-7xl">
            {/* Header responsivo */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="tracking-tighter mb-3 sm:mb-4">
                <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-amber-600 font-bold bg-clip-text drop-shadow-sm">
                  GORROS - PILUSOS - SOMBREROS
                </span>
              </h2>
              <div className="w-32 sm:w-48 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-2 sm:my-3 rounded-full"></div>
              <p className="text-amber-700 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto px-2">
                Descubrí nuestra exclusiva colección de accesorios para cabeza con estilo y calidad
              </p>
            </div>
      
            {/* Categories grid responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-4xl lg:max-w-5xl mx-auto">
              {CATEGORIES.map(category => (
                <div key={category.id} className="group relative flex flex-col items-center">
                  <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:w-52 lg:h-52 xl:w-64 xl:h-64 rounded-full overflow-hidden border-3 sm:border-4 border-amber-400/50 group-hover:border-amber-500 transition-all duration-300 mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl bg-white/80 backdrop-blur-sm">
                    <img 
                      src={category.imageUrl} 
                      alt={category.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Efecto de brillo al hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/0 via-amber-100/0 to-amber-300/0 group-hover:from-amber-200/20 group-hover:via-amber-100/10 group-hover:to-amber-300/15 transition-all duration-500"></div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-amber-700 group-hover:text-amber-800 transition-colors">
                      {category.title}
                    </h2>
                    <Link 
                      to={category.link}
                      className="inline-block text-xs sm:text-sm text-amber-600 hover:text-amber-800 font-medium underline underline-offset-2 hover:underline-offset-4 transition-all"
                    >
                      Ver colección →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-amber-50 to-transparent z-10"></div>
        </section>
      </div>
      
      {/* Estilos de animación personalizados */}
      <style jsx='true'>{`
        @keyframes float-amber {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes float-brown {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(5px) translateY(-8px); }
        }
        @keyframes float-gold {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-amber {
          animation: float-amber 8s ease-in-out infinite;
        }
        .animate-float-brown {
          animation: float-brown 10s ease-in-out infinite;
        }
        .animate-float-gold {
          animation: float-gold 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default React.memo(CapsHatsHero);