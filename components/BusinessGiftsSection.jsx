import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    id: 1,
    name: 'ASADO Y MATE',
    image: 'https://i.postimg.cc/k5bGhGfq/image.png',
    link: '/categoria'
    // /home-deco'
  },
  {
    id: 2,
    name: 'TERMOS Y JARROS',
    image: 'https://i.postimg.cc/QdnSJ4nv/image.png',
    link: '/categoria'
    // /termos-vasos'
  },
  {
    id: 3,
    name: 'BOTELLAS Y TAZAS',
    image: 'http://gspublicidad.com.ar/wp-content/uploads/2019/08/botella-esmerilada.jpg',
    link: '/categoria'
    // /marroquineria'
  },
  {
    id: 4,
    name: 'BOLÍGRAFOS',
    image: 'https://i.postimg.cc/Njzq2x8j/image.png',
    link: '/categoria'
    // /boligrafos'
  },
  {
    id: 5,
    name: 'TECNOLOGÍA',
    image: 'https://i.postimg.cc/N0dyHSJr/image.png',
    link: '/categoria'
    // /tecnologia'
  }
];

const BusinessGiftsSection = () => {
  return (
    <section className={`w-screen
    bg-[url('https://i.postimg.cc/J4h2vQsv/upscalemedia-transformed.png')]
      py-8 bg-cover bg-no-repeat saturate-200`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-7xl font-bold uppercase mb-2 text-white">
          Regalos Empresariales
        </h2>
        <p className="text-3xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Soluciones personalizadas para fortalecer relaciones comerciales y fidelizar clientes
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center max-w-6xl mx-auto mb-12">
          {CATEGORIES.map((category) => (
            <Link 
              to={category.link}
              key={category.id}
              className="group flex flex-col items-center gap-4 md:gap-7 transition-transform hover:scale-105 w-full md:w-auto"
              aria-label={`Ver productos de ${category.name}`}
            >
              <div className="w-32 h-32 md:w-48 md:h-48 hover:outline-2 outline outline-1 hover:outline-slate-700 rounded-full bg-[#1b1f2e] overflow-hidden flex items-center justify-center">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover  rounded-full transition-opacity group-hover:opacity-90"
                  loading="lazy"
                />
              </div>
              <p className="text-md  lg:text-md w-auto text-gray-100 font-semibold box-shadow-lg bg-black/80 px-4 py-2 text-center group-hover:bg-black/90 transition-colors">
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      <Link
                to="/productos"
                className="inline-block bg-white hover:text-white hover:text-black duration-110s hover:bg-blue-500 text-blue-700 font-bold py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-gray-100 active:scale-95 transition-all text-xs md:text-sm"
                aria-label="Ver todos los productos"
              >
                VER TODO
              </Link>
      </div>

    </section>
  );
};

export default BusinessGiftsSection;




// 
// https://img.freepik.com/free-photo/minimalist-black-friday-arrangement_23-2148666984.jpg?t=st=1762973506~exp=1762977106~hmac=781732c12c64cbab21b6653c3589421efa88650d617a8a3db7d43a8d596ea8c7&w=1480
// https://img.freepik.com/free-photo/minimalist-black-friday-composition-black-background_23-2148666983.jpg?t=st=1762973533~exp=1762977133~hmac=cb0c532ec39ac781622a830e99e289931ec30f279e43efa1ab63230b757b80d6&w=1480
// https://img.freepik.com/free-photo/top-view-devices-supplies-composition_23-2149552421.jpg?t=st=1762973547~exp=1762977147~hmac=c5c611200bce68466d17c8d7ef7b206bb6594059ba23370017149dddd91d10d7&w=1480
// 
// 