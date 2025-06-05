import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import AdminPage from '../components/AdminPage.jsx';
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
        <Route path="/all-products" element={<Productos />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/about" element={<App />} />
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/con-tu-logo" element={<ConTuLogo />} />
        {/* <Route path="/con-tu-logo2" element={<ConTuLogo2 />} /> */}
        <Route path="egresados-y-mayoristas" element={<EgresadosMayoristas />} />
        <Route path="egresados-y-mayoristas2" element={<EgresadosMayoristas2 />} />


        <Route path="/productos/:category" element={<App />} />
        <Route path="/productos/:category/:product" element={<App />} />
        <Route path="/productos/:category/:product/:id" element={<App />} />
        <Route path="/productos/:category/:product/:id/:size" element={<App />} />
        <Route path="/productos/:category/:product/:id/:size/:color" element={<App />} />
        <Route path="/productos/:category/:product/:id/:size/:color/:quantity" element={<App />} />
        <Route path="/productos/:category/:product/:id/:size/:color/:quantity/:price" element={<App />} />


        <Route path="/admin" element={<AdminPage />} />
        <Route path="/output" element={<Output />} />
        <Route path="/preview" element={<Preview />} />
      </Routes> 
    </BrowserRouter>
    <Whatsapp/>
  </StrictMode>,
)
