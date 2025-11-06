import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, Link, useLocation } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState('Administrador');

  // Efecto para la validación del token al cargar el componente
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No estás autenticado. Redirigiendo al inicio de sesión.');
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Sesión cerrada correctamente.');
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Barra lateral / Navegación */}
      <aside className="w-64 bg-gray-800 text-white p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Administrador</h2>
        <nav>
          <ul className="space-y-4">
            {/* Ítem de Productos */}
            <li>
              <Link 
                to="/admin/products" // Ruta para la gestión de productos
                className={`flex items-center space-x-3 text-lg hover:text-blue-400 transition duration-200 
                  ${location.pathname === '/admin/products' ? 'text-blue-400 font-semibold' : ''}`}
              >
                <svg className="h-6 w-6" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6a2 2 0 00-2-2H5a2 2 0 00-2 2v13m0 0h18M5 19h18"></path></svg>
                <span>
                    <p className="text-white font-bold text-xl">Productos</p>
                </span>
              </Link>
            </li>
            {/* Ítem de Contenido */}
            <li>
              <Link 
                to="/admin/content" // Ruta para la gestión de contenido
                className={`flex items-center space-x-3 text-lg hover:text-blue-400 transition duration-200 
                  ${location.pathname === '/admin/content' ? 'text-blue-400 font-semibold' : ''}`}
              >
                <svg className="h-6 w-6" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2zm0 7H5a2 2 0 01-2-2v-2a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2z"></path></svg>
                <span><p className="text-white font-bold text-xl">Bloques</p></span>
              </Link>
            </li>
            {/* Botón de Cerrar Sesión */}
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 text-lg text-red-400 hover:text-red-300 transition duration-200 w-full text-left focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                <span><p className="text-red-700 font-bold text-xl">Cerrar Sesión</p></span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenido principal del dashboard */}
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Productos
        </h2>
        {/* Aquí es donde se renderizará el componente de la sub-ruta */}
        <Outlet /> 
      </main>
    </div>
  );
};

export default AdminDashboard;