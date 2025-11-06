import React from 'react';

const ContentManagement = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Gestión de Contenido</h2>
      <p className="text-gray-700">Aquí puedes administrar el contenido de tu sitio, como posts de blog, páginas estáticas, etc.</p>
      <div className="mt-6 space-y-4">
        <div className="bg-purple-50 p-3 rounded-lg flex justify-between items-center">
          <span className="font-medium">Página Principal</span>
          <button className="text-purple-600 hover:text-purple-800">Editar</button>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg flex justify-between items-center">
          <span className="font-medium">Acerca de Nosotros</span>
          <button className="text-purple-600 hover:text-purple-800">Editar</button>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg flex justify-between items-center">
          <span className="font-medium">Blog Post: "Mi Primera Publicación"</span>
          <button className="text-purple-600 hover:text-purple-800">Editar</button>
        </div>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Añadir Nuevo Contenido
        </button>
      </div>
    </div>
  );
};

export default ContentManagement;