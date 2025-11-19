import React, { useState, useEffect } from 'react';

const SportHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const images = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  const products = [
    { icon: '👕', name: 'Camisetas Deportivas' },
    { icon: '👚', name: 'Conjuntos Deportivos' },
    { icon: '🧥', name: 'Camperas Deportivas' },
    { icon: '🌬️', name: 'Rompevientos' }
  ];

  const brands = ['Fitness', 'Del Prado', 'Independiente', 'Pacífico', 'Abril Pazos'];

  const texts = ['Vive tu Deporte con Estilo', 'Rendimiento y Calidad', 'Pasión por el Deporte'];

  // Efecto para cambiar imágenes automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Efecto para el efecto de escritura
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Fondo con imágenes */}
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Deporte ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-900/80"></div>
            </div>
          ))}
        </div>

        {/* Elementos flotantes */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/5 rounded-full animate-float"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                top: `${10 + i * 20}%`,
                left: `${5 + i * 15}%`,
                animationDelay: `${i * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="relative z-20 text-center max-w-6xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Descubre nuestra exclusiva colección de ropa deportiva: camisetas, conjuntos, camperas y rompevientos para todos los deportes. Diseño, calidad y rendimiento en cada prenda.
          </p>

          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-semibold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg mb-12">
            <i className="fas fa-shopping-bag mr-2"></i>
            Ver Colección
          </button>

          {/* Productos destacados */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-2xl group"
              >
                <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="font-semibold text-sm sm:text-base">{product.name}</h3>
              </div>
            ))}
          </div>

          {/* Marcas destacadas */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Indicadores de imagen */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-orange-500 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Sección Instagram */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Síguenos en Instagram
        </h2>
        <a
          href="https://instagram.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20"
        >
          <span className="text-2xl">📸</span>
          @tu_usuario - Ver imágenes
        </a>
      </section>

      {/* Estilos personalizados para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 15s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default SportHero;