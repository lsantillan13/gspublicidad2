import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const GraduatesHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
  // Promo hasta el 15 de enero a las 23:59:59
  const targetDate = new Date('2026-01-15T23:59:59').getTime();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-yellow-500/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-500/10 rounded-full blur-2xl lg:blur-3xl"></div>
        
        {/* Celebration Confetti */}
        <div className="absolute inset-0 opacity-20 lg:opacity-30">
          {[...Array(10)].map((_, i) => (
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
            <span className="text-xs sm:text-sm font-bold tracking-wider text-white">PROMO EXCLUSIVA EGRESADOS</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 sm:mb-4 tracking-tight flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 lg:gap-6">
            EGRESADOS 
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400">
              25 / 26
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
          
          {/* Promo Section */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Countdown */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-yellow-500/50">
              <p className="text-center text-base sm:text-lg font-bold text-yellow-300 mb-3 sm:mb-4">
                ⚠️ ¡OFERTA POR TIEMPO LIMITADO!
              </p>
              <p className="text-center text-white/90 text-sm sm:text-base mb-3 sm:mb-4">
                Comprando antes del <span className="font-bold text-yellow-400">15 de ENERO</span>
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
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Llevate la Campera Egresados</h3>
                  <p className="text-white/80 text-sm sm:text-base">Diseño exclusivo promoción 2025/2026</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                  🎁
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-1">¡REGALO EXCLUSIVO!</h3>
                  <p className="text-white/80 text-sm sm:text-base">Gorra gabardina prelavada con logo EGRE 26</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/contacto" className='block'>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white font-black py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-2xl shadow-yellow-500/25">
              🎓 RESERVAR MI PACK EGRESADO
            </button>
            </Link>

            <p className="text-center text-white/60 text-xs sm:text-sm">
              ⚡ Envíos a todo el país • 📦 Entrega express • 💳 Todas las tarjetas
            </p>
          </div>

          {/* Product Showcase */}
          <div className="relative order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <img
                src="https://i.postimg.cc/GtkLKmJS/image.png"
                alt="Egresados 2026"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Year Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <div className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-black text-lg sm:text-xl lg:text-2xl px-4 py-2 sm:px-6 sm:py-3 rounded-full rotate-6 sm:rotate-12 shadow-lg sm:shadow-2xl">
                  PROMO26
                </div>
              </div>

              {/* Cap Preview */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 max-w-[180px] sm:max-w-none">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img 
                      src="https://i.postimg.cc/653bCmWp/image-removebg-preview-1.png" 
                      alt="Gorra regalo"
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-yellow-400 font-bold text-xs sm:text-sm">+ GORRA REGALO</p>
                    <p className="text-white/80 text-xs">Gabardina prelavada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { icon: '🎨', title: 'Diseño Exclusivo', desc: 'Solo para promoción 2025/2026' },
            { icon: '⭐', title: 'Calidad Premium', desc: 'Materiales de primera calidad' },
            { icon: '🚚', title: 'Envío Rápido', desc: 'Recibilo antes de las fiestas' }
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