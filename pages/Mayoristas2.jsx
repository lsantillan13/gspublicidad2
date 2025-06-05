import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Geder from '../components/Geder';

const EgresadosMayoristas2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'egresados',
    quantity: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('egresados');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de envío
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', type: 'egresados', quantity: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  const benefits = {
    egresados: [
      {
        title: 'Diseños Exclusivos',
        description: 'Creamos indumentaria única para tu promoción con diseños personalizados y tu logo.',
        icon: (
          <svg className="h-12 w-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        ),
      },
      {
        title: 'Precios Graduación',
        description: 'Descuentos especiales de hasta 30% para grupos de egresados.',
        icon: (
          <svg className="h-12 w-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        title: 'Kit Completo',
        description: 'Buzos, remeras, accesorios y más - todo coordinado para tu promoción.',
        icon: (
          <svg className="h-12 w-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
      },
    ],
    mayoristas: [
      {
        title: 'Descuentos por Volumen',
        description: 'Hasta 40% de descuento en pedidos mayores a 100 unidades.',
        icon: (
          <svg className="h-12 w-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        ),
      },
      {
        title: 'Catálogo Exclusivo',
        description: 'Acceso a productos premium no disponibles al público general.',
        icon: (
          <svg className="h-12 w-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        ),
      },
      {
        title: 'Soporte Prioritario',
        description: 'Asesor dedicado y tiempos de producción acelerados.',
        icon: (
          <svg className="h-12 w-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 12v.01" />
          </svg>
        ),
      },
    ],
  };

  const galleryItems = [
    { 
      src: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 
      alt: 'Buzos para Egresados', 
      caption: 'Buzos Personalizados',
      category: 'egresados'
    },
    { 
      src: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 
      alt: 'Tazas Personalizadas', 
      caption: 'Regalos Corporativos',
      category: 'mayoristas'
    },
    { 
      src: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 
      alt: 'Cartelería', 
      caption: 'Señalización Premium',
      category: 'mayoristas'
    },
    { 
      src: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 
      alt: 'Accesorios', 
      caption: 'Marroquinería Ejecutiva',
      category: 'egresados'
    },
  ];

  const filteredGallery = galleryItems.filter(item => 
    activeTab === 'all' || item.category === activeTab
  );

  return (
    <>
      <Geder />
      
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 bg-gradient-to-b from-blue-900 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">
                Programas Exclusivos
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto my-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Soluciones personalizadas para egresados y condiciones especiales para mayoristas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1 shadow-md border border-gray-200">
              <button
                onClick={() => setActiveTab('egresados')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'egresados' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-md' : 'text-gray-700 hover:text-amber-500'}`}
              >
                Para Egresados
              </button>
              <button
                onClick={() => setActiveTab('mayoristas')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'mayoristas' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-500'}`}
              >
                Para Mayoristas
              </button>
            </div>
          </div>

          {/* Benefits Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits[activeTab].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Nuestros <span className="text-amber-500">Productos</span> Destacados
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                    item.category === 'egresados' ? 'bg-amber-500' : 'bg-blue-500'
                  }`}>
                    {item.category === 'egresados' ? 'Egresados' : 'Mayoristas'}
                  </span>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800 text-center">{item.caption}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="md:flex">
                {/* Form Side */}
                <div className="md:w-1/2 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Solicita tu Cotización</h3>
                  <p className="text-gray-600 mb-6">Completa el formulario y te responderemos en menos de 24 horas</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Cliente *</label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                      >
                        <option value="egresados">Egresados</option>
                        <option value="mayoristas">Mayorista/Revendedor</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad Estimada</label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                        placeholder="Ej: 50 unidades"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Detalles *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                        placeholder="Describe tu proyecto o necesidades..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        'Enviar Solicitud'
                      )}
                    </button>
                  </form>
                  
                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm"
                      >
                        ¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Info Side */}
                <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 text-white flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-3">¿Por qué elegirnos?</h3>
                    <p className="opacity-90">Más de 15 años creando productos personalizados de alta calidad para egresados y mayoristas.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="h-6 w-6 text-amber-300 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-bold">Calidad Premium</h4>
                        <p className="text-sm opacity-80">Materiales de primera calidad que duran</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="h-6 w-6 text-amber-300 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-bold">Entrega Rápida</h4>
                        <p className="text-sm opacity-80">Plazos de producción más cortos del mercado</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="h-6 w-6 text-amber-300 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <div>
                        <h4 className="font-bold">Precios Competitivos</h4>
                        <p className="text-sm opacity-80">Las mejores condiciones para mayoristas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Contáctanos hoy mismo y descubre cómo podemos hacer realidad tus ideas.
          </p>
          <Link
            to="/contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg hover:shadow-xl"
          >
            Hablar con un Asesor
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EgresadosMayoristas2;