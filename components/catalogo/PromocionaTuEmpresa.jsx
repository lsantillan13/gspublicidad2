import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for better SPA navigation

const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: "BANDERAS",
    description: "Tecnología y confort con tu logo",
    imageUrl: "https://i.postimg.cc/Bb7mQn7V/image.png",
    link: "/productos/banderas"
  },
  {
    id: 2,
    title: "PORTABANNERS",
    description: "Gabardina grafa de máxima durabilidad",
    imageUrl: "https://i.postimg.cc/nhD3pZ43/image.png",
    link: "/productos/portabanners"
  },
  {
    id: 3,
    title: "FLY BANNERS",
    description: "Resistencia petrolera con tu marca",
    imageUrl: "https://i.postimg.cc/26zGQZPt/image.png",
    link: "/productos/flybanners"
  }
];

const ANIMATED_LIGHTS = [
  {
    id: 'red',
    position: 'top-1/4 -left-20',
    size: 'w-96 h-96',
    color: 'bg-red-600/20',
    animation: 'animate-float-red'
  },
  {
    id: 'blue',
    position: 'bottom-1/4 -right-20',
    size: 'w-96 h-96',
    color: 'bg-blue-600/20',
    animation: 'animate-float-blue'
  },
  {
    id: 'amber',
    position: 'top-1/3 right-1/4',
    size: 'w-64 h-64',
    color: 'bg-amber-500/10',
    animation: 'animate-float-amber'
  },
  {
    id: 'purple',
    position: 'bottom-1/3 left-1/4',
    size: 'w-72 h-72',
    color: 'bg-purple-500/15',
    animation: 'animate-float-red'
  }
];

const FLOATING_ELEMENTS = [
  {
    id: 1,
    position: 'top-20 left-10',
    size: 'w-40 h-40',
    gradient: 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20',
    animation: 'animate-float'
  },
  {
    id: 2,
    position: 'bottom-32 right-16',
    size: 'w-60 h-60',
    gradient: 'bg-gradient-to-r from-amber-400/10 to-yellow-500/10',
    animation: 'animate-float delay-1000'
  }
];

function PromocionaTuEmpresa() {
  return (
    <section className="font-montserrat bg-gray-900 text-white w-full h-auto mx-auto">
      <div className="relative w-full h-full overflow-hidden">
        {/* Base oscura */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Animated lights */}
        {ANIMATED_LIGHTS.map(light => (
          <div 
            key={light.id}
            className={`absolute ${light.position} ${light.size} ${light.color} rounded-full filter blur-3xl mix-blend-screen ${light.animation}`}
          ></div>
        ))}
        
        {/* Hero Section */}
        <section className="relative min-h-screen py-16 px-4 overflow-hidden flex items-center">
          {/* Animated background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          </div>
          
          {/* Floating elements */}
          {FLOATING_ELEMENTS.map(element => (
            <div 
              key={element.id}
              className={`absolute ${element.position} ${element.size} rounded-full ${element.gradient} blur-xl ${element.animation}`}
            ></div>
          ))}
          
          {/* Main content */}
          <div className="mx-auto relative z-10 h-full w-full">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className=" tracking-tighter ">
                <span className="text-stroke text-5xl md:text-7xl">PROMOCIONÁ</span>
                <span className="block text-5xl md:text-7xl text-blue-500 font-bold bg-clip-text">TU EMPRESA</span>
              </h2>
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto my-2"></div>
            </div>
      
            {/* Product categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {PRODUCT_CATEGORIES.map(category => (
                <div key={category.id} className="group relative flex flex-col items-center">
                  <div className="h-44 w-44 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300 mb-6 shadow-xl">
                    <img 
                      src={category.imageUrl} 
                      alt={category.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-3 text-blue-400">{category.title}</h2>
                    <p className="text-gray-300 mb-6">{category.description}</p>
                    <Link 
                      to={category.link} 
                      className="inline-flex font-bold items-center text-blue-400 group"
                      aria-label={`Ver productos de ${category.title}`}
                    >
                      VER PRODUCTOS
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-5 md:w-5 ml-2 transform group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="#60a5fa">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        </section>
      </div>
    </section>
  );
}

export default React.memo(PromocionaTuEmpresa);