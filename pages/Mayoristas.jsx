import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Geder from '../components/Geder';

const EgresadosMayoristas = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'egresados',
    quantity: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', type: 'egresados', quantity: '', message: '' });
      setTimeout(() => setFormStatus(null), 3000);
    }, 1000);
  };

  const benefits = {
    egresados: [
      {
        title: 'Diseños Personalizados',
        description: 'Crea indumentaria única para tu promoción con tu logo o diseño especial.',
        icon: (
          <svg className="h-10 w-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        ),
      },
      {
        title: 'Precios Especiales',
        description: 'Descuentos exclusivos para grupos de egresados, con opciones para todos los presupuestos.',
        icon: (
          <svg className="h-10 w-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        title: 'Entrega Rápida',
        description: 'Producción y entrega en 45-60 días hábiles.',
        icon: (
          <svg className="h-10 w-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        ),
      },
    ],
    mayoristas: [
      {
        title: 'Descuentos por Volumen',
        description: 'Precios competitivos para pedidos grandes, ideales para revendedores y empresas. con opciones express para eventos urgentes.',
        icon: (
          <svg className="h-10 w-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        title: 'Variedad de Productos',
        description: 'Amplio catálogo de indumentaria, regalos corporativos, cartelería y más para tus necesidades.',
        icon: (
          <svg className="h-10 w-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
      },
      {
        title: 'Asesoramiento Personalizado',
        description: 'Nuestro equipo te ayudará a elegir los mejores productos para tu negocio.',
        icon: (
          <svg className="h-10 w-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
      },
    ],
  };

  const galleryItems = [
    { src: 'https://i.postimg.cc/qqk7vQpB/image.png', alt: 'Buzo de Egresados', caption: 'Buzos para Egresados' },
    { src: 'https://i.postimg.cc/qMfTvW5Q/image.png', alt: 'Taza Corporativa', caption: 'Regalos Corporativos' },
    { src: 'https://i.postimg.cc/D0r8QN03/image-8.jpg', alt: 'Cartel Mayorista', caption: 'Cartelería Mayorista' },
    { src: 'https://i.postimg.cc/Vks82hFc/Copilot-20250605-182029.png', alt: 'Bolsa Personalizada', caption: 'Marroquinería' },
    { src: 'https://i.postimg.cc/MX2xFqsr/Buzo-circus-rompeviento-impermeable.jpg', alt: 'Campera alta montaña', caption: 'Camperas y Canguros Alta Montaña' },
    { src: 'https://i.postimg.cc/s2VWLRqX/6f9aeaca-0d6a-43b9-8b1a-0b0cd23a98ed.jpg', alt: 'Campera friza algodón', caption: 'Camperas y Canguros Friza Algodón' },
    { src: 'https://i.postimg.cc/gcqnf7yL/Campera-laycra-termica-sublimada.jpg', alt: 'Campera sublimada', caption: 'Camperas y Canguros Sublimadas Full Color' },
    { src: 'https://i.postimg.cc/1RdV0dQk/Camiseta-en-set-deportivo-y-pantal-n-deportivo-en-laycra-termica.jpg', alt: 'Camisetas deportivas', caption: 'Camisetas Deportivas y Remeras' },
    { src: 'https://i.postimg.cc/CKtdCByj/Gorra-trucker-celeste-frente-blanco.jpg', alt: 'Gorras y sombreros', caption: 'Gorras - Sombreros - Pilusos' },
    { src: 'https://i.postimg.cc/fW7Tygb7/Botella-pl-stica-transparente-color-celeste-pastel-y-naranja-asrt-bot.jpg', alt: 'Botellas y tazas', caption: 'Botellas - Tazas - Jarros' },
    { src: 'https://i.postimg.cc/7hJ3M8QL/promo.jpg', alt: 'Artículos promocionales', caption: 'Artículos en Promo con Compra de Campera o Buzo' },
  ];

  // Duplicamos los ítems para el efecto infinito
  const items = [...galleryItems, ...galleryItems];

  return (
    <>
      <Geder/>
      <section className="py-8 md:py-16 min-h-screen pt-32 md:pt-40">
        <div className="block md:hidden w-100 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center text-cyan-700 md:my-6 my-3 font-['Montserrat'] uppercase tracking-tight"
          >
            Egresados y Mayoristas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-700 mb-2 text-sm sm:text-base max-w-3xl mx-auto"
          >
            Diseños únicos para egresados y precios competitivos para mayoristas. ¡Personaliza tus productos y haz que tu marca o promoción destaque!
          </motion.p>

          {/* Benefits Section */}
          <div className="max-w-6xl mx-auto mb-1 md:mb-8">
            <h3 className="text-2xl font-bold text-gray-800 my-4 md:my-6 text-center font-['Montserrat']">Beneficios Exclusivos</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Egresados Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-2xl p-6 border-t-4 border-orange-400"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-4 font-['Montserrat']">Para Egresados</h4>
                <div className="space-y-6">
                  {benefits.egresados.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="mr-4">{benefit.icon}</div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800">{benefit.title}</h5>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mayoristas Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg md:shadow-2xl p-6 border-t-4 border-cyan-600"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-4 font-['Montserrat']">Para Mayoristas</h4>
                <div className="space-y-6">
                  {benefits.mayoristas.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="mr-4">{benefit.icon}</div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800">{benefit.title}</h5>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Gallery Section with Infinite Carousel */}
          <div className="w-full mx-auto mb-4 overflow-hidden my-1">
            <h3 className="text-3xl font-bold text-cyan-700 my-2 underline underline-offset-8 text-center text-clip font-['Montserrat']">Nuestros Productos</h3>
            <div className="relative w-full overflow-hidden">
              <div
                ref={marqueeRef}
                className="flex w-max"
                style={{
                  animation: 'marquee 30s linear infinite',
                }}
              >
                {items.map((item, idx) => (
                  <Link 
                    to={`${item.caption.toLowerCase().replace(/\s+/g, '-')}`} 
                    key={idx}
                    className="my-6 mx-4 w-64 flex-shrink-0 shadow-md rounded-lg hover:shadow-2xl ring-1 ring-black/30 hover:ring-yellow-600 hover:ring-2 transition-all duration-300"
                  >
                    <div className="bg-white rounded-lg overflow-hidden h-full">
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

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-[#181e29] rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-yellow-400"
          >

            <h3 className="text-xl font-bold text-[#fbbf24] mb-6 text-center font-['Montserrat']">Solicita una Cotización</h3>
            <form onSubmit={handleSubmit} className="space-y-6 ">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#fbbf24] mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-400 bg-[#181e29]/60  shadow-sm transition-all duration-300 hover:border-blue-500"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#fbbf24] mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-400 bg-[#181e29]/60  shadow-sm transition-all duration-300 hover:border-blue-500"
                  placeholder="tuemail@ejemplo.com"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-[#fbbf24] mb-2">
                  Tipo de Cliente *
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-400 bg-[#181e29]/60  shadow-sm transition-all duration-300 hover:border-blue-500"
                >
                  <option value="egresados" className="placeholder:text-white">Egresados</option>
                  <option value="mayoristas">Mayoristas</option>
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-semibold text-[#fbbf24] mb-2">
                  Cantidad Estimada
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-400 bg-[#181e29]/60  shadow-sm transition-all duration-300 hover:border-blue-500"
                  placeholder="Ej: 50 unidades"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#fbbf24] mb-2">
                  Detalles del Proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-400 bg-[#181e29]/60  shadow-sm transition-all duration-300 hover:border-blue-500"
                  placeholder="Describe tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Solicitar Cotización
              </button>
            </form>
            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-center text-green-500 font-semibold bg-green-100 py-2 rounded-lg"
                >
                  ¡Solicitud enviada con éxito! Te contactaremos pronto.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-4 md:mt-12"
          >
            <p className="text-gray-700 mb-3 md:mb-6 text-sm sm:text-base">
              ¿Listo para llevar tu proyecto al siguiente nivel? ¡Contáctanos hoy!
            </p>
            <Link
              to="/contacto"
              className="inline-block outline bg-cyan-600 px-8 py-4 text-white font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Más Información
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default EgresadosMayoristas;