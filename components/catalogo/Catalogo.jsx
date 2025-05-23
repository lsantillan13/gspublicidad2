import React, { useState, useEffect } from 'react';

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    parentCategory: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Simulación de carga de productos desde localStorage o una API
  useEffect(() => {
    const savedProducts = localStorage.getItem('productos');
    if (savedProducts) {
      setProductos(JSON.parse(savedProducts));
    } else {
      const defaultProducts = [
        { id: 1, name: 'Producto 1', description: 'Descripción del producto 1.', price: 100, image: '', category: 'Categoría 1', parentCategory: 'General' },
        { id: 2, name: 'Producto 2', description: 'Descripción del producto 2.', price: 200, image: '', category: 'Categoría 2', parentCategory: 'General' },
        { id: 3, name: 'Producto 3', description: 'Descripción del producto 3.', price: 300, image: '', category: 'Categoría 3', parentCategory: 'General' },
      ];
      setProductos(defaultProducts);
      localStorage.setItem('productos', JSON.stringify(defaultProducts));
    }
  }, []);

  // Guardar productos en localStorage
  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos));
  }, [productos]);

  // Crear un nuevo producto
  const handleCreateProduct = () => {
    if (!newProduct.name || !newProduct.description || !newProduct.price) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newId = Date.now();
    setProductos([
      ...productos,
      { id: newId, ...newProduct },
    ]);
    setNewProduct({
      name: '',
      description: '',
      price: '',
      image: '',
      category: '',
      parentCategory: '',
    });
    setIsModalOpen(false); // Cerrar el modal después de crear el producto
  };

  // Editar un producto existente
  const handleEditProduct = (product) => {
    setIsEditing(true);
    setEditingProduct(product);
  };

  const handleSaveEdit = () => {
    setProductos(productos.map((prod) => (prod.id === editingProduct.id ? editingProduct : prod)));
    setIsEditing(false);
    setEditingProduct(null);
  };

  // Eliminar un producto
  const handleDeleteProduct = (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      setProductos(productos.filter((producto) => producto.id !== id));
    }
  };

  return (
    <section>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Administración del Catálogo</h1>
        <p className="text-gray-600 mb-6">
          Administra los productos de tu catálogo. Puedes crear, editar o eliminar productos.
        </p>

        {/* Botón para abrir el modal de creación */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Crear Producto
        </button>

        {/* Lista de productos */}
        {productos.length === 0 ? (
          <p className="text-gray-500 text-center mt-6">No hay productos disponibles en este momento.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                {producto.image && (
                  <img
                    src={producto.image}
                    alt={producto.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold text-gray-800">{producto.name}</h2>
                <p className="text-gray-500 mb-2">{producto.description}</p>
                <p className="text-sm text-gray-400">Categoría: {producto.category}</p>
                <p className="text-sm text-gray-400">Categoría Padre: {producto.parentCategory}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-600">${producto.price}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditProduct(producto)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(producto.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal para crear producto */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Crear Producto</h2>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Nombre del producto"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Descripción"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="number"
                placeholder="Precio"
                
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Categoría"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="Categoría Padre"
                value={newProduct.parentCategory}
                onChange={(e) => setNewProduct({ ...newProduct, parentCategory: e.target.value })}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="text"
                placeholder="URL de la imagen"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                className="border rounded-lg p-2 w-full"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateProduct}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Catalogo;