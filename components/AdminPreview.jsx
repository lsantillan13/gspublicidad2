import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Administrador'); // Estado para mostrar un nombre de usuario, si lo tienes

  // Efecto que se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    // Opcional: Podrías hacer una llamada a tu API para obtener los datos del usuario logueado
    // usando el token del localStorage y mostrar un nombre real aquí.
    // Ejemplo (pseudocódigo):
    // const token = localStorage.getItem('token');
    // if (token) {
    //   fetch('http://localhost:3000/api/users/profile', {
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(data => setUserName(data.name || 'Administrador'))
    //   .catch(err => console.error("Error al cargar perfil:", err));
    // }

    // Validación básica: Si no hay token, redirigir al login
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No estás autenticado. Redirigiendo al inicio de sesión.');
      navigate('/login', { replace: true });
    }
  }, [navigate]); // Dependencia: re-ejecuta si 'navigate' cambia (no debería en este caso, pero es buena práctica)


  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token del localStorage
    alert('Sesión cerrada correctamente.');
    navigate('/login', { replace: true }); // Redirigir al login
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Barra lateral / Navegación */}
      <aside className="w-64 bg-gray-800 p-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-8">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center space-x-3 text-lg hover:text-blue-400 transition duration-200">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7m-15 10v-5a1 1 0 011-1h2m-7 0h14a1 1 0 011 1v5m-11 0h4"></path></svg>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 text-lg hover:text-blue-400 transition duration-200">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2h5M10 9V7a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h4"></path></svg>
                <span>Usuarios</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 text-lg hover:text-blue-400 transition duration-200">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6a2 2 0 00-2-2H5a2 2 0 00-2 2v13m0 0h18M5 19h18"></path></svg>
                <span>Productos</span>
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 text-lg text-red-400 hover:text-red-300 transition duration-200 w-full text-left focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                <span>Cerrar Sesión</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenido principal del dashboard */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Hola, {userName}!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Bienvenido a tu panel de administración. Aquí puedes gestionar los recursos de tu aplicación.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta de Estadísticas de Ejemplo */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Total Usuarios</h3>
            <p className="text-4xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Productos Publicados</h3>
            <p className="text-4xl font-bold text-green-600">567</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Pedidos Pendientes</h3>
            <p className="text-4xl font-bold text-yellow-600">89</p>
          </div>
        </div>

        {/* Sección de acciones rápidas o noticias */}
        <section className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Acciones Rápidas</h2>
          <div className="flex space-x-4">
            <button className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200">
              Crear Nuevo Usuario
            </button>
            <button className="px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200">
              Añadir Producto
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;