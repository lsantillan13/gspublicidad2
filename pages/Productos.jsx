import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import "./Productos.css"
import Geder from '../components/Geder';
import Footer from '../components/Footer';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
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
  ];

  const categories = ['all', 'Indumentaria', 'Regalería', 'Cartelería', 'Marroquinería'];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.category === selectedCategory);

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
          Nuestros Productos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-700 mb-12 text-sm sm:text-base max-w-3xl mx-auto"
          >
          Descubre nuestra amplia gama de productos personalizables, desde indumentaria hasta regalos corporativos, diseñados para destacar tu marca.
        </motion.p>

        {/* Category Filter */}
        <div className="max-w-3xl mx-auto mb-10 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-blue-100 hover:border-blue-500'
              }`}
              >
              {category === 'all' ? 'Todos' : category}
            </motion.button>
          ))}
        </div>

        {/* Product Gallery */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-400"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-gradient-to-t from-blue-100 to-white">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                    <Link
                      to="/contacto"
                      className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                      Consultar
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filteredProducts.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center text-gray-600 text-lg"
            >
              No se encontraron productos en esta categoría.
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
            ¿No encuentras lo que buscas? ¡Contáctanos para personalizar tu pedido!
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

export default Products;