import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Geder from '../components/Geder';
import Footer from '../components/Footer';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Qué tipo de productos ofrece GS Publicidad?',
      answer:
        'Ofrecemos soluciones en publicidad gráfica personalizada, incluyendo indumentaria, calzados, regalos corporativos, cartelería y marroquinería. Todos nuestros productos son personalizables con el logo de tu marca.',
    },
    {
      question: '¿Cómo funciona el proceso de personalización con mi logo?',
      answer:
        'Envíanos tu logo en formato vectorial (.AI, .PDF) a través de nuestro formulario de contacto. Nuestro equipo diseñará una propuesta personalizada y te enviará una muestra digital para aprobación antes de la producción.',
    },
    {
      question: '¿Ofrecen descuentos para pedidos mayoristas o egresados?',
      answer:
        'Sí, contamos con descuentos para pedidos mayoristas y egresados. Contáctanos al 0299 4453005 o por correo a consulogo@gspublicidad.com.ar para una cotización personalizada.',
    },
    {
      question: '¿Cuáles son los tiempos de entrega?',
      answer:
        'Los tiempos de entrega varían entre 7 y 15 días hábiles, dependiendo del producto y personalización. Ofrecemos opciones express, sujetas a disponibilidad. Consulta con nosotros para detalles.',
    },
    {
      question: '¿Puedo solicitar una muestra antes de un pedido grande?',
      answer:
        'Sí, ofrecemos muestras físicas con un costo adicional, que se descuenta si confirmas el pedido completo. Contáctanos para coordinar este proceso.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer:
        'Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos en efectivo para entregas locales en Neuquén. Comunícate para más detalles.',
    },
    {
      question: '¿Realizan envíos a todo el país?',
      answer:
        'Sí, enviamos a toda Argentina con servicios de logística confiables. Los costos de envío se calculan según la ubicación y el volumen del pedido.',
    },
    {
      question: '¿Qué garantía ofrecen sobre sus productos?',
      answer:
        'Garantizamos la calidad de nuestros productos. Ofrecemos reposición o reembolso dentro de los 30 días por defectos de fabricación, siempre que el producto no haya sido usado.',
    },
    {
      question: '¿Cómo contactarlos para un proyecto personalizado?',
      answer:
        'Contáctanos vía formulario en "Contacto", por correo a consulogo@gspublicidad.com.ar, por teléfono al 0299 4453005, o en San Martín 4379, Neuquén.',
    },
    {
      question: '¿Ofrecen asesoramiento para elegir productos para mi marca?',
      answer:
        'Sí, nuestro equipo te asesorará en la selección de productos y diseños para que representen tu marca de la mejor manera. Contáctanos para comenzar.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Geder/>
    <section className=" py-16 pt-32 md:pt-40">
      <div className="container mx-auto px-6">
            <div className="block md:hidden w-100 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 font-['Montserrat'] uppercase tracking-tight">
          Preguntas Frecuentes
        </h2>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Busca tu pregunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 placeholder-gray-400"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                    <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 border-b border-gray-300"
                  >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left py-4 flex justify-between items-center focus:outline-none group"
                    >
                    <span className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-gray-00 transition-colors">
                      {faq.question}
                    </span>
                    <motion.svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                        <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pb-4 text-gray-600 text-base md:text-lg"
                        >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center text-gray-600 text-lg"
              >
                No se encontraron resultados para tu búsqueda.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <a
            href="/contacto"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
              <Footer/>
              </>
  );
};

export default FAQ;