import { BrowserRouter, Routes, Route } from 'react-router';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import AdminPage from '../components/AdminPage.jsx';
import Preview from '../components/Preview.jsx';
import Output from '../components/Output.jsx';

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

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/output" element={<Output />} />
        <Route path="/preview" element={<Preview />} />
      </Routes> 
    </BrowserRouter>
  </StrictMode>,
)
