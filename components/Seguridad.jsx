import React from 'react';

const items = [
  {
    title: 'Ignífugos',
    description: 'Indumentaria y elementos ignífugos para máxima protección en ambientes de riesgo.',
    icon: (
      <img src="https://i.postimg.cc/JzDwT5SW/image.png" alt="Ignífugos" className="w-full h-full object-cover" />
    ),
  },
  {
    title: 'Calzado de Seguridad',
    description: 'Calzado certificado para protección y confort en el trabajo diario.',
    icon: (
      <img src="https://i.postimg.cc/MKzJqj0B/image.png" alt="Calzado de Seguridad" className="w-full h-full object-cover" />)
  },
  {
    title: 'Arneses',
    description: 'Arneses de seguridad certificados para trabajos en altura y prevención de caídas.',
    icon: (
      <img src="https://i.postimg.cc/KvZ2nn0f/image.png" alt="Arneses" className="w-full h-full object-cover" />
    ),
  },
  {
    title: 'Equipo de Protección',
    description: ' Equipos de protección personal (EPP) para diversas industrias y actividades.',
    icon: <img src="https://i.postimg.cc/vB04YdgF/image.png" alt="Equipo de Protección" className="w-full h-full object-cover" />,
  },
];

const Seguridad = () => (
  <section className="py-16 bg-[#e6ecf4]/10">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#232b3e] mb-2 text-center uppercase tracking-wide font-['Montserrat']">
        Elementos de Seguridad
      </h2>
      <h3 className="text-lg md:text-xl text-gray-600 mb-8 text-center font-semibold tracking-wide font-['Montserrat']">
        Elementos esenciales para la seguridad personal en distintos entornos laborales.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[#bfa046]/20 bg-white/80 flex items-end justify-center group transition-transform
              ${!item.title ? 'invisible' : 'hover:-translate-y-1 hover:shadow-xl'}`}
          >
            {/* Imagen o icono de fondo */}
            <div className="absolute inset-0 w-full h-full">
              {item.icon}
              <div className="absolute inset-0 bg-gradient-to-t from-[#232b3e]/80 via-[#232b3e]/30 to-transparent" />
            </div>
            {/* Título y descripción superpuestos */}
            <div className="relative z-10 w-full p-4 text-left">
              <h3 className="text-lg uppercase font-semibold text-[#fbbf24] mb-1 drop-shadow">{item.title}</h3>
              <p className="text-sm text-gray-100 drop-shadow">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Seguridad;