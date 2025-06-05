import { caption } from 'framer-motion/client';
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const galleryItems = [
  // { src: 'https://i.postimg.cc/L56VCKKM/Untitled-Project-2.jpg', alt: 'Artículo ceremonial', caption: 'Ceremoniales' },
  // { src: 'https://i.postimg.cc/8P3sHt5Y/Untitled-Project-6.jpg', alt: 'Artículo ceremonial', caption: 'Ceremoniales' },
  // { src: 'https://i.postimg.cc/g0bj9j3q/Untitled-Project-7.jpg', alt: 'Artículo ceremonial', caption: 'Ceremoniales' },
  // { src: 'https://i.postimg.cc/BvpDZ2SB/Untitled-Project-9.jpg', alt: 'Artículo ceremonial', caption: 'Ceremoniales' },
  // { src: 'https://i.postimg.cc/7htdFKQG/Untitled-Project-10.jpg', alt: 'Artículo ceremonial', caption: 'Ceremoniales' },
  // { src: 'https://i.postimg.cc/x8RdthGM/Untitled-Project.jpg', alt: 'Artículo ceremonial', caption: 'Ceremoniales' },
  { src: null, alt: '', caption: '' }, // Placeholder for the first item
  { src: 'https://i.postimg.cc/C5FyWxgd/del-prado.jpg', alt: 'Camiseta con Logo', caption: 'Camisetas Personalizadas' },
  { src: 'https://i.postimg.cc/pX46qxPt/mate-acero-c-logo-full-color.jpg', alt: 'Camiseta con Logo', caption: 'Hogar y Tiempo Libre' },
  { src: 'https://i.postimg.cc/QdnSJ4nv/image.png', alt: 'Taza con Logo', caption: 'Regalos Corporativos' },
  { src: 'https://i.postimg.cc/Kv57hTWZ/image-1.jpg', alt: 'Bolso con Logo', caption: 'Marroquinería, Bolsos y Mochilas' },
  { src: 'https://i.postimg.cc/L6KqJ1Rf/3aeaf4c5-8604-47fd-85de-76af98862c1f.jpg', alt: 'Bolso con Logo', caption: 'Folletería y Carpetas' },
  // { src: 'https://i.postimg.cc/3Rk6Czhb/aea9e78c-2751-4c8c-bf93-9e2bcbe45750.jpg', alt: 'Medalla con Logo', caption: 'Medallas Y Trofeos' },
  { src: 'https://i.postimg.cc/sDHxDyZq/513af302-0b4a-45dc-ba1b-bb89a88b9a3f.jpg', alt: 'Medalla con Logo', caption: 'Placas, Trofeos y Medallas' },
  // { src: 'https://i.postimg.cc/brdVMTzF/image-4.jpg', alt: 'Calcomanía con Logo', caption: 'Calcomanías, Señaletica y Carteles' },
  { src: 'https://i.postimg.cc/D0r8QN03/image-8.jpg', alt: 'Calcomanía con Logo', caption: 'Cartelería, Señalética y Calcomanías' },
  { src: 'https://i.postimg.cc/TwmwGsr5/image-10.jpg', alt: 'Artículo ceremonial', caption: 'Ceremoniales y Protocolo' }, 
  { src: 'https://i.postimg.cc/zvKd4dZ7/a06683ec-a7a1-40a5-9e25-83916456d70f.jpg', alt: 'Gazebo con Logo', caption: 'Banderas, Fly Banners y Gazebos' },
  { src: 'https://i.postimg.cc/QtXGhR8V/image-12.jpg', alt: 'Gazebo con Logo', caption: 'Banners y Portabanners' },
  { src: 'https://i.postimg.cc/dV7MRcNb/carpa-spyder.jpg', alt: 'Inflable con Logo', caption: 'Tiendas e Inflables Publicitarios' },
];

const InfiniteGalleryCarousel = () => {
  const marqueeRef = useRef(null);

  // Pausar animación al pasar el mouse
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseEnter = () => marquee.style.animationPlayState = 'paused';
    const handleMouseLeave = () => marquee.style.animationPlayState = 'running';
    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicamos los ítems para el efecto infinito
  const items = [...galleryItems, ...galleryItems];

  return (
    <div className="w-full mx-auto mb-0 md:mb-16 overflow-hidden my-5 md:my-16 pb-4 md:pb-8 shadow">
      <h3 className="text-2xl font-bold text-cyan-700 underline underline-offset-8 mb-0 md:mb-8 text-center font-['Montserrat']">
        Ejemplos de Personalización
      </h3>
      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex w-max"
          style={{
            animation: 'marquee 35s linear infinite',
          }}
        >
          {items.map((item, idx) => (
            <Link to={`${item.caption.toLowerCase().replace(/\s+/g, '-')}`} className={`my-6 mx-4 w-64 flex-shrink-0 shadow-md rounded-lg hover:shadow-2xl ${item.src == null ? 'invisible w-[2px]' : 'ring-1 ring-black/30 hover:ring-yellow-600 hover:ring-2'}`}>
            <div
            key={idx}
            className=""
            >
              <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 h-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover saturate-150"
                  draggable={false}
                  />
                <div className="flex justify-center items-center align-middle h-auto p-1 py-6">
                  <p className="text-slate-800 font-semibold text-center text-xl font-['Montserrat'] align-middle items-center hover:text-blue-500">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
              </Link>
          ))}
        </div>
        {/* Animación CSS */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default InfiniteGalleryCarousel;