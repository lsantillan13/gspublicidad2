import React from 'react';
import { Link } from 'react-router-dom';

const HOME_CATEGORIES = [
  {
    id: 1,
    title: "Juegos de Vino",
    description: "Elegantes sets de 2 y 4 piezas",
    image: "https://i.postimg.cc/cHbt2JV6/image.png",
    alt: "Juegos de Vino",
    gradient: "from-purple-50 to-white",
    link: "/categoria/juegos-de-vino"
  },
  {
    id: 2,
    title: "Sets Materos",
    description: "Completos con termo y accesorios",
    image: "https://i.postimg.cc/YqHRrnvR/image.png",
    alt: "Sets Materos",
    gradient: "from-amber-50 to-white",
    link: "/categoria/sets-materos"
  },
  {
    id: 3,
    title: "Termos y Botellas",
    description: "Acero inoxidable y silicona",
    image: "https://i.postimg.cc/tC865D6P/image.png",
    alt: "Termos y Botellas",
    gradient: "from-blue-50 to-white",
    link: "/categoria/termos-botellas"
  },
  {
    id: 4,
    title: "Bags y Mochilas",
    description: "Estilo y funcionalidad",
    image: "https://i.postimg.cc/kXDdJZ8p/image.png",
    alt: "Bags y Mochilas",
    gradient: "from-gray-50 to-white",
    link: "/categoria/bags-mochilas"
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
    color: "bg-yellow-100",
    blur: "blur-xl"
  }
];

function Hogar() {
  return (
    <section className="relative bg-gradient-to-b from-slate-200 to-purple-300 ">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {DECORATIVE_ELEMENTS.map(element => (
          <div 
            key={element.id}
            className={`absolute ${element.position} ${element.size} rounded-full ${element.color} ${element.blur}`}
          />
        ))}
      </div>
    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-3 md:mb-6">
            <div className="mt-0 md:mt-14 w-16 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
            <h2 className="mx-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-0 md:mt-14">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800 text-4xl lg:text-5xl">ARTÍCULOS</span> PARA EL HOGAR
            </h2>
            <div className="mt-0 md:mt-14 w-16 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Productos funcionales y con estilo para tu vida diaria
          </p>
        </div>
    
        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {HOME_CATEGORIES.map(category => (
            <div 
              key={category.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${category.gradient} flex items-center justify-center relative overflow-hidden`}>
                <img 
                  src={category.image} 
                  alt={category.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
            to="/hogar"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all group"
            aria-label="Ver todos los artículos para el hogar"
          >
            Ver todos los artículos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Hogar);