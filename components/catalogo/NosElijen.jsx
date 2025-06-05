import React from 'react';
import { Link } from 'react-router-dom';

const CLIENTS = [
  {
    id: 1,
    logo: "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/vpn.png",
    alt: "BPN Logo"
  },
  {
    id: 2,
    logo: "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/kumenia.jpg",
    alt: "Kumenia Logo"
  },
  {
    id: 3,
    logo: "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/images.png",
    alt: "Oldelval Logo"
  },
  {
    id: 4,
    logo: "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/delprado.png",
    alt: "Del Prado Logo"
  }
];

function NosElijen() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
          ¡QUIÉNES NOS ELIGEN!
        </h2>
        <p className="text-xl opacity-90 max-w-2xl text-gray-200 mx-auto">
          Empresas e instituciones que confían en nosotros
        </p>
      </div>
      
      {/* Clients grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {CLIENTS.map(client => (
          <div 
            key={client.id}
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 h-40"
          >
            <img 
              src={client.logo} 
              alt={client.alt} 
              className="max-h-20 max-w-full object-contain rounded-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Link
          to="/contacto"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform"
          aria-label="Convertirse en cliente"
        >
          SER CLIENTE
        </Link>
      </div>
    </section>
  );
}

export default React.memo(NosElijen);