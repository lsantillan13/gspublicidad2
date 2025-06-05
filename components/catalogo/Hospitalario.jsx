import React from 'react';
import { Link } from 'react-router-dom';

const MEDICAL_CATEGORIES = [
  {
    id: 1,
    title: "Equipamiento Clínico",
    description: "Instrumentos y herramientas médicas",
    image: "https://i.postimg.cc/3xrxSsK4/image.png",
    alt: "Equipamiento Clínico",
    icon: "🩺",
    gradient: "from-blue-50 to-white",
    link: "/categoria/equipamiento-clinico"
  },
  {
    id: 2,
    title: "Indumentaria Médica",
    description: "Batas, uniformes y accesorios",
    image: "https://i.postimg.cc/K8m2cBVd/image.png",
    alt: "Indumentaria Médica",
    icon: "🥼",
    gradient: "from-blue-50 to-white",
    link: "/categoria/indumentaria-medica"
  },
  {
    id: 3,
    title: "Mobiliario Hospitalario",
    description: "Equipamiento para instituciones",
    image: "https://i.postimg.cc/TYM9D9TH/image.png",
    alt: "Mobiliario Hospitalario",
    icon: "🏥",
    gradient: "from-blue-50 to-white",
    link: "/categoria/mobiliario-hospitalario"
  },
  {
    id: 4,
    title: "Insumos Descartables",
    description: "Materiales de un solo uso",
    image: "https://i.postimg.cc/kgLBhjDx/image.png",
    alt: "Insumos Descartables",
    icon: "💉",
    gradient: "from-blue-50 to-white",
    link: "/categoria/insumos-descartables"
  }
];

const DECORATIVE_ELEMENTS = [
  {
    id: 1,
    position: "top-20 left-10",
    size: "w-40 h-40",
    color: "bg-blue-100",
    blur: "blur-xl"
  },
  {
    id: 2,
    position: "bottom-32 right-16",
    size: "w-60 h-60",
    color: "bg-blue-200",
    blur: "blur-xl"
  }
];

function Hospitalario() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-purple-300 via-cyan-600 to-[#0c0f1c]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {DECORATIVE_ELEMENTS.map(element => (
          <div 
            key={element.id}
            className={`absolute ${element.position} ${element.size} rounded-full ${element.color} ${element.blur}`}
          />
        ))}
      </div>
    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-3 md:mb-6">
            <div className="mt-0 md:mt-14 w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
            <h2 className="mx-4 text-4xl md:text-4xl lg:text-5xl font-bold text-white mt-0 md:mt-14">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-4xl lg:text-5xl">ARTÍCULOS</span> HOSPITALARIOS
            </h2>
            <div className="mt-0 md:mt-14 w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
          </div>
          <p className="text-lg md:text-xl text-white md:text-gray-300 max-w-2xl mx-auto">
            Equipamiento y accesorios para el sector salud
          </p>
        </div>
    
        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {MEDICAL_CATEGORIES.map(category => (
            <div 
              key={category.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100"
            >
              <div className={`h-48 bg-gradient-to-br ${category.gradient} flex items-center justify-center relative overflow-hidden`}>
                <img 
                  src={category.image} 
                  alt={category.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                <span className="absolute text-5xl text-white opacity-20">{category.icon}</span>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  to={category.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                  aria-label={`Ver productos de ${category.title}`}
                >
                  Ver productos
                </Link>
              </div>
            </div>
          ))}
        </div>
    
        {/* View all button */}
        <div className="text-center mt-12">
          <Link
            to="/hospitalario"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all group"
            aria-label="Ver todo el catálogo hospitalario"
          >
            Ver todo el catálogo hospitalario
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hospitalario);