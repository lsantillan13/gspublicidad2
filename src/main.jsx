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
import EgresadosMayoristas from '../pages/Mayoristas.jsx';
import EgresadosMayoristas2 from '../pages/Mayoristas2.jsx';
import Productos from '../pages/Productos.jsx';
import Search from '../pages/Search.jsx';
import Whatsapp from '../pages/Whatsapp.jsx';
import ProductDetail from '../pages/ProductDetail.jsx';
import Categorias from '../components/UI-UX/Categorias.jsx';

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
        <Route path="/about" element={<App />} />
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/con-tu-logo" element={<ConTuLogo />} />
        {/* <Route path="/con-tu-logo2" element={<ConTuLogo2 />} /> */}
        <Route path="egresados-y-mayoristas" element={<EgresadosMayoristas />} />
        <Route path="egresados-y-mayoristas2" element={<EgresadosMayoristas2 />} />

        {/* PÁGINA DE PRODUCTOS */}
        <Route path="/productos" element={<Productos />} />

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
    <Whatsapp/>
  </StrictMode>,
)
