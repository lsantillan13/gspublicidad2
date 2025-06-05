import React from 'react';
import { Link } from 'react-router-dom';

const SIGNAGE_TYPES = [
  {
    id: 1,
    title: "Cartelería Interior",
    description: "Elegante y profesional para espacios cerrados",
    image: "https://i.postimg.cc/9QSSs9d3/ebe0f8b2-7d00-475c-a206-f3906481ba22.jpg",
    alt: "Cartelería Interior",
    gradient: "from-gray-100 to-white",
    overlay: "from-gray-900/50 to-transparent",
    link: "/carteleria/interior"
  },
  {
    id: 2,
    title: "Cartelería Exterior",
    description: "Resistente a las condiciones climáticas",
    image: "https://i.postimg.cc/G2zjn0WB/1a3d7dbc-9e0c-4318-b96e-be3a4fc95445.jpg",
    alt: "Cartelería Exterior",
    gradient: "from-blue-50 to-white",
    overlay: "from-blue-900/50 to-transparent",
    link: "/carteleria/exterior"
  },
  {
    id: 3,
    title: "Fotoluminiscente",
    description: "Para emergencias y seguridad",
    image: "https://i.postimg.cc/9X732Jxx/image.png",
    alt: "Señalización Fotoluminiscente",
    gradient: "from-yellow-50 to-white",
    overlay: "from-gray-900/50 to-transparent",
    link: "/carteleria/fotoluminiscente"
  }
];

const BACKGROUND_ELEMENTS = [
  {
    id: 1,
    position: "top-20 left-1/4",
    size: "w-64 h-64",
    color: "bg-yellow-100",
    opacity: "opacity-20",
    blur: "blur-3xl"
  },
  {
    id: 2,
    position: "bottom-32 right-1/4",
    size: "w-80 h-80",
    color: "bg-blue-100",
    opacity: "opacity-20",
    blur: "blur-3xl"
  }
];

function Carteleria() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-gray-300 via-neutral-400 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {BACKGROUND_ELEMENTS.map(element => (
          <div 
            key={element.id}
            className={`absolute ${element.position} ${element.size} rounded-full ${element.color} ${element.opacity} ${element.blur}`}
          />
        ))}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      </div>
    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-6 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <span className="h-2 w-2 bg-blue-500 rounded-full mr-2" />
            <span className="text-sm font-medium text-gray-600">SOLUCIONES GRÁFICAS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="text-5xl relative z-10">CARTELERÍA</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200 opacity-40 z-0" />
            </span>
            <br className="md:hidden" />
            <span className="text-5xl ml-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block md:inline">
              PROFESIONAL
            </span>
          </h2>
          <div className="w-5/6 md:w-1/2 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 mx-auto my-4" />
          <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Señalización de alta calidad para interior y exterior
          </p>
        </div>
    
        {/* Signage grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SIGNAGE_TYPES.map(signage => (
            <div 
              key={signage.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 h-[400px]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${signage.gradient} flex items-center justify-center overflow-hidden`}>
                <img 
                  src={signage.image} 
                  alt={signage.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${signage.overlay}`} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-b from-transparent to-black/90">
                <h3 className="text-white text-2xl font-bold mb-2">{signage.title}</h3>
                <p className="text-gray-100 font-bold md:font-normal mb-4">{signage.description}</p>
                <Link
                  to={signage.link}
                  className="inline-flex items-center font-medium text-white group"
                  aria-label={`Ver ${signage.title.toLowerCase()}`}
                >
                  Ver opciones
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
    
        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-3 bg-gray-50">
              <span className="text-gray-600 font-medium">¿Necesitas asesoramiento?</span>
            </div>
            <Link
              to="/contacto"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold hover:from-blue-700 hover:to-blue-900 transition-all"
              aria-label="Contactar a un especialista"
            >
              Contactar a un especialista
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Carteleria);