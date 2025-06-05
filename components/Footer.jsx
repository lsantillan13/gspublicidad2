import { Link } from "react-router-dom";

const Footer = () => {
  // Data for footer sections
  const footerData = {
    company: {
      name: "GS Publicidad",
      description: "Soluciones en publicidad gráfica personalizada para tu marca.",
      socialLinks: [
        {
          url: "https://www.facebook.com/gspublicidadoficial/",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="white" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          ),
          label: "Facebook"
        },
        {
          url: "https://www.instagram.com/gspublicidad/",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="#fff" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          ),
          label: "Instagram"
        }
      ]
    },
    products: [
      { name: "Indumentaria", url: "/productos/indumentaria" },
      { name: "Calzados", url: "/productos/calzados" },
      { name: "Regalería", url: "/productos/regaleria" },
      { name: "Cartelería", url: "/productos/carteleria" },
      { name: "Marroquineria", url: "/productos/marroquineria" }
    ],
    companyLinks: [
      { name: "Nosotros", url: "/about" },
      { name: "Proceso", url: "/proceso" },
      { name: "Clientes", url: "/clientes" },
      { name: "Trabajá con nosotros", url: "/trabajo" }
    ],
    contactInfo: [
      {
        type: "address",
        content: "San Martín 4379, Neuquén",
        url: "https://g.co/kgs/88ZDLWa",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="white" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        type: "phone",
        content: "+549 299 549-9076",
        url: "tel:02995499076",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="white" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        )
      },
      {
        type: "email",
        content: "consulogo@gspublicidad.com.ar",
        url: "mailto:consulogo@gspublicidad.com.ar",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="white" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className='text-center md:text-start'>
          <Link to="/" className="group">
            <h3 className="text-4xl font-bold mb-4 text-blue-400 group-hover:text-white transition-colors">
              {footerData.company.name}
            </h3>
          </Link>
          <p className="text-gray-400 md:text-xl font-bold">
            {footerData.company.description}
          </p>
          <div className="mt-4 flex space-x-4 justify-center md:justify-start">
            {footerData.company.socialLinks.map((social, index) => (
              <Link 
                key={index}
                to={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Products */}
        <div className='text-center md:text-start'>
          <Link to="/productos">
            <h4 className="font-bold mb-2 text-white text-2xl hover:text-blue-400 transition-colors">
              PRODUCTOS
            </h4>
          </Link>
          <ul className="space-y-2">
            {footerData.products.map((product, index) => (
              <li key={index}>
                <Link 
                  to={product.url}
                  className="text-gray-400 font-bold text-xl md:text-lg hover:text-white transition-colors block"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Company Links */}
        <div className="text-center md:text-start">
          <Link to="/about">
            <h4 className="font-bold mb-4 text-white text-2xl hover:text-blue-400 transition-colors">
              EMPRESA
            </h4>
          </Link>
          <ul className="space-y-2">
            {footerData.companyLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.url}
                  className="text-gray-400 font-bold text-xl md:text-lg hover:text-white transition-colors block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="text-center md:text-start">
          <Link to="/contacto">
            <h4 className="font-bold mb-4 text-white text-2xl hover:text-blue-400 transition-colors">
              CONTACTO
            </h4>
          </Link>
          <ul className="space-y-2">
            {footerData.contactInfo.map((contact, index) => (
              <li key={index} className="flex items-start justify-center md:justify-start">
                <a 
                  href={contact.url} 
                  target={contact.type === "address" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-gray-300 font-bold text-xl md hover:text-white transition-colors flex items-center"
                >
                  {contact.icon}
                  {contact.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GS Soluciones en Publicidad Gráfica. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;