import React, { useState, useEffect } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Para el modal de crear/editar
  const [currentProduct, setCurrentProduct] = useState(null); // Producto que se está editando
  const [formData, setFormData] = useState({ // Estado para el formulario de producto
    name: '',
    description: '',
    category: '',
    fatherCategory: '',
    imageUrl: '',
    images: '',
    brand: '',
    stock: '',
    sku: '',
  });

  const API_URL = 'https://gsnode.onrender.com/api/products'; // <--- ¡ASEGÚRATE DE QUE ESTA URL SEA CORRECTA!

  // --- Funciones para cargar productos ---
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
      const response = await fetch(import.meta.env.VITE_API_KEY, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Error al cargar los productos.');
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Error al obtener productos:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Se ejecuta una vez al montar el componente

  // --- Funciones del Formulario (Crear y Editar) ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = (product = null) => {
    setCurrentProduct(product);
    if (product) {
      // Si estamos editando, precargar los datos del producto
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        imageUrl: product.imageUrl, // Asumiendo que tienes un campo imageUrl
        images: product.images ? product.images.join(', ') : '',
        brand: product.brand,
        stock: product.stock,
        sku: product.sku,
      });
    } else {
      // Si estamos creando, resetear el formulario
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
        images: '',
        brand: '',
        stock: '',
        sku: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      imageUrl: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No hay token de autenticación. Por favor, inicie sesión.');
      return;
    }

    const method = currentProduct ? 'PUT' : 'POST';
    const url = currentProduct ? `${API_URL}/${currentProduct._id}` : API_URL;

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || `Error al ${currentProduct ? 'actualizar' : 'crear'} el producto.`);
      }

      // Vuelve a cargar los productos para ver los cambios
      fetchProducts(); 
      handleCloseModal(); // Cierra el modal
    } catch (err) {
      console.error(`Error al ${currentProduct ? 'actualizar' : 'crear'} producto:`, err);
      setError(err.message);
    }
  };

  // --- Funciones de Eliminar ---
  const handleDelete = async (productId) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
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

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Error al eliminar el producto.');
      }

      // Si la eliminación fue exitosa, filtra el producto de la lista
      setProducts(products.filter(p => p._id !== productId));
      alert('Producto eliminado con éxito.');
    } catch (err) {
      console.error('Error al eliminar producto:', err);
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center p-8 text-lg">Cargando productos...</div>;
  if (error) return <div className="text-center p-8 text-red-600">Error: {error}</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestión de Productos</h2>
        <div>

        <input type="text" value="Buscar" className="px-4 py-2 bg-blue-400" onChange={() => { return }}/>
        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
          Crear Nuevo Producto
        </button>
      </div>
      </div>

      {/* Mensaje de Error Global */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      {/* Tabla de Productos */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-600 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Items</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Categoría</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Etiqueta</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Estado</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Stock</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">SKU</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-4 px-4 text-center text-gray-500">No hay productos para mostrar.</td>
              </tr>
            ) : (
              products.map(product => (
                <tr key={product._id} className="border-b border-t border-x border-slate-600 rounded-sm hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800 flex items-center space-x-4  rounded-md">
                    <span>
                    {product.imageUrl && (
                      <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                    )}
                    </span>
                    <span className="font-bold text-sm">
                      {product.name}
                    </span>
                  </td>
                  {/* <td className="py-3 px-4 text-sm text-gray-800">${product.price.toFixed(2)}</td> */}
                  <td className="py-3 px-4 font-bold text-sm text-gray-800">{product.category}</td>
                  <td className="py-3 px-4">{product.label ? product.label : '' }</td>
                  <td className="py-3 px-4">{product.productStatus != true ? (
                    <span className="bg-red-700 text-sm p-4 bg-opacity-75 text-white font-semibold">• Deshabilitado</span>
                    ) : (
                    <span className="bg-green-700 text-sm m-auto p-4 bg-opacity-75 text-white font-semibold">• Disponible</span>
                    )}</td>
                  <td className="py-3 px-4 font-semibold text-sm">{product.stock ? product.stock : ' ' } </td>
                  <td className="py-3 px-4 font-semibold text-sm">{product.sku ? product.sku : ' '} </td>
                  <td className="py-3 px-4 text-sm">
                    <button
                      onClick={() => handleOpenModal(product)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal para Crear/Editar Producto */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              {currentProduct ? 'Editar Producto' : 'Crear Nuevo Producto'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                <textarea
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="3"
                  required
                ></textarea>
              </div>
              {/* <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  step="0.01"
                  required
                />
              </div> */}
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Categoría</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="fatherCategory" className="block text-gray-700 text-sm font-bold mb-2">Área</label>
                <input
                  type="text"
                  id="fatherCategory"
                  name="fatherCategory"
                  value={formData.fatherCategory}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">URL Imágen Destacada</label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="images" className="block text-gray-700 text-sm font-bold mb-2">Lista de imagenes</label>
                <textarea
                  type="text"
                  id="images"
                  name="images"
                  value={formData.images}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
                            <div className="mb-4">
                <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
                            <div className="mb-4">
                <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
                            <div className="mb-4">
                <label htmlFor="sku" className="block text-gray-700 text-sm font-bold mb-2">SKU</label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  {currentProduct ? 'Actualizar Producto' : 'Guardar Producto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;