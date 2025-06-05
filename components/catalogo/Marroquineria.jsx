import React from 'react';
import { Link } from 'react-router-dom';

const LEATHER_PRODUCTS = [
  {
    id: 1,
    title: "Carteras",
    description: "Elegancia y funcionalidad",
    image: "https://i.postimg.cc/yYz7bkmr/image.png",
    alt: "Carteras de cuero",
    tag: "Nuevos Modelos",
    tagColor: "bg-[#3a2a1a]",
    tagTextColor: "text-[#d4a76a]",
    link: "/productos/carteras"
  },
  {
    id: 2,
    title: "Bolsos",
    description: "Estilo y durabilidad",
    image: "https://i.postimg.cc/qBQxqC19/image.png",
    alt: "Bolsos de cuero",
    tag: "Best Seller",
    tagColor: "bg-[#3a2a1a]",
    tagTextColor: "text-[#d4a76a]",
    link: "/productos/bolsos"
  },
  {
    id: 3,
    title: "Portafolios",
    description: "Profesionalismo ejecutivo",
    image: "https://i.postimg.cc/MZ1SVqC0/image.png",
    alt: "Portafolios de cuero",
    tag: "Personalizable",
    tagColor: "bg-[#3a2a1a]",
    tagTextColor: "text-[#d4a76a]",
    link: "/productos/portafolios"
  },
  {
    id: 4,
    title: "Accesorios",
    description: "Detalles que marcan la diferencia",
    image: "https://i.postimg.cc/cJX5S5tb/image.png",
    alt: "Accesorios de cuero",
    tag: "Variedad",
    tagColor: "bg-[#3a2a1a]",
    tagTextColor: "text-[#d4a76a]",
    link: "/productos/accesorios"
  }
];

const BACKGROUND_ELEMENTS = [
  {
    id: 1,
    position: "top-1/4 -left-20",
    size: "w-64 h-64",
    color: "bg-[#d4a76a]",
    opacity: "opacity-10",
    blur: "blur-3xl"
  },
  {
    id: 2,
    position: "bottom-1/3 -right-20",
    size: "w-80 h-80",
    color: "bg-[#8b5a2b]",
    opacity: "opacity-10",
    blur: "blur-3xl"
  }
];

function Marroquineria() {
  return (
    <section className="relative py-12 bg-[#f9f5f0]/30 overflow-hidden">
      {/* Leather texture background */}
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/fotos-premium/fondo-textura-cuero-marron-cerca_293060-2941.jpg?semt=ais_hybrid&w=740')] opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {BACKGROUND_ELEMENTS.map(element => (
          <div 
            key={element.id}
            className={`absolute ${element.position} ${element.size} rounded-full ${element.color} ${element.opacity} ${element.blur}`}
          />
        ))}
      </div>
    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-white uppercase">
            <i className='md:text-4xl trcking-widest text-slate-600'>Artesanía en Cuero</i>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4a76a] mb-4">
            <span className="relative inline-block">
              <span className="relative text-3xl md:text-5xl text-gray-900 z-10">MARROQUINERÍA</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#d4a76a] opacity-20 z-0" />
            </span>
            <br className="md:hidden" />
            <span className="text-[#d4a76d] text-3xl md:text-5xl ml-4 block md:inline">DE ALTA CALIDAD</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4a76a] to-[#8b5a2b] mx-auto my-4" />
          <p className="text-lg md:text-3xl text-slate-700 max-w-2xl mx-auto">
            Productos artesanales en cuero genuino con terminaciones de lujo
          </p>
        </div>
    
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {LEATHER_PRODUCTS.map(product => (
            <div 
              key={product.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 h-[400px]"
            >
              <div className="h-full bg-[#f1e8dd] relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a2a1a]/50 to-transparent" />
              </div>
              
              {/* Product info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1 text-white">{product.title}</h3>
                <p className="text-white mb-4 font-bold">{product.description}</p>
                <Link
                  to={product.link}
                  className="flex items-center text-white group"
                  aria-label={`Ver ${product.title.toLowerCase()}`}
                >
                  Ver modelos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </Link>
              </div>
              
              {/* Product tag */}
              <div className={`absolute top-4 right-4 ${product.tagColor} ${product.tagTextColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
                {product.tag}
              </div>
            </div>
          ))}
        </div>
    
        {/* Call to action */}
        <div className="py-16 text-center">
          <div className="flex justify-around md:inline-flex flex-col sm:flex-row md:items-center bg-white shadow-lg border border-[#d4a76a] overflow-hidden rounded-lg">
            <div className="md:px-8 py-3 bg-[#f9f5f0]">
              <span className="text-[#5c3a21] font-medium">¿Buscas algo personalizado?</span>
            </div>
            <Link
              to="/cotizacion"
              className="px-8 py-3 bg-blue-400 md:bg-[#5c3a21] text-white font-bold hover:bg-[#3a2a1a] transition-all flex items-center text-center justify-center"
              aria-label="Solicitar cotización"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
              Solicitar cotización
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Marroquineria);