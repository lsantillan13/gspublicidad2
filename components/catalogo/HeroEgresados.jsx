import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function HeroEgresados() {
  useEffect(() => {
    // Registra el plugin de GSAP (solo una vez)
    gsap.registerPlugin(ScrollTrigger);

    // Animación de elementos flotantes
    gsap.to(".floating-element", {
      y: 30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Animación de entrada del contenido
    gsap.from(".hero-content > *", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5
    });

    return () => {
      // Limpieza de animaciones
      gsap.killTweensOf([".floating-element", ".hero-content > *"]);
    };
  }, []);

  return (
    <section className="relative h-auto py-40 w-full overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900">
      {/* Efecto de partículas (optimizado) */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Elementos flotantes decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"
          style={{
            width: 'min(30vw, 300px)',
            height: 'min(30vw, 300px)',
            top: "10%",
            left: "5%",
            animation: "pulse 8s ease-in-out infinite alternate"
          }}
        />
        <div 
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"
          style={{
            width: 'min(20vw, 200px)',
            height: 'min(20vw, 200px)',
            bottom: '15%',
            right: '10%',
            animation: "pulse 12s ease-in-out infinite alternate-reverse"
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 hero-title">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EGRESADOS</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">2024</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 font-light tracking-widest hero-subtitle">
          TU CAMPERA EXCLUSIVA - UPD 2025
        </p>
        
        <a 
          href="#promociones" 
          className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 cta-button"
        >
          VER PROMOCIONES
        </a>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium tracking-wider year-badge">
          EDICIÓN LIMITADA
        </div>
      </div>

      {/* Efecto de scroll (opcional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">

      </div>

      {/* Estilos CSS-in-JS para las animaciones */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.95); }
          100% { opacity: 0.7; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}

export default HeroEgresados;