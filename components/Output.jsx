import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

const Output = () => {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar secciones desde localStorage
  useEffect(() => {
    try {
      const savedSections = localStorage.getItem('sections');
      if (savedSections) {
        setSections(JSON.parse(savedSections));
      }
    } catch (err) {
      setError('Error al cargar las secciones');
      console.error('Error loading sections:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando página...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Por favor, verifica la configuración en el panel de administración.</p>
        </div>
      </div>
    );
  }

  const renderSection = (section) => {
    switch (section.type) {
      case 'Hero Slider':
        return (
          <div key={section.id} className="relative w-full h-96 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-xl overflow-hidden mb-8">
            <div className="absolute inset-0 flex items-center justify-center text-white p-8">
              <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">{section.name}</h2>
                {/* <p className="text-xl mb-6">Descubre nuestras increíbles ofertas esta temporada</p>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Ver ofertas
                </button> */}
              </div>
            </div>
          </div>
        );
      
      case 'Bloque promocional':
        return (
          <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="bg-gray-100 h-40 rounded mb-4 flex items-center justify-center text-gray-400">
                      Imagen promocional {item}
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Oferta especial {item}</h4>
                    <p className="text-gray-600 mb-3">Descripción breve de la promoción</p>
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                      Ver detalles
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'Product Grid':
        return (
          <div key={section.id} className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{section.name}</h3>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                Ver todos
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((product) => (
                <div key={product} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                  <div className="bg-gray-100 h-40 rounded mb-3 flex items-center justify-center text-gray-400">
                    Producto {product}
                  </div>
                  <h4 className="font-semibold mb-1">Producto destacado {product}</h4>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon 
                        key={star} 
                        icon={faStar} 
                        className={`text-xs ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">${(product * 25).toFixed(2)}</span>
                    <button className="text-gray-500 hover:text-indigo-600">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'Featured Brands':
        return (
          <div key={section.id} className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{section.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['A', 'B', 'C', 'D', 'E'].map((brand) => (
                <div key={brand} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 hover:shadow-md transition">
                  <span className="text-xl font-bold text-gray-700">Marca {brand}</span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'Newsletter':
        return (
          <div key={section.id} className="bg-indigo-600 rounded-xl p-8 mb-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-2">{section.name}</h3>
              <p className="mb-6">Suscríbete para recibir nuestras últimas ofertas y novedades</p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="flex-grow px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button className="bg-white text-indigo-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
                  Suscribirse
                </button>
              </div>
              <p className="text-xs mt-3 text-indigo-200">Nosotros respetamos tu privacidad</p>
            </div>
          </div>
        );
      
      default:
        return (
          <div key={section.id} className="bg-white rounded-xl shadow p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.name}</h3>
            <p className="text-gray-600">Tipo de sección: {section.type}</p>
            <p className="text-sm text-gray-500 mt-2">Contenido no configurado para este tipo de sección</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">MiTienda</div>
          <div className="relative w-1/3">
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute right-3 top-3 text-gray-400"
            />
          </div>
          <nav className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-indigo-600">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="text-gray-700 hover:text-indigo-600">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Ingresar
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {sections.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No hay secciones configuradas</h2>
            <p className="text-gray-500">Por favor, crea secciones en el panel de administración</p>
          </div>
        ) : (
          sections.map(renderSection)
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">MiTienda</h4>
              <p className="text-gray-400">La mejor selección de productos a tu alcance.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorías</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Electrónica</a></li>
                <li><a href="#" className="hover:text-white">Hogar</a></li>
                <li><a href="#" className="hover:text-white">Moda</a></li>
                <li><a href="#" className="hover:text-white">Deportes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ayuda</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contacto</a></li>
                <li><a href="#" className="hover:text-white">Preguntas frecuentes</a></li>
                <li><a href="#" className="hover:text-white">Términos y condiciones</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">FB</a>
                <a href="#" className="text-gray-400 hover:text-white">IG</a>
                <a href="#" className="text-gray-400 hover:text-white">TW</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2023 MiTienda. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Output;