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
import IndustrialClothingHero from '../components/Flyers/IndustrialClothingHero.jsx';
import CorporateGiftsHero from '../components/Flyers/CorporateGiftsHero.jsx';
import PromotionalProductsHero from '../components/Flyers/PromotionalProductsHero.jsx';
import SportswearHero from '../components/Flyers/SportswearHero.jsx';
import GraduatesHero from '../components/Flyers/GraduatesHero.jsx';
import WorkJacketsHero from '../components/Flyers/WorkJacketsHero.jsx';
import UmbrellasFlagsHero from '../components/Flyers/UmbrellasFlagsHero.jsx';
import CapsHatsHero from '../components/Flyers/CapsHatsHero.jsx';
import BusinessGiftSection from '../components/BusinessGiftsSection.jsx';
import ShirtsWindbreakersHero from '../components/Flyers/ShirtsWindbreakersHero.jsx';
import BagsVestsHero from '../components/Flyers/BagsVestsHero.JSX';
import Whatsapp from './Whatsapp.jsx';
// import SportHero from '../components/Regaleria.jsx';

function Home() {
  return (
    <section className="container-xl">
      {/* <Navbar/> */}
      <Geder />
      <NuevosIngresos />
      {/* 1 */}
      <BusinessGiftSection />
      {/* 2 */}
      < PromotionalProductsHero />
      {/* 3 */}
      < GraduatesHero />
      {/*  */}
      {/* <IndumentariaIndustrial /> */}
      <PromocionaTuEmpresa />
      {/* <Carteleria /> */}
      <SportswearHero /> 
      <ShirtsWindbreakersHero />
      <BagsVestsHero/>
      < CapsHatsHero />
     {/* < UmbrellasFlagsHero />  */}
      <IndustrialClothingHero />
      <NosElijen />
      {/* 
      Termos
      Set materos
      */}
      {/* <Hero /> */}
      {/* Ubico Seguridad después del Hero, antes de los catálogos */}
      {/* <Seguridad />
      <IndumentariaDeportiva />
      <HeroEgresados />
      <Hogar />
      <Hospitalario />
      <Marroquineria />
      <Proceso />      */}
      <Footer /> 
      {/* <Whatsapp/> */}

    </section>
  )
}

export default Home