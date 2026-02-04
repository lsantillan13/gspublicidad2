import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Geder.css';
import { useNavigate } from 'react-router-dom';

// Constants for URLs and icons to avoid repetition
const SOCIAL_LINKS = [
  {
    url: "https://www.facebook.com/gspublicidadoficial",
    className: "hover:bg-blue-600",
    icon: "fab fa-facebook-f"
  },
  {
    url: "https://www.instagram.com/gspublicidad/",
    className: "hover:bg-pink-600",
    icon: "fab fa-instagram"
  },
  {
    url: "tel:+549299549-9076",
    className: "hover:bg-green-500",
    icon: "fab fa-whatsapp"
  }
];

const NAV_ITEMS = [
  { path: "/", label: "HOME", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/all-products", label: "PRODUCTOS", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/egresados", label: "EGRESADOS", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/servicios", label: "SERVICIOS", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/about", label: "QUIENES SOMOS", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/contacto", label: "CONTACTO", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
  { path: "/faq", label: "FAQ", hoverClass: "hover:text-blue-700 hover:border-blue-600" },
];

// Mapeo de categorías de la API a las categorías del menú
const CATEGORY_MAPPING = {
  // Indumentaria deportiva
  'INDUMENTARIA DEPORTIVA': {
    mainCategory: 'indumentaria-deportiva',
    subcategories: {
      'Camisetas y shorts para tenis y pádel': 'Camisetas y shorts',
      'Camisetas y shorts': 'Camisetas y shorts',
    }
  },
  // Ropa de trabajo
  'ROPA DE TRABAJO': {
    mainCategory: 'ropa-de-trabajo',
    subcategories: {
      'Camperas': 'Camperas',
      'Remeras': 'Remeras',
    }
  },
  // Egresados
  'EGRESADOS': {
    mainCategory: 'egresados',
    subcategories: {
      'Banderas': 'Banderas',
      'Buzos de egresados de la Patagonia': 'Buzos',
    }
  },
  // Indumentaria urbana
  'INDUMENTARIA URBANA': {
    mainCategory: 'indumentaria-urbana',
    subcategories: {
      'Chorritos': 'Remeras',
    }
  },
  // Indumentaria premium
  'INDUMENTARIA PREMIUM': {
    mainCategory: 'indumentaria-premium',
    subcategories: {
      'Indumentaria Premium': 'Valija carry on',
      'Pantalones de rápido secado': 'Campera 3 en 1 importada',
    }
  },
  // Regalería empresarial
  'REGALERIA EMPRESARIAL': {
    mainCategory: 'regaleria-empresarial',
    subcategories: {
      'Termos y jarras': 'Termos y jarros',
    }
  },
  // Artículos promocionales
  'ARTICULOS PROMOCIONALES': {
    mainCategory: 'articulos-promocionales',
    subcategories: {
      'Botellas y tazas': 'Botellas y tazas',
      'Cintas colgantes y flexeros': 'Cintas colgantes y llaveros',
      'Mochilas y marroquinería': 'Mochilas y marroquineria',
      'Bolígrafos': 'Boligrafos',
    }
  },
  // Artículos de verano
  'ARTICULOS DE VERANO': {
    mainCategory: 'articulos-verano',
    subcategories: {
      'Sombrillas': 'Sombrillas',
      'Sombreros de paja': 'Sombreros de paja',
      'Pilusos': 'Pilusos',
    }
  }
};

// Estructura base del menú de productos
const BASE_PRODUCTOS_SUBMENU = [
  {
    label: "Indumentaria deportiva",
    path: "/all-products?cat=indumentaria-deportiva",
    sub: [
      { label: "Camisetas y shorts", path: "/catalogo?categoria=camisetas-shorts" },
      { label: "Conjuntos deportivos entallados en keten y otras telas", path: "/catalogo?categoria=conjuntos-deportivos" },
      { label: "Camisetas ciclista y running", path: "/catalogo?categoria=camisetas-ciclista" },
      { label: "Musculosas futbol, voley, basquet", path: "/catalogo?categoria=musculosas" },
      { label: "Conjuntos hockey", path: "/catalogo?categoria=conjuntos-hockey" },
      { label: "Camisetas y shorts para tenis y padel", path: "/catalogo?categoria=camisetas-tenis-padel" },
    ]
  },
  {
    label: "Ropa de trabajo",
    path: "/all-products?cat=ropa-de-trabajo",
    sub: [
      { label: "Chalecos", path: "/catalogo?categoria=chalecos" },
      { label: "Camperas", path: "/catalogo?categoria=camperas" },
      { label: "Chombas", path: "/catalogo?categoria=chombas" },
      { label: "Remeras", path: "/catalogo?categoria=remeras" },
      { label: "Pantalones cargo ripstop", path: "/catalogo?categoria=pantalones-ripstop" },
      { label: "Pantalones cargo gabardina", path: "/catalogo?categoria=pantalones-gabardina" },
      { label: "Jeans", path: "/catalogo?categoria=jeans" },
      { label: "Buzos", path: "/catalogo?categoria=buzos" },
    ]
  },
  {
    label: "Calzado de seguridad y deportivo",
    path: "/all-products?cat=calzado",
    sub: [
      { label: "Botines", path: "/catalogo?categoria=botines" },
      { label: "Zapatillas", path: "/catalogo?categoria=zapatillas" },
      { label: "Zapatos", path: "/catalogo?categoria=zapatos" },
    ]
  },
  {
    label: "Indumentaria urbana",
    path: "/all-products?cat=indumentaria-urbana",
    sub: [
      { label: "Remeras", path: "/catalogo?categoria=remeras-urbanas" },
      { label: "Chombas", path: "/catalogo?categoria=chombas-urbanas" },
      { label: "Bermudas", path: "/catalogo?categoria=bermudas" },
      { label: "Camisetas", path: "/catalogo?categoria=camisetas-urbanas" },
      { label: "Musculosas", path: "/catalogo?categoria=musculosas-urbanas" },
    ]
  },
  {
    label: "Indumentaria premium",
    path: "/all-products?cat=indumentaria-premium",
    sub: [
      { label: "Valija carry on", path: "/catalogo?categoria=valija-carryon" },
      { label: "Campera 3 en 1 importada", path: "/catalogo?categoria=campera-3en1" },
    ]
  },
  {
    label: "Regaleria empresarial",
    path: "/all-products?cat=regaleria-empresarial",
    sub: [
      { label: "Asado y mate", path: "/catalogo?categoria=asado-mate" },
      { label: "Termos y jarros", path: "/catalogo?categoria=termos-jarros" },
      { label: "Botellas y tazas", path: "/catalogo?categoria=botellas-tazas" },
      { label: "Congresos y oficina", path: "/catalogo?categoria=congresos-oficina" },
      { label: "Trofeos y placas", path: "/catalogo?categoria=trofeos-placas" },
      { label: "Medallas - pins", path: "/catalogo?categoria=medallas-pins" },
      { label: "Tecnologia", path: "/catalogo?categoria=tecnologia" },
      { label: "Playa y tiempo libre", path: "/catalogo?categoria=playa-tiempo-libre" },
      { label: "Gorros y sombreros", path: "/catalogo/gorras?categoria=gorros" },
      { label: "Mochilas y marroquineria", path: "/catalogo?categoria=mochilas-marroquineria" },
      { label: "Boligrafos", path: "/catalogo?categoria=boligrafos" },
      { label: "Bolsos petroleros", path: "/catalogo?categoria=bolsos-petroleros" },
    ]
  },
  {
    label: "Articulos promocionales",
    path: "/all-products?cat=articulos-promocionales",
    sub: [
      { label: "Playa y tiempo libre", path: "/catalogo?categoria=playa-promocional" },
      { label: "Gorros y sombreros", path: "/catalogo/gorras?categoria=todos" },
      { label: "Botellas y tazas", path: "/catalogo?categoria=botellas-tazas-promo" },
      { label: "Cintas colgantes y llaveros", path: "/catalogo?categoria=cintas-llaveros" },
      { label: "Banners y portabanners", path: "/catalogo/banners?categoria=portabanners" },
      { label: "Banderas - banderines - fly banners", path: "/catalogo/banners?categoria=banderas" },
      { label: "Inflables", path: "/catalogo?categoria=inflables" },
      { label: "Bolsas ecologicas", path: "/catalogo?categoria=bolsas-ecologicas" },
      { label: "Mochilas y marroquineria", path: "/catalogo?categoria=mochilas-marroquineria-promo" },
      { label: "Boligrafos", path: "/catalogo?categoria=boligrafos-promo" },
      { label: "Remeras y chombas", path: "/catalogo?categoria=remeras-chombas-promo" },
      { label: "Calcos - vinilos - carteleria", path: "/catalogo?categoria=calcos-vinilos" },
    ]
  },
  {
    label: "Elementos de seguridad",
    path: "/all-products?cat=elementos-de-seguridad",
    sub: [
      { label: "Bolsos petroleros", path: "/catalogo?categoria=bolsos-petroleros-seguridad" },
      { label: "Anteojos de seguridad", path: "/catalogo?categoria=anteojos-seguridad" },
      { label: "Botines", path: "/catalogo?categoria=botines-seguridad" },
      { label: "Zapatillas", path: "/catalogo?categoria=zapatillas-seguridad" },
      { label: "Zapatos", path: "/catalogo?categoria=zapatos-seguridad" },
      { label: "Chalecos de poliamida c/ reflectivo", path: "/catalogo?categoria=chalecos-reflectivo" },
    ]
  },
  {
    label: "Hospitalarios y limpieza",
    path: "/all-products?cat=hospitalarios-limpieza",
    sub: [
      { label: "Camisolines", path: "/catalogo?categoria=camisolines" },
      { label: "Guantes latex y nitrilo", path: "/catalogo?categoria=guantes" },
      { label: "Cofias", path: "/catalogo?categoria=cofias" },
      { label: "Ambos", path: "/catalogo?categoria=ambos" },
      { label: "Botas", path: "/catalogo?categoria=botas" },
    ]
  },
  {
    label: "Publicidad punto fijo",
    path: "/all-products?cat=publicidad-punto-fijo",
    sub: [
      { label: "Banderas", path: "/catalogo/banners?categoria=banderas" },
      { label: "Carteleria", path: "/catalogo?categoria=carteleria" },
      { label: "Fly banners", path: "/catalogo/banners?categoria=flybanners" },
      { label: "Porta banners", path: "/catalogo/banners?categoria=portabanners" },
      { label: "Inflables", path: "/catalogo?categoria=inflables-publicidad" },
      { label: "Vinilos", path: "/catalogo?categoria=vinilos" },
    ]
  },
  {
    label: "Cocina",
    path: "/all-products?cat=cocina",
    sub: [
      { label: "Cofias", path: "/catalogo?categoria=cofias-cocina" },
      { label: "Delantales", path: "/catalogo?categoria=delantales" },
      { label: "Ambos", path: "/catalogo?categoria=ambos-cocina" },
      { label: "Faldon", path: "/catalogo?categoria=faldon" },
    ]
  },
  {
    label: "Articulos de verano",
    path: "/all-products?cat=articulos-verano",
    sub: [
      { label: "Sombrillas", path: "/catalogo/banners?categoria=sombrillas" },
      { label: "Sombreros de paja", path: "/catalogo/gorras?categoria=sombreros" },
      { label: "Pilusos", path: "/catalogo/gorras?categoria=pilusos" },
      { label: "Pareo", path: "/catalogo?categoria=pareo" },
      { label: "Estacas", path: "/catalogo?categoria=estacas" },
    ]
  },
  { label: "Todos los productos", path: "/all-products" },
];

function Geder() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductosOpen, setIsProductosOpen] = useState(false);
  const [isMobileProductosOpen, setIsMobileProductosOpen] = useState(false);
  const [productosSubmenu, setProductosSubmenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const productosRef = useRef(null);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productosRef.current && !productosRef.current.contains(event.target)) {
        setIsProductosOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para cargar productos y generar menú dinámico
  useEffect(() => {
    const fetchProductsAndGenerateMenu = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://gserver.zeabur.app/api/products');
        if (!response.ok) throw new Error('Error al cargar productos');
        const products = await response.json();
        
        // Crear un mapa para rastrear qué categorías y subcategorías tienen productos
        const categoryMap = {};
        
        products.forEach(product => {
          const category = product.category;
          const subcategory = product.subcategory;
          
          if (category && CATEGORY_MAPPING[category]) {
            const mappedCategory = CATEGORY_MAPPING[category];
            const mainCat = mappedCategory.mainCategory;
            
            if (!categoryMap[mainCat]) {
              categoryMap[mainCat] = new Set();
            }
            
            // Mapear subcategoría si existe en el mapeo
            if (subcategory && mappedCategory.subcategories && mappedCategory.subcategories[subcategory]) {
              categoryMap[mainCat].add(mappedCategory.subcategories[subcategory]);
            }
          }
        });
        
        // Filtrar y construir el menú dinámico
        const dynamicMenu = BASE_PRODUCTOS_SUBMENU
          .filter(item => {
            // Mantener "Todos los productos" siempre
            if (item.label === "Todos los productos") return true;
            
            // Buscar la categoría principal en el mapeo
            const mainCat = item.path.split('=')[1];
            return categoryMap[mainCat] && categoryMap[mainCat].size > 0;
          })
          .map(item => {
            // Si es "Todos los productos", dejarlo como está
            if (item.label === "Todos los productos") return item;
            
            const mainCat = item.path.split('=')[1];
            const availableSubcategories = categoryMap[mainCat];
            
            if (availableSubcategories && item.sub) {
              // Filtrar subcategorías que tienen productos
              const filteredSub = item.sub.filter(subItem => {
                // Para elementos sin path (solo label), verificar si el label coincide
                const subLabel = subItem.label;
                return availableSubcategories.has(subLabel);
              });
              
              // Si hay subcategorías disponibles, devolver el item con subcategorías filtradas
              if (filteredSub.length > 0) {
                return {
                  ...item,
                  sub: filteredSub
                };
              }
            }
            
            return item;
          });
        
        setProductosSubmenu(dynamicMenu);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        // En caso de error, mostrar el menú base completo
        setProductosSubmenu(BASE_PRODUCTOS_SUBMENU);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProductsAndGenerateMenu();
    
    // Refrescar el menú cada 5 minutos para mantenerlo actualizado
    const interval = setInterval(fetchProductsAndGenerateMenu, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductosMenu = (e) => {
    e.preventDefault(); // Prevenir la navegación
    e.stopPropagation(); // Prevenir que el evento se propague
    setIsProductosOpen(!isProductosOpen);
  };

  const handleLoginClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/admin', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  };

  const handleProductosClick = (path) => {
    if (path === "/all-products") {
      navigate(path);
    }
  };

  return (
    <header className={`fixed w-full z-50 bg-[#fcfdfc] border-b border-yellow-600 shadow-lg transition-all duration-300 ${isScrolled ? 'py-0' : ''}`}>
      {/* Banner horizontal compacto */}
      <div className="metal-bg py-1 sm:py-2 flex items-center justify-center border-t border-b border-orange-300">
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 w-full">
          
          {/* Contenedor centrado (logo izquierdo + texto + logo derecho) */}
          <div className="flex items-center justify-center flex-1 min-w-0">
            <Link to="/" className="flex items-center min-w-0">
            {/* Logo izquierdo - visible en todos los dispositivos */}
            <img 
              src="https://i.postimg.cc/t4nPqS4N/logo.png" 
              alt="Logo GS" 
              className="h-8 sm:h-10 md:h-12 lg:h-14 mr-2 sm:mr-3 md:mr-4 shrink-0"
              loading="lazy"
            />
            
            {/* Divisor izquierdo - visible en desktop, oculto en móvil */}
            <div className="hidden md:block logo-dividerc bg-yellow-400/60 h-6 sm:h-8 mx-1 sm:mx-2 md:mx-3 lg:mx-4 w-px shrink-0"></div>
            
            {/* Texto principal - centrado */}
            <h1 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-yellow-500 uppercase tracking-tight sm:tracking-wide font-montserrat whitespace-nowrap truncate min-w-0 text-center">
              SOLUCIONES EN PUBLICIDAD GRÁFICA
            </h1>
            
            {/* Divisor derecho - visible en desktop, oculto en móvil */}
            <div className="hidden md:block logo-dividerc bg-yellow-400/60 h-6 sm:h-8 mx-1 sm:mx-2 md:mx-3 lg:mx-4 w-px shrink-0"></div>
            
            {/* Logo derecho - visible en desktop, oculto en móvil */}
            <img 
              src="https://i.postimg.cc/t4nPqS4N/logo.png" 
              alt="Logo GS" 
              className=" md:block h-8 sm:h-10 md:h-12 lg:h-14 ml-2 sm:ml-3 md:ml-4 shrink-0"
              loading="lazy"
            />
            </Link>
          </div>
    
          {/* Redes sociales - ocultas en móvil, visibles en desktop */}
          <div className="hidden md:flex items-center space-x-1 md:space-x-2 lg:space-x-3 shrink-0 ml-4">
            {SOCIAL_LINKS.map((social, index) => (
              <Link 
                key={index}
                to={social.url} 
                className={`social-btn ${social.className} hover:text-white w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full transition-colors duration-200`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon.split('-')[1]}
              >
                <i className={`${social.icon} text-xs md:text-sm text-black hover:text-white`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    
      {/* Efecto de brillo */}
      <div className="h-px bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
    
      {/* Navegación principal */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 flex relative">
        {/* Botón búsqueda (oculto en móvil) */}
        <div className="hidden md:block shrink-0 justify-self-start mr-4">
          <button 
            className="text-gray-600 hover:text-blue-600 transition-colors p-1"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        {/* Menú principal - oculto en móvil */}
        <nav className="hidden md:flex font-bold space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8 w-full justify-center">
          {NAV_ITEMS.map((item, index) => {
            if (item.label === "PRODUCTOS") {
              return (
                <div
                  key={index}
                  ref={productosRef}
                  className="relative"
                >
                  <button
                    onClick={toggleProductosMenu}
                    onMouseEnter={() => !isLoading && setIsProductosOpen(true)}
                    className={`text-gray-700 text-xs lg:text-sm xl:text-base font-semibold px-1 lg:px-2 xl:px-3 py-1 border-b-2 border-transparent transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center ${item.hoverClass} ${isLoading ? 'opacity-50 cursor-wait' : ''} ${isProductosOpen ? 'text-blue-700 border-blue-600' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={isProductosOpen}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        PRODUCTOS
                      </span>
                    ) : (
                      <>
                        {item.label}
                        <svg className={`ml-1 w-3 h-3 transition-transform ${isProductosOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                  {/* Submenú desktop - Mejorado con scroll y más ancho */}
                  {!isLoading && (
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-yellow-400 rounded-lg shadow-xl z-50 transition-all duration-200 min-w-[800px] ${isProductosOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
                      onMouseEnter={() => setIsProductosOpen(true)}
                      onMouseLeave={() => setIsProductosOpen(false)}
                    >
                      <div className="p-4 max-h-[70vh] overflow-y-auto">
                        <div className="grid grid-cols-3 gap-6">
                          {productosSubmenu.map((sub, i) => (
                            <div key={i} className="relative group/submenu">
                              <div className="flex items-center justify-between">
                                <Link
                                  to={sub.path}
                                  className="block text-gray-700 hover:text-yellow-700 text-sm font-semibold transition-colors mb-2 flex-grow"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsProductosOpen(false);
                                    handleProductosClick(sub.path);
                                  }}
                                >
                                  <span className="font-bold text-blue-700 border-b border-blue-200 pb-1">{sub.label}</span>
                                </Link>
                                {sub.sub && sub.sub.length > 0 && (
                                  <svg className="ml-2 w-3 h-3 text-gray-400 group-hover/submenu:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                )}
                              </div>
                              {/* Submenú secundario desktop - Mejorado */}
                              {sub.sub && sub.sub.length > 0 && (
                                <div className="absolute top-0 left-full ml-2 w-72 bg-white border border-yellow-300 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 p-3">
                                  <ul className="space-y-2">
                                    {sub.sub.map((s, j) => (
                                      <li key={j}>
                                        <Link
                                          to={s.path || '#'}
                                          className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-700 text-sm transition-colors rounded-md border-l-2 border-transparent hover:border-yellow-400"
                                          onClick={() => {
                                            setIsProductosOpen(false);
                                          }}
                                        >
                                          {s.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {sub.sub && sub.sub.length > 0 && (
                                <ul className="space-y-1 mt-2">
                                  {sub.sub.slice(0, 3).map((s, j) => (
                                    <li key={j}>
                                      <Link
                                        to={s.path || '#'}
                                        className="block px-2 py-1 text-gray-600 hover:text-yellow-700 text-xs transition-colors truncate"
                                        onClick={() => setIsProductosOpen(false)}
                                      >
                                        {s.label}
                                      </Link>
                                    </li>
                                  ))}
                                  {sub.sub.length > 3 && (
                                    <li className="text-xs text-gray-500 italic px-2 py-1">
                                      +{sub.sub.length - 3} más...
                                    </li>
                                  )}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                        {/* Contador de categorías */}
                        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                          <span className="text-xs text-gray-500 font-medium">
                            {productosSubmenu.length} categorías disponibles • {productosSubmenu.reduce((acc, item) => acc + (item.sub?.length || 0), 0)} subcategorías
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={index}
                to={item.path}
                className={`text-gray-700 text-xs lg:text-sm xl:text-base font-semibold px-1 lg:px-2 xl:px-3 py-1 border-b-2 border-transparent transition-all duration-200 whitespace-nowrap ${item.hoverClass}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        {/* Acciones derecha */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 shrink-0">
          {/* Botón búsqueda móvil */}
          <button 
            className="text-gray-600 hover:text-blue-600 transition-colors p-1 md:hidden"
            aria-label="Mobile search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Botón login - oculto en móvil */}
          <button 
            className="text-gray-600 hover:text-blue-600 transition-colors p-1 hidden md:block justify-self-end"
            aria-label="Login"
            onClick={handleLoginClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </button>
          
          {/* Menú hamburguesa móvil */}
          <button 
            className="md:hidden text-gray-600 p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="flex flex-col space-y-1 px-4 py-3">
          {NAV_ITEMS.map((item, index) => {
            if (item.label === "PRODUCTOS") {
              return (
                <div key={index} className="flex flex-col">
                  <button
                    className={`flex items-center justify-between text-gray-700 text-base font-semibold px-3 py-2 rounded-md transition-all duration-200 hover:bg-gray-100 focus:outline-none ${isLoading ? 'opacity-50 cursor-wait' : ''}`}
                    onClick={() => !isLoading && setIsMobileProductosOpen((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={isMobileProductosOpen}
                    disabled={isLoading}
                  >
                    <span className="flex items-center">
                      {isLoading && (
                        <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      {item.label}
                    </span>
                    {!isLoading && (
                      <svg className={`ml-2 h-4 w-4 transform transition-transform ${isMobileProductosOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {!isLoading && (
                    <div className={`pl-2 border-l border-yellow-200 transition-all duration-200 ${isMobileProductosOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-y-auto`}> 
                      <ul className="flex flex-col space-y-2 py-2">
                        {productosSubmenu.map((sub, i) => (
                          <li key={i} className="relative">
                            {sub.sub && sub.sub.length > 0 ? (
                              <>
                                <button
                                  type="button"
                                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 text-sm font-medium transition-colors rounded-md flex items-center justify-between"
                                  onClick={() => setIsMobileProductosOpen(isMobileProductosOpen === i ? null : i)}
                                >
                                  <span className="font-semibold text-blue-700">{sub.label}</span>
                                  <svg className={`ml-2 h-4 w-4 transform transition-transform ${isMobileProductosOpen === i ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                                <div className={`pl-3 border-l border-yellow-100 transition-all duration-200 ${isMobileProductosOpen === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden bg-white`}> 
                                  <ul className="flex flex-col space-y-1 py-2">
                                    {sub.sub.map((s, j) => (
                                      <li key={j}>
                                        <Link
                                          to={s.path || '#'}
                                          className="block px-4 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-700 text-xs transition-colors rounded"
                                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileProductosOpen(false); }}
                                        >
                                          {s.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </>
                            ) : (
                              <Link
                                to={sub.path}
                                className="block px-4 py-3 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 text-sm font-medium transition-colors rounded-md"
                                onClick={() => { setIsMobileMenuOpen(false); setIsMobileProductosOpen(false); }}
                              >
                                <span className="font-semibold text-blue-700">{sub.label}</span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                      {/* Contador en móvil */}
                      <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                        <span className="text-xs text-gray-500 font-medium">
                          {productosSubmenu.length} categorías disponibles
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={index}
                to={item.path}
                className={`text-gray-700 text-base font-semibold px-3 py-2 rounded-md transition-all duration-200 ${item.hoverClass.replace('border-b-2', '')} hover:bg-gray-100`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          
          {/* Redes sociales en menú móvil - centradas */}
          <div className="flex justify-center space-x-4 pt-3 border-t border-gray-200 mt-2">
            {SOCIAL_LINKS.map((social, index) => (
              <Link 
                key={index}
                to={social.url} 
                className={`social-btn ${social.className} hover:text-white w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon.split('-')[1]}
              >
                <i className={`${social.icon} text-sm`}></i>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Geder);