import React, { useState, useEffect } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('products');
  const [selectedSection, setSelectedSection] = useState('novedades');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    subcategory: '',
    imageUrl: '',
    images: '',
    brand: '',
    isNew: false,
    productStatus: true,
    featuredIn: []
  });

  // Categorías principales
  const mainCategories = [
    'ARTICULOS PROMOCIONALES',
    'REGALERIA EMPRESARIAL',
    'ELEMENTOS DE SEGURIDAD',
    'HOSPITALARIOS Y LIMPIEZA',
    'PUBLICIDAD PUNTO FIJO',
    'EGRESADOS',
    'INDUMENTARIA DEPORTIVA',
    'ROPA DE TRABAJO',
    'INDUMENTARIA URBANA',
    'INDUMENTARIA PREMIUM',
    'ARTICULOS DE VERANO',
    'COCINA',
    'SERVICIOS'
  ];

  // Subcategorías organizadas por categoría principal
  const subcategoriesByCategory = {
    'ARTICULOS PROMOCIONALES': [
      'Gorros y sombreros',
      'Botellas y tazas',
      'Cintas colgantes y flexeros',
      'Banners y portabanners',
      'Banderas - banderines - fly banners',
      'Inflables',
      'Bolsas ecológicas',
      'Mochilas y marroquinería',
      'Bolígrafos',
      'Remeras y chorritos'
    ],
    'REGALERIA EMPRESARIAL': [
      'Souvenirs y tiempo libre',
      'Termos y jarras',
      'Congresos y oficina',
      'Trofeos y placas',
      'Medallas - pins',
      'Tecnología',
      'Playa y tiempo libre'
    ],
    'ELEMENTOS DE SEGURIDAD': [
      'Anteojos de seguridad',
      'Botines',
      'Zapatillas',
      'Zapatos',
      'Chalecos de poliamida c/reflectivo',
      'Vinilos'
    ],
    'HOSPITALARIOS Y LIMPIEZA': [
      'Guantes laves y niquel',
      'Cofías',
      'Ambios',
      'Botas',
      'Cartelería'
    ],
    'PUBLICIDAD PUNTO FIJO': [
      'Contenedores',
      'Fly banners',
      'Porta banners',
      'Inflables',
      'Hoya esquinas',
      'Sierra láser',
      'Gigantografía en lonas, vinilos y calcamonías',
      'Fábrica más confiable en',
      'Retail en full color',
      'Corte láser y grabado hasta 100 x 80 cm',
      'Impresión en full color para todo tipo de objetos',
      'Serigrafía digital al agua de alta calidad'
    ],
    'EGRESADOS': [
      'Banderas',
      'Chorritos',
      'Buzos de egresados de la Patagonia'
    ],
    'SERVICIOS': [
      '24 cabezales de bordado plano y circular',
      'Calandra para sublimación para 50 ml hora',
      'Papel sublimación fedor 4 cabezales 100 ms/hora',
      'Grabado láser y corte hasta 100 x 80 cm',
      'Impresión en full color para todo tipo de objetos',
      'Gigantografía en lonas, vinilos y calcamonías',
      'Fábrica mas confiable en entrega calidad, diseños y precio',
      'Entregas rápidas',
      'Pedi con tiempo para un mejor costo y desarrollo',
      'Si necesitas entrega rápida tenemos alta producción'
    ],
    'COCINA': [
      'Cofías',
      'Delantales',
      'Ambios',
      'Faldas',
      'Estocas'
    ],
    'ARTICULOS DE VERANO': [
      'Sombrillas',
      'Sombreros de paja',
      'Pilusos',
      'Pareos'
    ],
    'INDUMENTARIA PREMIUM': [
      'Chaleco carry en',
      'Campera 3 en 1 importada',
      'Pantalones de rápido secado'
    ],
    'INDUMENTARIA URBANA': [
      'Remeras',
      'Chorritos',
      'Bermudas',
      'Camperas'
    ],
    'ROPA DE TRABAJO': [
      'Chalecos',
      'Camperas',
      'Chorritos',
      'Remeras',
      'Pantalones cargo rápido',
      'Pantalones cargo gabardina',
      'Jeans',
      'Bomberos'
    ],
    'INDUMENTARIA DEPORTIVA': [
      'Conjuntos deportivos entallados en licra y otras telas',
      'Conjuntos ciclista y running',
      'Musculosas fútbol, voley, básquet',
      'Conjuntos hockey',
      'Camisetas y shorts para tenis y pádel'
    ]
  };

  // Secciones disponibles
  const HOMEPAGE_SECTIONS = [
    { id: 'novedades', label: '🎁 Novedades y Oportunidades', color: 'orange' },
    { id: 'regalos-empresariales', label: '🏢 Regalos Empresariales', color: 'blue' },
    { id: 'articulos-promocionales', label: '🎯 Artículos Promocionales', color: 'green' },
    { id: 'indumentaria-deportiva', label: '⚽ Indumentaria Deportiva', color: 'red' },
    { id: 'indumentaria-trabajo', label: '👷 Indumentaria de Trabajo', color: 'yellow' },
    { id: 'egresados', label: '🎓 Egresados', color: 'purple' },
    { id: 'verano', label: '☀️ Verano', color: 'teal' },
    { id: 'gorras', label: '🧢 Gorras', color: 'indigo' }
  ];

  const API_URL = 'https://gsnode.onrender.com/api/products';

  // Cargar productos
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('token');
    
    if (!token) {
      setError('No hay token de autenticación. Por favor, inicie sesión.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const text = await response.text();
        try {
          const errData = JSON.parse(text);
          throw new Error(errData.message || `Error ${response.status}: ${response.statusText}`);
        } catch {
          throw new Error(`Error ${response.status}: ${text || response.statusText}`);
        }
      }

      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      console.error('Error al obtener productos:', err);
      setError(err.message || 'Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filtrar productos por búsqueda
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.subcategory?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  // Función para formatear nombres de categoría
  const formatCategoryName = (category) => {
    return category
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Funciones para manejar secciones destacadas
  const handleFeaturedSectionChange = (sectionId) => {
    setFormData(prev => {
      const currentSections = [...prev.featuredIn];
      const index = currentSections.indexOf(sectionId);
      
      if (index > -1) {
        currentSections.splice(index, 1);
      } else {
        currentSections.push(sectionId);
      }
      
      return {
        ...prev,
        featuredIn: currentSections
      };
    });
  };

  // Actualizar secciones de un producto
  const updateProductSections = async (productId, sectionId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No hay token de autenticación. Por favor, inicie sesión.');
      return;
    }

    try {
      // Obtener el producto actual
      const product = products.find(p => p._id === productId);
      if (!product) return;

      const currentSections = product.featuredIn || [];
      const isCurrentlyInSection = currentSections.includes(sectionId);
      const newSections = isCurrentlyInSection
        ? currentSections.filter(s => s !== sectionId)
        : [...currentSections, sectionId];

      const response = await fetch(`${API_URL}/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...product,
          featuredIn: newSections
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Error al actualizar secciones');
      }

      // Actualizar estado local
      const updatedProducts = products.map(p =>
        p._id === productId ? { ...p, featuredIn: newSections } : p
      );
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);

      alert(isCurrentlyInSection 
        ? 'Producto removido de la sección' 
        : 'Producto agregado a la sección'
      );
    } catch (err) {
      console.error('Error al actualizar secciones:', err);
      setError(err.message);
    }
  };

  // Componente para gestionar rápido las secciones
  const QuickSectionManager = ({ product }) => {
    const [isManaging, setIsManaging] = useState(false);
    
    return (
      <div className="relative inline-block">
        <button
          onClick={() => setIsManaging(!isManaging)}
          className="text-xs text-blue-600 hover:text-blue-800 underline"
        >
          Gestionar
        </button>
        
        {isManaging && (
          <div className="absolute z-10 bg-white border rounded-lg shadow-lg p-4 mt-1 w-48 right-0">
            <div className="space-y-2 mb-3">
              {HOMEPAGE_SECTIONS.map(section => (
                <label key={section.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={product.featuredIn?.includes(section.id)}
                    onChange={() => updateProductSections(product._id, section.id)}
                    className="h-3 w-3 text-blue-600"
                  />
                  <span className="text-xs">{section.label.split(' ')[0]}</span>
                </label>
              ))}
            </div>
            <button
              onClick={() => setIsManaging(false)}
              className="text-xs text-gray-600 hover:text-gray-800"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    );
  };

  // Renderizar badges de secciones
  const renderSectionBadges = (sections) => {
    if (!sections || sections.length === 0) {
      return <span className="text-xs text-gray-400">Sin secciones</span>;
    }
    
    return (
      <div className="flex flex-wrap gap-1">
        {sections.map(sectionId => {
          const section = HOMEPAGE_SECTIONS.find(s => s.id === sectionId);
          if (!section) return null;
          
          const colorClasses = {
            orange: 'bg-orange-100 text-orange-800',
            blue: 'bg-blue-100 text-blue-800',
            green: 'bg-green-100 text-green-800',
            red: 'bg-red-100 text-red-800',
            yellow: 'bg-yellow-100 text-yellow-800',
            purple: 'bg-purple-100 text-purple-800',
            teal: 'bg-teal-100 text-teal-800',
            indigo: 'bg-indigo-100 text-indigo-800'
          };
          
          return (
            <span 
              key={sectionId}
              className={`px-2 py-0.5 text-xs rounded-full ${colorClasses[section.color] || 'bg-gray-100 text-gray-800'}`}
              title={section.label}
            >
              {section.label.split(' ')[0]}
            </span>
          );
        })}
      </div>
    );
  };

  // Renderizar secciones en el formulario
  const renderFeaturedSections = () => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Secciones del Homepage:
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {HOMEPAGE_SECTIONS.map(section => (
          <label 
            key={section.id}
            className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={formData.featuredIn.includes(section.id)}
              onChange={() => handleFeaturedSectionChange(section.id)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">{section.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Cuando cambia la categoría principal
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      category: value,
      subcategory: ''
    }));
  };

  // Abrir modal
  const handleOpenModal = (product = null) => {
    setCurrentProduct(product);
    setError(null);
    
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        category: product.category || '',
        subcategory: product.subcategory || '',
        imageUrl: product.imageUrl || '',
        images: product.images ? product.images.join(', ') : '',
        brand: product.brand || '',
        isNew: product.isNew || false,
        productStatus: product.productStatus || true,
        featuredIn: product.featuredIn || []
      });
    } else {
      setFormData({
        name: '',
        description: '',
        category: '',
        subcategory: '',
        imageUrl: '',
        images: '',
        brand: '',
        isNew: false,
        productStatus: true,
        featuredIn: []
      });
    }
    setIsModalOpen(true);
  };

  // Cerrar modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
    setError(null);
  };

  // Preparar datos para enviar
  const prepareProductData = () => {
    const data = { ...formData };
    
    // Procesar imágenes
    if (data.images && data.images.trim() !== '') {
      data.images = data.images.split(',').map(img => img.trim()).filter(img => img !== '');
    } else {
      data.images = [];
    }
    
    return data;
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const token = localStorage.getItem('token');
    
    if (!token) {
      setError('No hay token de autenticación. Por favor, inicie sesión.');
      return;
    }

    if (!formData.name.trim()) {
      setError('El nombre del producto es obligatorio');
      return;
    }
    
    if (!formData.category) {
      setError('La categoría principal es obligatoria');
      return;
    }

    const method = currentProduct ? 'PUT' : 'POST';
    const url = currentProduct ? `${API_URL}/${currentProduct._id}` : API_URL;
    const productData = prepareProductData();

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(productData)
      });

      const responseText = await response.text();

      if (!response.ok) {
        try {
          const errData = JSON.parse(responseText);
          throw new Error(errData.message || `Error ${response.status}: ${response.statusText}`);
        } catch {
          throw new Error(`Error ${response.status}: ${responseText || response.statusText}`);
        }
      }

      fetchProducts();
      handleCloseModal();
      alert(`Producto ${currentProduct ? 'actualizado' : 'creado'} correctamente`);
      
    } catch (err) {
      console.error(`Error al ${currentProduct ? 'actualizar' : 'crear'} producto:`, err);
      setError(err.message);
    }
  };

  // Eliminar producto
  const handleDelete = async (productId) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este producto? Esta acción no se puede deshacer.')) {
      return;
    }
    
    setError(null);
    const token = localStorage.getItem('token');
    
    if (!token) {
      setError('No hay token de autenticación. Por favor, inicie sesión.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const responseText = await response.text();

      if (!response.ok) {
        try {
          const errData = JSON.parse(responseText);
          throw new Error(errData.message || 'Error al eliminar el producto.');
        } catch {
          throw new Error(`Error ${response.status}: ${responseText || 'Error al eliminar el producto'}`);
        }
      }

      setProducts(products.filter(p => p._id !== productId));
      setFilteredProducts(filteredProducts.filter(p => p._id !== productId));
      
      alert('Producto eliminado con éxito.');
    } catch (err) {
      console.error('Error al eliminar producto:', err);
      setError(err.message);
    }
  };

  // Cambiar estado del producto
  const handleToggleStatus = async (productId, currentStatus) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      setError('No hay token de autenticación. Por favor, inicie sesión.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productStatus: !currentStatus })
      });

      const responseText = await response.text();

      if (!response.ok) {
        try {
          const errData = JSON.parse(responseText);
          throw new Error(errData.message || 'Error al cambiar estado del producto.');
        } catch {
          throw new Error(`Error ${response.status}: ${responseText || 'Error al cambiar estado'}`);
        }
      }

      const updatedProducts = products.map(p =>
        p._id === productId ? { ...p, productStatus: !currentStatus } : p
      );
      
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
      
      alert(`Producto ${!currentStatus ? 'activado' : 'desactivado'} correctamente`);
    } catch (err) {
      console.error('Error al cambiar estado:', err);
      setError(err.message);
    }
  };

  // Vista de productos por sección
  const SectionProductsView = ({ sectionId }) => {
    const sectionProducts = products.filter(product => 
      product.featuredIn?.includes(sectionId)
    );
    const section = HOMEPAGE_SECTIONS.find(s => s.id === sectionId);

    return (
      <div className="border rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">{section?.label}</h3>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            {sectionProducts.length} productos
          </span>
        </div>
        
        {sectionProducts.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p>No hay productos en esta sección</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectionProducts.map(product => (
              <div key={product._id} className="border rounded-lg p-4 flex items-center space-x-4">
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                  <div className="mt-2 flex space-x-2">
                    <button
                      onClick={() => handleOpenModal(product)}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => updateProductSections(product._id, sectionId)}
                      className="text-xs text-red-600 hover:text-red-800"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Navegación por tabs */}
      <div className="mb-6 border-b">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'products'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            📦 Todos los Productos ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('featured')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'featured'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            ⭐ Productos Destacados
          </button>
        </nav>
      </div>

      {/* Mensaje de Error Global */}
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-red-500">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* VISTA DE PRODUCTOS */}
      {activeTab === 'products' ? (
        <>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Gestión de Productos</h2>
              <p className="text-gray-600">Total: {products.length} productos</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">
                  🔍
                </span>
              </div>
              <button
                onClick={() => handleOpenModal()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
              >
                + Nuevo Producto
              </button>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-600 font-medium">Total Productos</p>
              <p className="text-2xl font-bold text-gray-800">{products.length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-sm text-green-600 font-medium">Disponibles</p>
              <p className="text-2xl font-bold text-gray-800">
                {products.filter(p => p.productStatus).length}
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <p className="text-sm text-orange-600 font-medium">Novedades</p>
              <p className="text-2xl font-bold text-gray-800">
                {products.filter(p => p.isNew).length}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <p className="text-sm text-purple-600 font-medium">Destacados</p>
              <p className="text-2xl font-bold text-gray-800">
                {products.filter(p => p.featuredIn?.length > 0).length}
              </p>
            </div>
          </div>

          {/* Tabla de Productos */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría / Subcategoría</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Secciones</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center">
                      <div className="text-gray-400">
                        <p className="text-lg mb-2">No hay productos</p>
                        <p className="text-sm">{searchTerm ? 'Intenta con otro término de búsqueda' : 'Crea tu primer producto'}</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map(product => (
                    <tr key={product._id} className={`hover:bg-gray-50 transition-colors ${product.isNew ? 'bg-orange-50/30' : ''}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12">
                            {product.imageUrl ? (
                              <img
                                className="h-12 w-12 rounded-lg object-cover"
                                src={product.imageUrl}
                                alt={product.name}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = 'https://via.placeholder.com/100x100?text=Sin+imagen';
                                }}
                              />
                            ) : (
                              <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-xs">Sin imagen</span>
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                {product.name}
                                {product.isNew && (
                                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                                    ✨ Nuevo
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-sm text-gray-500">{product.brand}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mb-1">
                            {formatCategoryName(product.category)}
                          </span>
                          {product.subcategory && (
                            <div className="text-xs text-gray-700 mt-1 bg-gray-50 px-2 py-1 rounded">
                              {product.subcategory}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleToggleStatus(product._id, product.productStatus)}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            product.productStatus
                              ? 'bg-green-100 text-green-800 hover:bg-green-200'
                              : 'bg-red-100 text-red-800 hover:bg-red-200'
                          }`}
                        >
                          {product.productStatus ? '✓ Disponible' : '✗ Deshabilitado'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          {renderSectionBadges(product.featuredIn)}
                          <QuickSectionManager product={product} />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleOpenModal(product)}
                            className="text-blue-600 hover:text-blue-900 px-3 py-1 border border-blue-600 rounded hover:bg-blue-50"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="text-red-600 hover:text-red-900 px-3 py-1 border border-red-600 rounded hover:bg-red-50"
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        /* VISTA DE PRODUCTOS DESTACADOS */
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Productos Destacados por Sección</h2>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {HOMEPAGE_SECTIONS.map(section => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
          </div>

          <SectionProductsView sectionId={selectedSection} />

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Resumen por Sección</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {HOMEPAGE_SECTIONS.map(section => {
                const sectionCount = products.filter(p => 
                  p.featuredIn?.includes(section.id)
                ).length;
                
                return (
                  <div key={section.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{section.label.split(' ')[0]}</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {sectionCount}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedSection(section.id);
                      }}
                      className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                    >
                      Ver productos
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Modal para Crear/Editar Producto */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {currentProduct ? 'Editar Producto' : 'Crear Nuevo Producto'}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del Producto *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      placeholder="Ej: Pantalón Cargo Ripstop"
                    />
                  </div>

                  <div>
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                      Marca *
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      placeholder="Ej: WorkPro"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    placeholder="Describe las características del producto..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Categoría Principal *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleCategoryChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Seleccionar categoría</option>
                      {mainCategories.map(cat => (
                        <option key={cat} value={cat}>
                          {formatCategoryName(cat)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-1">
                      Subcategoría
                    </label>
                    <select
                      id="subcategory"
                      name="subcategory"
                      value={formData.subcategory}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={!formData.category}
                    >
                      <option value="">Seleccionar subcategoría</option>
                      {formData.category && subcategoriesByCategory[formData.category]?.map(subcat => (
                        <option key={subcat} value={subcat}>
                          {subcat}
                        </option>
                      ))}
                    </select>
                    {formData.category && (!subcategoriesByCategory[formData.category] || subcategoriesByCategory[formData.category].length === 0) && (
                      <input
                        type="text"
                        id="subcategory"
                        name="subcategory"
                        value={formData.subcategory}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                        placeholder="Ingresar subcategoría manualmente"
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    URL de imagen principal
                  </label>
                  <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                  {formData.imageUrl && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 mb-1">Vista previa:</p>
                      <img
                        src={formData.imageUrl}
                        alt="Vista previa"
                        className="h-24 w-24 object-cover rounded border"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/100x100?text=Error+imagen';
                        }}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-1">
                    URLs de imágenes adicionales (separadas por comas)
                  </label>
                  <textarea
                    id="images"
                    name="images"
                    value={formData.images}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://ejemplo.com/imagen1.jpg, https://ejemplo.com/imagen2.jpg"
                  />
                </div>

                {/* Secciones destacadas */}
                {renderFeaturedSections()}

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="isNew"
                      checked={formData.isNew}
                      onChange={handleChange}
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700 font-medium">✨ Marcar como NOVEDAD</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="productStatus"
                      checked={formData.productStatus}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Producto disponible</span>
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {currentProduct ? 'Actualizar Producto' : 'Crear Producto'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;