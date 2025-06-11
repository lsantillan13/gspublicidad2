import React from 'react';
import './Industrial.css'; // Assuming you have a CSS file for styles

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
    <section className="font-roboto metal-bg text-gray-200 py-24 pb-14">
      <section className="max-w-7xl mx-auto">


      <div className="text-center mb-6">
        <span className="text-2xl md:text-5xl lg:text-7xl font-oswald font-bold mb-0 md:mb-2">
          <h2 className="text-white w-auto md:w-auto">INDUMENTARIA INDUSTRIAL</h2>
          <h2 className="block gold-text">DE ALTO DESEMPEÑO</h2>
        </span>
        <div className="divider w-1/3 mx-auto"></div>
        <br></br>        <p className="text-md md:text-3xl text-gray-200 md:text-gray-300 mx-auto font-bold">
          Soluciones textiles profesionales para las industrias más exigentes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((item, idx) => (
          <div
            key={idx}
            className="metal-card relative rounded-lg overflow-hidden hover-scale shine-effect metal-accent"
          >
            <img src={item.imagen} className="w-full h-full object-cover" alt={item.nombre} />
            <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end text-white">
              <span className="text-4xl font-bold gold-text">{item.nombre}</span>
              <h2 className="text-sm font-oswald text-white font-bold mb-2">{item.descripcion}</h2>
              <a href="#" className="inline-flex items-center mt-6 text-sm tracking-wider gold-text font-bold group">
                VER PRODUCTOS
              </a>
            </div>
          </div>
        ))}
      <div className="metal-card relative rounded-lg overflo-hidden hover-scale shine-effect metal-accent text-center p-8">
        <span className="px-36 text-center">
        <h3 className="text-3xl font-oswald font-bold gold-text px-6 py-2">Soluciones Corporativas</h3>
        <h4 className='text-sm font-oswald text-white font-bold mb-2 px-6 py-2'>Desarrollamos indumentaria a medida para su empresa</h4>
        <button className="py-2 px-4 outline-1 outline-white text-white rounded-full text-2xl">
          Contacto Ejecutivo
        </button>
        </span>
      </div>
      </div>
      </section>
    </section>
  );
};

export default IndumentariaIndustrial;
