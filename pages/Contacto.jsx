import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Geder from '../components/Geder';
import Footer from '../components/Footer';

// Inicializar EmailJS con tu User ID (necesitarás crear una cuenta en emailjs.com)
emailjs.init("TU_USER_ID"); // Reemplazar con tu User ID real

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    type: null, // 'success', 'error', 'sending'
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const time = now.toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit'
    });
    return `${time} del ${date}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Por favor completa todos los campos obligatorios'
      });
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Por favor ingresa un correo electrónico válido'
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({
      type: 'sending',
      message: 'Enviando mensaje...'
    });

    try {
      // Estructura del mensaje
      const emailContent = `
De: ${formData.name}
A las: ${formatCurrentDateTime()}
Correo: ${formData.email}
Teléfono: ${formData.phone || 'No proporcionado'}

Propósito/Consulta/Mensaje:
${formData.message}

---
Mensaje enviado desde el formulario de contacto de GS Publicidad
      `.trim();

      // Enviar usando EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',     // Reemplazar con tu Service ID
        'YOUR_TEMPLATE_ID',    // Reemplazar con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'lautisantillan@hotmail.com',
          message: emailContent,
          phone: formData.phone || 'No proporcionado',
          date_time: formatCurrentDateTime(),
          subject: `Nuevo contacto de ${formData.name} - GS Publicidad`
        }
      );

      if (result.status === 200) {
        setFormStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Te contactaremos pronto.'
        });
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          setFormStatus({ type: null, message: '' });
        }, 5000);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error enviando email:', error);
      setFormStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Configuración para modo de prueba (sin EmailJS)
  const handleTestSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setFormStatus({
      type: 'sending',
      message: 'Enviando mensaje de prueba...'
    });

    // Simular envío
    setTimeout(() => {
      console.log('Mensaje de prueba:', {
        to: 'lautisantillan@hotmail.com',
        from: formData.email,
        content: `De: ${formData.name}\nA las: ${formatCurrentDateTime()}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone || 'No proporcionado'}\n\nPropósito/Consulta/Mensaje:\n${formData.message}`
      });

      setFormStatus({
        type: 'success',
        message: 'Mensaje de prueba enviado (modo desarrollo)'
      });
      
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Geder />
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#181e29] to-gray-900 overflow-hidden">
        {/* Fondo animado mejorado */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Gradiente animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#232b3e] via-[#181e29] to-[#232b3e] animate-gradient-x" />
          
          {/* Patrón de líneas dinámico */}
          <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" viewBox="0 0 1440 900">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bfa046" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#bfa046" stopOpacity="0.1" />
              </linearGradient>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#lineGrad)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Partículas flotantes */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          {/* Luces de fondo */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#bfa046]/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-[#0ea5e9]/15 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:pt-32">
          {/* Header Section mejorado */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#bfa046]/20 to-[#0ea5e9]/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 mb-6">
              <span className="w-2 h-2 bg-[#bfa046] rounded-full animate-pulse"></span>
              <span className="text-[#bfa046] text-sm font-semibold uppercase tracking-wider">
                Contacto Directo
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Montserrat'] uppercase tracking-tight">
              Transforma tu <span className="bg-gradient-to-r from-[#bfa046] to-[#0ea5e9] bg-clip-text text-transparent">Visibilidad</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Comunícate con nosotros y descubre cómo podemos llevar tu marca al siguiente nivel con soluciones gráficas innovadoras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form mejorado */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bfa046] to-[#0ea5e9] rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-[#bfa046] to-[#0ea5e9] rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Montserrat']">Envía tu Consulta</h3>
                </div>

                <form onSubmit={process.env.NODE_ENV === 'development' ? handleTestSubmit : handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        Nombre Completo *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#bfa046] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Juan Pérez"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        Correo Electrónico *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#bfa046] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="ejemplo@email.com"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#bfa046] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="+54 9 299 123 4567"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Mensaje / Consulta *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        rows="6"
                        className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#bfa046] focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Descríbenos tu proyecto o consulta..."
                      />
                      <div className="absolute left-4 top-4">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative px-6 py-4 bg-gradient-to-r from-[#bfa046] to-[#0ea5e9] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#bfa046]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar Mensaje
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#bfa046] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      * Campos obligatorios
                      {process.env.NODE_ENV === 'development' && (
                        <span className="block text-xs text-amber-400 mt-1">
                          Modo desarrollo: Mensajes van a la consola
                        </span>
                      )}
                    </p>
                  </div>
                </form>

                <AnimatePresence>
                  {formStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-6 p-4 rounded-xl border ${
                        formStatus.type === 'success' 
                          ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                          : formStatus.type === 'error'
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {formStatus.type === 'success' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {formStatus.type === 'error' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {formStatus.type === 'sending' && (
                          <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        )}
                        <span className="font-medium">{formStatus.message}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact Info and Map mejorado */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Información de contacto */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-r from-[#bfa046] to-[#0ea5e9] rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Montserrat']">Información de Contacto</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors group">
                    <div className="p-3 bg-gradient-to-br from-[#bfa046]/20 to-[#bfa046]/10 rounded-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-[#bfa046]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Dirección</h4>
                      <a
                        href="https://goo.gl/maps/88ZDLWa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#0ea5e9] transition-colors"
                      >
                        San Martín 4379, Neuquén, Argentina
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Atención de Lunes a Viernes 9:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors group">
                    <div className="p-3 bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/10 rounded-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Teléfono</h4>
                      <a href="tel:+5492995499076" className="text-gray-300 hover:text-[#0ea5e9] transition-colors text-lg font-medium">
                        +54 9 2995 49-9076
                      </a>
                      <p className="text-sm text-gray-500 mt-1">WhatsApp disponible</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors group">
                    <div className="p-3 bg-gradient-to-br from-[#bfa046]/20 to-[#0ea5e9]/20 rounded-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Correo Electrónico</h4>
                      <a
                        href="mailto:consulogo@gspublicidad.com.ar"
                        className="text-gray-300 hover:text-[#0ea5e9] transition-colors text-lg font-medium"
                      >
                        consulogo@gspublicidad.com.ar
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Respondemos en menos de 24 horas</p>
                    </div>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-semibold text-white mb-4">Síguenos en Redes</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: 'facebook-f', color: 'bg-blue-600 hover:bg-blue-700', link: '#' },
                      { icon: 'instagram', color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90', link: '#' },
                      { icon: 'whatsapp', color: 'bg-green-600 hover:bg-green-700', link: 'https://wa.me/5492995499076' },
                      { icon: 'linkedin-in', color: 'bg-blue-700 hover:bg-blue-800', link: '#' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} w-12 h-12 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        aria-label={`Ir a ${social.icon}`}
                      >
                        <i className={`fab fa-${social.icon} text-lg`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white font-['Montserrat'] flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#bfa046]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Nuestra Ubicación
                  </h3>
                </div>
                <div className="relative h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7896846851287!2d-68.09413968417847!3d-38.95167897956375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a32e2f8b8e5b7%3A0x9b8c7f6e2a3b4c5d!2sSan%20Mart%C3%ADn%204379%2C%20Q8300%20Neuqu%C3%A9n%2C%20Argentina!5e0!3m2!1ses!2sar!4v1697654321098!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de GS Publicidad"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
                </div>
                <div className="p-4 bg-gray-900/50 text-center">
                  <p className="text-sm text-gray-400">Haz clic en el mapa para abrir en Google Maps</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      
      <style jsx='true'>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-20px); }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        /* Mejoras de scroll */
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        
        /* Mejoras de focus */
        :focus-visible {
          outline: 2px solid #bfa046;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

export default Contact;