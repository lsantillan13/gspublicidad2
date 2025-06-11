import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Geder from '../components/Geder';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus(null), 3000);
    }, 1000);
  };

  return (
    <>
      <Geder />
      <section className="py-16 min-h-screen md:pt-40 bg-[#181e29] relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {/* bg-gradient-to-br {from-[#232b3e] via-[#181e29] to-[#232b3e]} */}
          <div className="absolute inset-0" />
          <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" viewBox="0 0 1440 900" fill="none">
            <defs>
              <linearGradient id="lineGrad2" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
                <stop stopColor="#bfa046" />
                <stop offset="1" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            {[...Array(6)].map((_, i) => (
              <line
                key={i}
                x1={0}
                y1={120 + i * 120}
                x2={1440}
                y2={80 + i * 120}
                stroke="url(#lineGrad2)"
                strokeWidth="1"
                opacity="0.07"
              />
            ))}
          </svg>
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-[#bfa046]/20 to-transparent blur-2xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tr from-[#0ea5e9]/10 to-transparent blur-2xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center text-[#fbbf24] my-3 font-['Montserrat'] uppercase tracking-tight drop-shadow"
          >
            Contáctanos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-200 mb-8 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Estamos aquí para ayudarte con tus proyectos de publicidad gráfica. Completa el formulario o contáctanos directamente por teléfono, correo o redes sociales.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#232b3e]/80 rounded-2xl shadow-xl p-8 border border-[#bfa046]/30 backdrop-blur-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-[#bfa046]/30 bg-[#181e29]/60 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bfa046] shadow-sm transition-all duration-300"
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
                    className="w-full px-4 py-3 rounded-lg border border-[#bfa046]/30 bg-[#181e29]/60 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bfa046] shadow-sm transition-all duration-300"
                    placeholder="tuemail@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#fbbf24] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#bfa046]/30 bg-[#181e29]/60 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bfa046] shadow-sm transition-all duration-300"
                    placeholder="0299 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#fbbf24] mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-[#bfa046]/30 bg-[#181e29]/60 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bfa046] shadow-sm transition-all duration-300"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#bfa046] text-[#232b3e] font-semibold rounded-lg hover:bg-[#0ea5e9] hover:text-white transition-colors shadow-md hover:shadow-lg uppercase tracking-wide"
                >
                  Enviar Mensaje
                </button>
              </form>
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-center text-green-400 font-semibold"
                  >
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info and Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <div className="bg-[#232b3e]/80 rounded-2xl shadow-xl p-8 border border-[#bfa046]/30 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#fbbf24] mb-4 font-['Montserrat']">
                  Información de Contacto
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-200">
                    <svg className="h-5 w-5 mr-3 text-[#bfa046]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <a
                      href="https://g.co/kgs/88ZDLWa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0ea5e9] transition-colors"
                    >
                      San Martín 4379, Neuquén
                    </a>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <svg className="h-5 w-5 mr-3 text-[#bfa046]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+549299549-9076" className="hover:text-[#0ea5e9] transition-colors">
                      +54 9 2995 49-9076
                    </a>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <svg className="h-5 w-5 mr-3 text-[#bfa046]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href="mailto:consulogo@gspublicidad.com.ar"
                      className="hover:text-[#0ea5e9] transition-colors"
                    >
                      consulogo@gspublicidad.com.ar
                    </a>
                  </li>
                </ul>
                {/* Social Media Links */}
                <div className="mt-6 flex space-x-4">
                  <a
                    href="#"
                    className="px-4 py-2 bg-[#bfa046] text-[#232b3e] rounded-full hover:bg-[#0ea5e9] hover:text-white transition-colors"
                  >
                    <i className="text-2xl fab fa-facebook-f hover:text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-[#bfa046] text-[#232b3e] rounded-full hover:bg-purple-500 hover:text-white transition-colors"
                  >
                    <i className="text-2xl fab fa-instagram hover:text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-[#bfa046] text-[#232b3e] rounded-full hover:bg-green-500 hover:text-white transition-colors"
                  >
                    <i className="text-2xl fab fa-whatsapp hover:text-white"></i>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-[#232b3e]/80 rounded-2xl shadow-xl overflow-hidden border border-[#bfa046]/30 backdrop-blur-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7896846851287!2d-68.09413968417847!3d-38.95167897956375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a32e2f8b8e5b7%3A0x9b8c7f6e2a3b4c5d!2sSan%20Mart%C3%ADn%204379%2C%20Q8300%20Neuqu%C3%A9n%2C%20Argentina!5e0!3m2!1ses!2sar!4v1697654321098!5m2!1ses!2sar"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de GS Publicidad"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;