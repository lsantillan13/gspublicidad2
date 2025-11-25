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
    imageUrl: "http://gspublicidad.com.ar/wp-content/uploads/2017/06/sombrero_pampero_pampa_portada.jpg",
    link: "/productos/sombreros"
  }
];

const ANIMATED_LIGHTS = [
  {
    id: 'amber',
    position: 'top-1/4 -left-20',
    size: 'w-96 h-96',
    color: 'bg-amber-600/25',
    animation: 'animate-float-amber'
  },
  {
    id: 'brown',
    position: 'bottom-1/4 -right-20',
    size: 'w-96 h-96',
    color: 'bg-amber-900/20',
    animation: 'animate-float-brown'
  },
  {
    id: 'gold',
    position: 'top-1/3 right-1/4',
    size: 'w-64 h-64',
    color: 'bg-yellow-500/15',
    animation: 'animate-float-gold'
  }
];

const FLOATING_ELEMENTS = [
  {
    id: 1,
    position: 'top-20 left-10',
    size: 'w-40 h-40',
    gradient: 'bg-gradient-to-r from-amber-600/25 to-yellow-600/20',
    animation: 'animate-float'
  },
  {
    id: 2,
    position: 'bottom-32 right-16',
    size: 'w-60 h-60',
    gradient: 'bg-gradient-to-r from-amber-400/15 to-orange-500/10',
    animation: 'animate-float delay-1000'
  }
];

// Efectos de sombreros flotantes decorativos
const FLOATING_HATS = [
  {
    id: 1,
    type: '👒',
    position: 'top-10 left-20',
    animation: 'animate-bounce-slow delay-300',
    size: 'text-4xl'
  },
  {
    id: 2,
    type: '🧢',
    position: 'top-40 right-24',
    animation: 'animate-bounce-slow delay-700',
    size: 'text-3xl'
  },
  {
    id: 3,
    type: '🎩',
    position: 'bottom-20 left-32',
    animation: 'animate-bounce-slow delay-500',
    size: 'text-5xl'
  }
];

const CapsHatsHero = () => {
  return (
    <section className="font-montserrat bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-amber-900 w-full h-auto mx-auto">
      <div className="relative w-full h-full overflow-hidden">
        {/* Base cálida */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
        
        {/* Animated lights cálidas */}
        {ANIMATED_LIGHTS.map(light => (
          <div 
            key={light.id}
            className={`absolute ${light.position} ${light.size} ${light.color} rounded-full filter blur-3xl mix-blend-multiply opacity-60 ${light.animation}`}
          ></div>
        ))}
        
        {/* Hero Section */}
        <section className="relative min-h-screen py-16 px-4 overflow-hidden flex items-center">
          {/* Textura sutil */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
          </div>
          
          {/* Floating elements cálidos */}
          {FLOATING_ELEMENTS.map(element => (
            <div 
              key={element.id}
              className={`absolute ${element.position} ${element.size} rounded-full ${element.gradient} blur-xl ${element.animation} opacity-40`}
            ></div>
          ))}
          
          {/* Sombreros flotantes decorativos */}
          {FLOATING_HATS.map(hat => (
            <div 
              key={hat.id}
              className={`absolute ${hat.position} ${hat.size} ${hat.animation} opacity-20 pointer-events-none`}
            >
              {hat.type}
            </div>
          ))}
          
          {/* Main content */}
          <div className="mx-auto relative z-10 h-full w-full">
            {/* Header con tema de gorros */}
            <div className="text-center mb-16">
              <h2 className="tracking-tighter mb-4">
                <span className="block text-5xl md:text-7xl text-amber-600 font-bold bg-clip-text drop-shadow-sm">GORROS - PILUSOS - SOMBREROS</span>
              </h2>
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-2 rounded-full"></div>
              <p className="text-amber-700 text-lg mt-6 max-w-2xl mx-auto">
                Descubrí nuestra exclusiva colección de accesorios para cabeza con estilo y calidad
              </p>
            </div>
      
            {/* Categories grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {CATEGORIES.map(category => (
                <div key={category.id} className="group relative flex flex-col items-center">
                  <div className="h-44 w-44 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-400/50 group-hover:border-amber-500 transition-all duration-300 mb-6 shadow-lg group-hover:shadow-xl bg-white/80 backdrop-blur-sm">
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
                    <h2 className="text-2xl font-bold mb-3 text-amber-700 group-hover:text-amber-800 transition-colors">{category.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent z-10"></div>
        </section>
      </div>
      
      {/* Estilos de animación personalizados */}
      <style jsx>{`
        @keyframes float-amber {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-brown {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(10px) translateY(-15px); }
        }
        @keyframes float-gold {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
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
        .text-stroke {
          -webkit-text-stroke: 1px #d97706;
          text-stroke: 1px #d97706;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default React.memo(CapsHatsHero);