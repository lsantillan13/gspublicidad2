import React from 'react'
import Navigation from '../components/Navigation.jsx'
import Hero from '../components/Home/Hero.jsx'
import Navbar from '../components/Navbar.jsx'
import ProductosDestacados from '../components/TopProducts.jsx'
import IndumentariaIndustrial from '../components/catalogo/IndumentariaIndustrial.jsx'
import Regaleria from '../components/Regaleria.jsx'
import Footer from '../components/Footer.jsx'
import NuevosIngresos from '../components/Home/Hero.jsx'
import IndumentariaDeportiva from '../components/catalogo/IndumentariaDeportiva.jsx'
import HeroEgresados from '../components/catalogo/HeroEgresados.jsx'
import PromocionaTuEmpresa from '../components/catalogo/PromocionaTuEmpresa.jsx'
import Hogar from '../components/catalogo/Hogar.jsx'
import Hospitalario from '../components/catalogo/Hospitalario.jsx'
import Geder from '../components/Geder.jsx'
import Header from '../components/Header.jsx'

function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Geder />
      {/* <NuevosIngresos /> */}
      <Hero />
      <IndumentariaIndustrial />
      <IndumentariaDeportiva />
      <HeroEgresados />
      <Regaleria />
      <PromocionaTuEmpresa />
      <Hogar />
      <Hospitalario />
      {/*       
        <Carteleria />
        <Marroquineria />
        <NosElijen />
        <ComoTrabajamos />
        <Whatsapp/>
      */}
      <Footer />
    </div>
  )
}

export default Home