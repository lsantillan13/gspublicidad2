import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const GraduatesHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [stockLeft, setStockLeft] = useState(1000);
  const [currentImage, setCurrentImage] = useState(0);

  // Imágenes para el carousel
  const carouselImages = [
    {
      id: 1,
      url: 'https://i.postimg.cc/GtkLKmJS/image.png',
      alt: 'Egresados 2026/2027'
    },
    {
      id: 2,
      url: 'https://i.postimg.cc/JzLjM1w4/Whats-App-Image-2026-02-03-at-11-23-03.jpg',
      alt: 'Camperas para egresados'
    },
    {
      id: 3,
      url: 'https://i.postimg.cc/JzrtptVQ/Whats-App-Image-2026-02-03-at-11-23-03-(1).jpg',
      alt: 'Gorras personalizadas'
    }
    // {
    //   id: 4,
    //   url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    //   alt: 'Banderas de egresados'
    // },
    // {
    //   id: 5,
    //   url: 'https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    //   alt: 'Productos personalizados'
    // }
  ];

  useEffect(() => {
    // Promo hasta el 28 de febrero a las 23:59:59
    const targetDate = new Date('2026-02-28T23:59:59').getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Simular decremento de stock
  useEffect(() => {
    const interval = setInterval(() => {
      setStockLeft(prev => {
        if (prev <= 50) return prev;
        return prev - Math.floor(Math.random() * 3);
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Carousel auto-rotate
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % carouselImages.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(carouselInterval);
  }, []);

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-yellow-500/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-500/10 rounded-full blur-2xl lg:blur-3xl"></div>
        
        {/* Celebration Confetti */}
        <div className="absolute inset-0 opacity-20 lg:opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-3 sm:w-2 sm:h-4 bg-yellow-400 rounded-sm animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-white/20">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-white">PROMO EXCLUSIVA EGRESADOS 2026/2027</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 sm:mb-4 tracking-tight flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 lg:gap-6">
            🎓 EGRESADOS 
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400">
              26/27
            </span>
          </h1>
          
          <div className="space-y-2 mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-yellow-300 font-bold mb-2">
              PRIMARIO - SECUNDARIO - JARDINCITOS
            </p>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Promoción especial para todos los niveles
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start mb-8 sm:mb-12">
          
          {/* Promo Section */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Countdown */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-yellow-500/50">
              <p className="text-center text-base sm:text-lg font-bold text-yellow-300 mb-3 sm:mb-4">
                ⚠️ ¡OFERTA POR TIEMPO LIMITADO!
              </p>
              <p className="text-center text-white/90 text-sm sm:text-base mb-3 sm:mb-4">
                Comprando tu <strong className="text-white">Campera</strong> o <strong className="text-white">Buzo</strong> antes del <span className="font-bold text-yellow-400">28 de Febrero</span>
              </p>
              
              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                {[
                  { value: timeLeft.days, label: 'DÍAS' },
                  { value: timeLeft.hours, label: 'HORAS' },
                  { value: timeLeft.minutes, label: 'MIN' },
                  { value: timeLeft.seconds, label: 'SEG' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-2 sm:p-3">
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400">{item.value}</div>
                    <div className="text-xs text-white/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo Details */}
            <div className="space-y-4 sm:space-y-6">
              {/* Regalo Gorra */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                  🎁
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-1">¡TE LLEVAS DE REGALO!</h3>
                  <p className="text-white/80 text-sm sm:text-base">∙ La Camiseta de Egresados de la Selección Argentina</p>
                  <p className="text-white/80 text-sm sm:text-base">∙ Gorra TOP Gabardina Prelavada con logo EGRE26/27</p>
                </div>
              </div>

              {/* Regalo Bandera */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                  🏳️
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">¡Y TAMBIÉN!</h3>
                  <p className="text-white/80 text-sm sm:text-base">La bandera de regalo con la foto de todos ustedes</p>
                </div>
              </div>

              {/* Diseño Personalizado */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                  ✨
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">¡Diseños Personalizados!</h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    <span className="text-yellow-300 font-semibold">
                      Diseñamos tus ideas al lujo de detalle
                    </span>
                  </p>
                  <p className="text-white/70 text-xs mt-1">
                    Comunicate y te vas a sorprender viendo todos los modelos que tenemos para ofrecerte
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Link to="/contacto" className='block'>
                <button className="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white font-black py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40">
                  🎓 RESERVAR MI PACK EGRESADO
                </button>
              </Link>

              <Link to="/egresados" className='block'>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 border-2 border-blue-400/30">
                  VER CATÁLOGO COMPLETO EGRESADOS
                </button>
              </Link>
            </div>
          </div>

          {/* Product Showcase - CAROUSEL */}
          <div className="relative order-1 lg:order-2">
            {/* Carousel Container */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              {/* Imagen del Carousel */}
              <div className="relative h-72 sm:h-80 md:h-[420px] lg:h-[480px]">
                {carouselImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover position-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Número de imagen (1, 2, 3, 4, 5) */}
                    {/* <div className="absolute top-4 left-4">
                      <div className="bg-black/60 text-white font-bold text-sm sm:text-base rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div> */}
                  </div>
                ))}
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                  <div className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-black text-lg sm:text-xl lg:text-2xl px-4 py-2 sm:px-6 sm:py-3 rounded-full rotate-6 sm:rotate-12 shadow-lg sm:shadow-2xl">
                    EGRESADOS 26/27
                  </div>
                </div>

                {/* Botones de navegación */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
                  aria-label="Siguiente imagen"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicadores (puntos) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentImage 
                          ? 'bg-yellow-400 w-6 sm:w-8' 
                          : 'bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Condiciones de Promo */}
            <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-600/30 mt-4">
              <div className="text-center space-y-2">
                <p className="text-yellow-300 text-sm font-bold">
                  ⭐ PROMO VÁLIDA SI ENCARGAS ANTES DEL 28 DE FEBRERO ⭐
                </p>
                <p className="text-white/70 text-xs">
                  * Aplica para primario, secundario y jardincitos *
                </p>
                <p className="text-white/70 text-xs">
                  * Envíos a todo el país • Entrega express *
                </p>
                <p className="text-white/70 text-xs">
                  * Promo hasta agotar 1000 camisetas *
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { 
              icon: '👨‍🎓👩‍🎓', 
              title: 'Todos los Niveles', 
              desc: 'Primario - Secundario - Jardincitos' 
            },
            { 
              icon: '🎨', 
              title: 'Diseño Exclusivo', 
              desc: 'Solo para promoción 2026/2027' 
            },
            { 
              icon: '⭐', 
              title: 'Calidad Premium', 
              desc: 'Materiales de primera calidad' 
            },
            { 
              icon: '📦', 
              title: 'Envío Express', 
              desc: 'A todo el país • Entrega rápida' 
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{feature.icon}</div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-white/70 text-xs sm:text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default GraduatesHero;