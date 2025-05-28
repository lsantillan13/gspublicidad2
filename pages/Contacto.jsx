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
    // Simulación de envío (puedes integrar con una API real aquí)
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus(null), 3000);
    }, 1000);
  };

  return (
    <>
    <Geder/>
    <section className="py-16 min-h-screen pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 font-['Montserrat'] uppercase tracking-tight"
          >
          Contáctanos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 text-sm sm:text-base max-w-2xl mx-auto"
        >
          Estamos aquí para ayudarte con tus proyectos de publicidad gráfica. Completa el formulario o contáctanos directamente por teléfono, correo o redes sociales.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 sm:p-8"
            >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-300"
                  placeholder="Tu nombre completo"
                  />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-300"
                  placeholder="tuemail@ejemplo.com"
                  />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-300"
                  placeholder="0299 123 4567"
                  />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-300"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
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
                  className="mt-4 text-center text-green-600 font-semibold"
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
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-['Montserrat']">
                Información de Contacto
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="h-5 w-5 mr-3 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                  </svg>
                  <a
                    href="https://g.co/kgs/88ZDLWa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    San Martín 4379, Neuquén
                  </a>
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="h-5 w-5 mr-3 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                  </svg>
                  <a href="tel:02994453005" className="hover:text-blue-600 transition-colors">
                    0299 4453005
                  </a>
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="h-5 w-5 mr-3 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                  </svg>
                  <a
                    href="mailto:consulogo@gspublicidad.com.ar"
                    className="hover:text-blue-600 transition-colors"
                    >
                    consulogo@gspublicidad.com.ar
                  </a>
                </li>
              </ul>
              {/* Social Media Links */}
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                  >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="#"
                  className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                  >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <Footer/>
                </>
  );
};

export default Contact;