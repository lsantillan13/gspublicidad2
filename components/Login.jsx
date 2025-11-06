import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        setError(''); // Limpia cualquier error anterior

    try {
      const response = await fetch('http://localhost:4000/api/auth/login', { // <--- Usando fetch
        method: 'POST', // Especifica el método HTTP
        headers: {
          'Content-Type': 'application/json', // Especifica el tipo de contenido
        },
        body: JSON.stringify({ // Convierte el objeto JavaScript a una cadena JSON
          email,
          password,
        }),
      });

      // Verifica si la respuesta no fue exitosa (código de estado 2xx)
      if (!response.ok) {
        const errorData = await response.json(); // Parsea el cuerpo del error
        throw new Error(errorData.message || 'Error al iniciar sesión.');
      }

      const data = await response.json(); // Parsea la respuesta JSON si todo fue bien
      localStorage.setItem('token', data.token);

      navigate('/admin', { replace: true }); // Redirige al panel de administración

    } catch (err) {
      // Manejo de errores
      console.error('Error durante la petición fetch:', err.message);
      setError(err.message || 'Ocurrió un error inesperado al iniciar sesión.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          {error && ( // Muestra el mensaje de error si existe
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="tu@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login