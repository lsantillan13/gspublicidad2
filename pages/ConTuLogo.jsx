import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Geder from '../components/Geder';
import Footer from '../components/Footer';
import GalleryCarousel from '../components/GalleryCarousel'; // Assuming you have a GalleryCarousel component

const DesignsWithYourLogo = () => {
  const steps = [
    {
      title: 'Envía tu Logo',
      description: 'Sube tu logo en formato vectorial (.AI, .PDF, .SVG) o en alta resolución a través de nuestro formulario de contacto.',
      icon: (
        <svg className="h-10 w-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      title: 'Diseñamos una Propuesta',
      description: 'Nuestro equipo crea un diseño personalizado con tu logo en el producto elegido y te envía una muestra digital para aprobación.',
      icon: (
        <svg className="h-10 w-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: 'Producción y Entrega',
      description: 'Una vez aprobado, producimos tu pedido con la más alta calidad y lo entregamos en 7-15 días hábiles, o más rápido con servicio express.',
      icon: (
        <svg className="h-10 w-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  const galleryItems = [
    { src: 'https://i.postimg.cc/C5FyWxgd/del-prado.jpg', alt: 'Camiseta con Logo', caption: 'Camisetas Personalizadas' },
    { src: 'https://i.postimg.cc/QdnSJ4nv/image.png', alt: 'Taza con Logo', caption: 'Tazas Corporativas' },
    { src: 'https://i.postimg.cc/G2zjn0WB/1a3d7dbc-9e0c-4318-b96e-be3a4fc95445.jpg', alt: 'Cartel con Logo', caption: 'Cartelería' },
    { src: 'http://gspublicidad.com.ar/wp-content/uploads/2020/04/116-203_1-400x400.jpg', alt: 'Bolso con Logo', caption: 'Marroquinería' },
    { src: 'https://i.postimg.cc/t4nPqS4N/logo.png', alt: 'Camiseta con Logo', caption: 'MEDALLAS Y TROFEOS' },
    { src: 'https://i.postimg.cc/t4nPqS4N/logo.png', alt: 'Taza con Logo', caption: 'CALCOMANIAS' },
    { src: 'https://i.postimg.cc/t4nPqS4N/logo.png', alt: 'Cartel con Logo', caption: 'INFLABLES' },
    { src: 'https://i.postimg.cc/t4nPqS4N/logo.png', alt: 'Bolso con Logo', caption: 'CEREMONIALES' },
    { src: 'https://i.postimg.cc/t4nPqS4N/logo.png', alt: 'Bolso con Logo', caption: 'GAZEBOS BANNERS Y BANDERAS' },
    // FOLLETERÍAS { src: 'https://i.postimg.cc/t4nPqS4N/logo.png', alt: 'Bolso con Logo', caption: 'GAZEBOS BANNERS Y BANDERAS' },
  ];

  return (
    <>
    <Geder/>
    <section className="bg-gradient-to-b from-gray-100 to-blue-50 py-8 md:py-16 min-h-screen pt-32 md:pt-40">
    <div className="block md:hidden w-100 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center text-cyan-700 md:mb-3 mb-3 font-['Montserrat'] uppercase tracking-tight"
        >
          Diseños con tu Logo
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-4xl font-bold text-center text-slate-700 md:mb-6 mb-3 font-['Montserrat'] uppercase tracking-tight"
        >
          Para que tu marca se vea
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-700 mb-2 text-sm sm:text-base max-w-3xl mx-auto"
        >
          Personaliza tus productos con el logo de tu marca y haz que destaque. Desde indumentaria hasta cartelería, ofrecemos soluciones únicas para tu negocio.
        </motion.p>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto mb-0 md:mb-16">
          <h3 className="text-2xl font-bold text-gray-800 my-4 md:my-6 text-center font-['Montserrat']">Nuestro Proceso</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-xl p-2 mb:p-6 text-center border-t-4 border-orange-400 hover:shadow-xl transition-all duration-300"
              >
                <span className="flex justify-center mb-4">
                  <div className="mb-4 text-center">{step.icon}</div>
                </span>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        {/* <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center font-['Montserrat']">Ejemplos de Personalización</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#e9e9e1] rounded-lg shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-gradient-to-t from-blue-100 to-white">
                  <p className="text-gray-700 font-semibold text-center">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        <GalleryCarousel /> 

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-700 mb-3 pt-4 md:pt-0 text-sm sm:text-base">
            ¿Listo para personalizar tu marca? ¡Contáctanos hoy mismo!
          </p>
          <Link
            to="/contacto"
            className="inline-block px-8 py-4 bg-cyan-600 to-blue-800 text-white font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Comenzar Ahora
          </Link>
        </motion.div>
      </div>
    </section>
                <Footer />
                </>
  );
};

export default DesignsWithYourLogo;