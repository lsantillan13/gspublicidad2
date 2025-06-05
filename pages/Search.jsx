import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Geder from '../components/Geder';
import Footer from '../components/Footer';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const items = [
    {
      name: 'Mameluco Gabardina',
      description: 'Mameluco resistente y cómodo, ideal para trabajos industriales, personalizable con tu logo.',
      category: 'Indumentaria',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
    {
      name: 'Campera Trucker',
      description: 'Campera moderna y versátil, perfecta para promociones o uso corporativo, con opciones de personalización.',
      category: 'Indumentaria',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
    {
      name: 'Pantalón Cargo Ripstop',
      description: 'Pantalón duradero con múltiples bolsillos, ideal para entornos exigentes, personalizable.',
      category: 'Indumentaria',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
    {
      name: 'Valija Carry On',
      description: 'Valija compacta y elegante, perfecta para regalos corporativos, con tu logo grabado.',
      category: 'Regalería',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
    {
      name: 'Taza Corporativa',
      description: 'Taza personalizada de alta calidad, ideal para obsequios empresariales o promociones.',
      category: 'Regalería',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
    {
      name: 'Cartel Publicitario',
      description: 'Carteles de gran formato para exterior o interior, diseñados con tu marca.',
      category: 'Cartelería',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
    {
      name: 'Bolso Personalizado',
      description: 'Bolso práctico y elegante, ideal para regalos corporativos o uso diario, con logo bordado.',
      category: 'Marroquinería',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
    {
      name: 'Diseños con tu Logo',
      description: 'Personaliza cualquier producto con el logo de tu marca para un impacto único.',
      category: 'Servicios',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
    {
      name: 'Pedidos para Egresados',
      description: 'Indumentaria y productos personalizados para promociones de egresados, con descuentos especiales.',
      category: 'Servicios',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
    {
      name: 'Pedidos Mayoristas',
      description: 'Precios competitivos y asesoramiento para pedidos al por mayor de productos personalizados.',
      category: 'Servicios',
      image: 'https://i.postimg.cc/t4nPqS4N/logo.png', // Replace with actual image
    },
  ];

  const categories = ['all', 'Indumentaria', 'Regalería', 'Cartelería', 'Marroquinería', 'Servicios'];

  const filteredItems = items.filter(
    (item) =>
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
    <Geder/>
    <section className="bg-gradient-to-b from-gray-100 to-blue-50 py-16 min-h-screen pt-44">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-6 font-['Montserrat'] uppercase tracking-tight"
        >
          Buscar Productos y Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-700 mb-12 text-sm sm:text-base max-w-3xl mx-auto"
          >
          Encuentra los productos y servicios perfectos para tu marca. Usa la barra de búsqueda y los filtros para explorar nuestro catálogo.
        </motion.p>

        {/* Search Bar and Category Filter */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-full sm:w-2/3">
              <input
                type="text"
                placeholder="Busca productos o servicios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-400 bg-gray-50 shadow-sm transition-all duration-300 hover:border-blue-500"
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
              {searchTerm && (
                  <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      />
                  </svg>
                </button>
              )}
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 bg-gray-50 shadow-sm transition-all duration-300 hover:border-blue-500"
              >
              {categories.map((category) => (
                  <option key={category} value={category}>
                  {category === 'all' ? 'Todas las categorías' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                  <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-400"
                  >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    />
                  <div className="p-4 bg-gradient-to-t from-blue-100 to-white">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                    <Link
                      to={item.category === 'Servicios' ? '/con-tu-logo' : '/contacto'}
                      className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      {item.category === 'Servicios' ? 'Ver Más' : 'Consultar'}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filteredItems.length === 0 && (
              <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center text-gray-600 text-lg"
              >
              No se encontraron resultados para tu búsqueda. ¡Contáctanos para personalizar tu pedido!
            </motion.p>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
          >
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            ¿No encontraste lo que buscas? ¡Contáctanos para soluciones personalizadas!
          </p>
          <Link
            to="/contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-xl"
            >
            Contactar Ahora
          </Link>
        </motion.div>
      </div>
    </section>
              <Footer/>
              </>
  );
};

export default Search;