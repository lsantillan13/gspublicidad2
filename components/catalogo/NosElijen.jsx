import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CLIENTS = [
  {
    id: 1,
    name: "BPN",
    logo: "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/vpn.png",
    alt: "BPN Logo",
    photos: [
      "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/vpn.png",
      "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/vpn.png"
    ]
  },
  {
    id: 2,
    name: "Kumenia",
    logo: "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/kumenia.jpg",
    alt: "Kumenia Logo",
    photos: [
      "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/kumenia.jpg",
      "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/kumenia.jpg"
    ]
  },
  {
    id: 3,
    name: "Oldelval",
    logo: "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/images.png",
    alt: "Oldelval Logo",
    photos: [
      "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/images.png",
      "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/images.png"
    ]
  },
  {
    id: 4,
    name: "Del Prado",
    logo: "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/delprado.png",
    alt: "Del Prado Logo",
    photos: [
      "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/delprado.png",
      "https://lsantillan13.github.io/gspublicidad/assets/Sponsors/delprado.png"
    ]
  }
];

function NosElijen() {
  const [selectedClient, setSelectedClient] = useState(CLIENTS[0]);

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
      
      {/* Clients grid - Logos redondos */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto mb-12">
        {CLIENTS.map(client => (
          <div 
            key={client.id}
            className="flex flex-col items-center group"
          >
            <button
              onClick={() => setSelectedClient(client)}
              className={`
                relative rounded-full p-1 md:p-2
                flex items-center justify-center
                transition-all duration-300
                hover:scale-110 active:scale-105
                ${selectedClient.id === client.id 
                  ? 'ring-4 ring-white ring-offset-4 ring-offset-blue-600 shadow-2xl transform scale-110' 
                  : 'ring-2 ring-white/30 hover:ring-4 hover:ring-white/50'
                }
              `}
              style={{
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)'
              }}
              aria-label={`Ver productos de ${client.name}`}
              aria-pressed={selectedClient.id === client.id}
            >
              {/* Anillo interior para efecto de profundidad */}
              <div className={`
                absolute inset-0 rounded-full border-2
                ${selectedClient.id === client.id 
                  ? 'border-white/50' 
                  : 'border-white/20 group-hover:border-white/40'
                }
              `} />
              
              {/* Contenedor de la imagen */}
              <div className="w-full h-full rounded-full overflow-hidden p-2">
                <img 
                  src={client.logo} 
                  alt={client.alt} 
                  className="w-full h-full object-contain rounded-full"
                  loading="lazy"
                />
              </div>
              
              {/* Punto indicador de selección */}
              <div className={`
                absolute -top-1 -right-1 w-5 h-5 rounded-full
                flex items-center justify-center
                transition-all duration-300
                ${selectedClient.id === client.id 
                  ? 'bg-green-400 shadow-lg opacity-100 scale-100' 
                  : 'bg-gray-400 opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-100'
                }
              `}>
                {selectedClient.id === client.id && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </button>
            
            {/* Nombre del cliente */}
            <span className={`
              mt-4 text-center text-sm font-semibold transition-all duration-300
              ${selectedClient.id === client.id 
                ? 'text-white text-lg font-bold' 
                : 'text-gray-200 opacity-80 group-hover:opacity-100 group-hover:text-white'
              }
            `}>
              {client.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Instrucción */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
          <svg className="w-5 h-5 text-yellow-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-gray-200">
            Haz clic en cualquier logo para ver sus productos
          </p>
        </div>
      </div>
      
      {/* Selected client products */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Productos destacados de 
            <span className="ml-2 text-yellow-300 animate-pulse">
              {selectedClient.name}
            </span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
          {selectedClient.photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-4 backdrop-blur-sm 
                         hover:bg-gradient-to-br hover:from-white/10 hover:to-blue-500/20 
                         transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Badge numerado */}
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent">
                <img 
                  src={photo} 
                  alt={`Producto ${index + 1} de ${selectedClient.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium group-hover:bg-white/20 transition-colors">
                  {selectedClient.name} - Producto {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="mt-16 text-center">
        <Link
          to="/contacto"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full 
                     hover:bg-gray-100 transition-all duration-300 shadow-2xl 
                     hover:scale-105 transform hover:shadow-3xl active:scale-95"
          aria-label="Convertirse en cliente"
        >
          SER CLIENTE
        </Link>
        <p className="mt-4 text-gray-200 opacity-90">
          Únete a estas marcas que ya confían en nosotros
        </p>
      </div>
    </section>
  );
}

export default React.memo(NosElijen);