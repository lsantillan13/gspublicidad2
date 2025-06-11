import React from 'react'
import Navigation from '../components/Navigation.jsx';
import Navbar from '../components/Navbar.jsx';
import ProductosDestacados from '../components/TopProducts.jsx';

import Geder from '../components/Geder.jsx';
import Hero from '../components/Home/Hero.jsx';
import IndumentariaIndustrial from '../components/catalogo/IndumentariaIndustrial.jsx';
import IndumentariaDeportiva from '../components/catalogo/IndumentariaDeportiva.jsx';

import HeroEgresados from '../components/catalogo/HeroEgresados.jsx';
import Regaleria from '../components/Regaleria.jsx';
import PromocionaTuEmpresa from '../components/catalogo/PromocionaTuEmpresa.jsx';
import Hogar from '../components/catalogo/Hogar.jsx';
import Hospitalario from '../components/catalogo/Hospitalario.jsx';
import Carteleria from '../components/catalogo/Carteleria.jsx';
import Marroquineria from '../components/catalogo/Marroquineria.jsx';
import NosElijen from '../components/catalogo/NosElijen.jsx';
import Proceso from '../components/catalogo/Proceso.jsx';
// import ComoTrabajamos from '../components/catalogo/ComoTrabajamos.jsx';

import Footer from '../components/Footer.jsx'
import NuevosIngresos from '../components/Home/Hero.jsx'
import Header from '../components/Header.jsx'
import Seguridad from '../components/Seguridad.jsx'; // Importación del componente

function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Geder />
      {/* <NuevosIngresos /> */}
      <Hero />
      {/* Ubico Seguridad después del Hero, antes de los catálogos */}
      <IndumentariaIndustrial />
      <Seguridad />
      <IndumentariaDeportiva />
      <HeroEgresados />
      <Regaleria />
      <PromocionaTuEmpresa />
      <Hogar />
      <Hospitalario />
      <Carteleria />
      <Marroquineria />
      <NosElijen />
      <Proceso />
      {/* <Whatsapp/> */}
      <Footer />
    </div>
  )
}

export default Home