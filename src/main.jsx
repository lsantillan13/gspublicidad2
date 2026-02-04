import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import AdminPreview from '../components/Admin/AdminDashboard.jsx';
import ContentManagement from '../components/Admin/ContentManagement.jsx';
import ProductManagement from '../components/Admin/ProductManagement.jsx';
import AdminDashboard from '../components/Admin/AdminDashboard.jsx';
import Login from '../components/Login.jsx';
import Preview from '../components/Preview.jsx';
import Output from '../components/Output.jsx';
import Contacto from '../pages/Contacto.jsx';
import ConTuLogo from '../pages/ConTuLogo.jsx';
// import ConTuLogo2 from '../pages/ConTuLogo2.jsx';
import FAQ from '../pages/Faq.jsx';
import EgresadosCatalogo from '../pages/EgresadosCatalogo.jsx';
import EgresadosMayoristas2 from '../pages/Mayoristas2.jsx';
import Productos from '../pages/Productos.jsx';
import Search from '../pages/Search.jsx';
import Whatsapp from '../pages/Whatsapp.jsx';
import ProductDetail from '../pages/ProductDetail.jsx';
import Categorias from '../components/UI-UX/Categorias.jsx';
import Novedades from '../pages/Novedades.jsx';

import HatCategorySelector from '../components/Flyers/ProductsContainers/HatCategorySelector.jsx';
import HatsCatalog from '../components/Flyers/ProductsContainers/HatsCatalog.jsx';


// 

import ProductosEmpresariales from '../pages/ProductosEmpresariales.jsx';
import Promocionales from '../pages/Promocionales.jsx';
import Mercadotecnia from '../pages/Mercadotecnia.jsx';
import BannersCategorySelector from '../components/Flyers/ProductsContainers/BannersCategorySelector.jsx';
import BannersCatalog from '../components/Flyers/ProductsContainers/BannersCatalog.jsx';
import AllProducts from '../components/catalogo/AllProducts.jsx';
import Mantenimiento from '../components/Utils/Mantenimiento.jsx';
import RegalosEmpresarialesCatalogo from '../components/catalogo/RegalosEmpresarialesCatalogo.jsx';
import ArticulosPromocionalesCatalogo from '../components/catalogo/ArticulosPromocionalesCatalogo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/all-products/" element={<catalogo />} /> */}
        {/* <Route path="/egresados-y-mayoristas/" element={<mayoristas />} /> */}
        {/* <Route path="/con-tu-logo/" element={<ConTuLogo />} /> */}
        {/* <Route path="/faq" element={< faq />} /> */}
        {/* <Route path="/contacto" element={< Contacto />} /> */}
        
        <Route path="/search" element={<Search/>} />
        <Route path="/about" element={<Mantenimiento/>} />
        <Route path="/servicios" element={<Mantenimiento/>} />
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/con-tu-logo" element={<ConTuLogo />} />
        {/* <Route path="/con-tu-logo2" element={<ConTuLogo2 />} /> */}
        <Route path="egresados" element={<EgresadosCatalogo />} />


        {/* PÁGINA DE PRODUCTOS */}
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/catalogo" element={<AllProducts />} />


        {/* PÁGINA DE CATÁLOGO DE PRODUCTOS */}
        <Route path="/catalogo/gorras/selector" element={<HatCategorySelector />} />
        <Route path="/catalogo/gorras" element={<HatsCatalog />} />
        <Route path="/regaleria-empresarial" element={<RegalosEmpresarialesCatalogo />} />
        <Route path="/articulos-promocionales" element={<ArticulosPromocionalesCatalogo />} />

        <Route path="/catalogo/banners/selector" element={<BannersCategorySelector />} />
        <Route path="/catalogo/banners" element={<BannersCatalog />} />

        {/* PÁGINA DE NOVEDADES */}
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/merchandising" element={<ProductosEmpresariales />} />
        <Route path="/promocionales" element={<Promocionales />} />
        <Route path="/mercadotecnia-y-promocionales" element={<Mercadotecnia />} />

        {/* PÁGINA DE CATEGORÍAS */}
        <Route path="/categoria" element={<Categorias />} />

        {/* PÁGINA DE PRODUCTO */}
        <Route path="/producto/:id" element={<ProductDetail />} />

        {/* PÁGINA DE CATEGORÍA */}
        {/* <Route path="/plp/:category/" element={<ProductDetail />} /> */}



        {/* <Route path="/productos/:category" element={<App />} />
        <Route path="/productos/:category/:product" element={<App />} />
        <Route path="/productos/:category/:product/:id" element={<App />} />
        <Route path="/productos/:category/:product/:id/:size" element={<App />} />
        <Route path="/productos/:category/:product/:id/:size/:color" element={<App />} />
        <Route path="/productos/:category/:product/:id/:size/:color/:quantity" element={<App />} />
        <Route path="/productos/:category/:product/:id/:size/:color/:quantity/:price" element={<App />} /> */}


        <Route path="/admin" element={<AdminPreview />}>
          <Route index element={<ProductManagement/>} />

          <Route path="products" element={<ProductManagement />} />
          <Route path="content" element={<ContentManagement />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/output" element={<Output />} />
        <Route path="/preview" element={<Preview />} />
      </Routes> 
    </BrowserRouter>
    {/* <Whatsapp/> */}
  </StrictMode>,
)
