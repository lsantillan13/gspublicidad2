import React from 'react';

const categorias = [
  {
    nombre: 'CALZADOS',
    descripcion: 'Calzados de seguridad industrial',
    imagen: 'https://i.postimg.cc/Y0Y7J7pZ/image.png',
  },
  {
    nombre: 'MAMELUCOS',
    descripcion: 'Gabardina grafa de máxima resistencia',
    imagen: 'https://i.postimg.cc/259B5Q4m/image.png',
  },
  {
    nombre: 'BOLSOS',
    descripcion: 'Resistencia petrolera con tu logo',
    imagen: 'https://i.postimg.cc/d3yrG18h/image.png',
  },
  {
    nombre: 'CHALECOS',
    descripcion: 'Confecciones especiales con tu logo',
    imagen: 'https://i.postimg.cc/SQ3w4vRd/image.png',
  },
  {
    nombre: 'SOFTSHELL',
    descripcion: 'Tecnología y confort con personalización',
    imagen: 'https://i.postimg.cc/25GsfjLL/image.png',
  },
];

// ACÁ TENGO QUE PONER LAS FUENTES DE LOS TEXTOS    


const IndumentariaIndustrial = () => {
  return (
    <section className="font-roboto metal-bg text-gray-200 py-16 px-6  mx-auto">
      <div className="text-center mb-12 ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold mb-2">
          <span class="text-6xl text-white">INDUMENTARIA INDUSTRIAL</span>
          <span className="block gold-text text-6xl">DE ALTO DESEMPEÑO</span>
        </h2>
        <div className="divider w-1/3 mx-auto my-2"></div>
        <p className="text-2xl text-gray-300 mx-auto font-bold">
          Soluciones textiles profesionales para las industrias más exigentes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-36">
        {categorias.map((item, idx) => (
          <div
            key={idx}
            className="metal-card relative rounded-lg overflow-hidden hover-scale shine-effect metal-accent"
          >
            <img src={item.imagen} className="w-full h-full object-cover" alt={item.nombre} />
            <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end text-white">
              <span className="text-3xl font-oswald font-bold gold-text">{item.nombre}</span>
              <h2 className="text-sm font-oswald text-white font-bold mb-2">{item.descripcion}</h2>
              <a href="#" className="inline-flex items-center mt-6 text-sm tracking-wider gold-text font-medium group">
                VER PRODUCTOS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H5a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndumentariaIndustrial;
