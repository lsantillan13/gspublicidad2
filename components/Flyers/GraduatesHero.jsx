import React, { useState, useEffect } from 'react';

const GraduatesHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('December 15, 2024 23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Celebration Confetti */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-4 bg-yellow-400 rounded-sm animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider text-white">PROMO EXCLUSIVA EGRESADOS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight flex justify-center">
            EGRESADOS 
            <span className="text-7xl px-6 text-yellow-400">
              <i> </i>25 / 26
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          
          {/* Promo Section */}
          <div className="space-y-8">
            {/* Countdown */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-500/50">
              <p className="text-center text-lg font-bold text-yellow-300 mb-4">
                ⚠️ ¡OFERTA POR TIEMPO LIMITADO!
              </p>
              <p className="text-center text-white/90 mb-4">
                Comprando antes del <span className="font-bold text-yellow-400">15 de DICIEMBRE</span>
              </p>
              
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">{timeLeft.days}</div>
                  <div className="text-xs text-white/70">DÍAS</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">{timeLeft.hours}</div>
                  <div className="text-xs text-white/70">HORAS</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                  <div className="text-xs text-white/70">MIN</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-yellow-400">{timeLeft.seconds}</div>
                  <div className="text-xs text-white/70">SEG</div>
                </div>
              </div>
            </div>

            {/* Promo Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Llevate la Campera Egresados</h3>
                  <p className="text-white/80">Diseño exclusivo promoción 2025/2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  🎁
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-1">¡REGALO EXCLUSIVO!</h3>
                  <p className="text-white/80">Gorra gabardina prelavada con logo EGRE 26</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white font-black py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/25">
              🎓 RESERVAR MI PACK EGRESADO
            </button>

            <p className="text-center text-white/60 text-sm">
              ⚡ Envíos a todo el país • 📦 Entrega express • 💳 Todas las tarjetas
            </p>
          </div>

          {/* Product Showcase */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.postimg.cc/GtkLKmJS/image.png"
                alt="Egresados 2026"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Year Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-black text-2xl px-6 py-3 rounded-full rotate-12 shadow-2xl">
                  PROMO26
                </div>
              </div>

              {/* Cap Preview */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
                    <img src="https://i.postimg.cc/653bCmWp/image-removebg-preview-1.png" />
                  </div>
                  <div>
                    <p className="text-yellow-400 font-bold">+ GORRA REGALO</p>
                    <p className="text-white/80 text-sm">Gabardina prelavada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold text-white mb-2">Diseño Exclusivo</h3>
            <p className="text-white/70 text-sm">Solo para promoción 2025/2026</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-bold text-white mb-2">Calidad Premium</h3>
            <p className="text-white/70 text-sm">Materiales de primera calidad</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-bold text-white mb-2">Envío Rápido</h3>
            <p className="text-white/70 text-sm">Recibilo antes de las fiestas</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GraduatesHero;