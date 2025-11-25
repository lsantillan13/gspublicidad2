import React from 'react'
import Geder from '../Geder'

function Categorias() {
  return (
    <>
        <Geder/>
        <div className="product-preview">
            {/* Imagen principal del producto */}
            <div className="main-image">
                <img src="/images/producto-principal.jpg" alt="Producto principal" style={{ width: '300px', borderRadius: '8px' }} />
            </div>
            {/* Otras imágenes */}
            <div className="other-images" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <img src="/images/producto-1.jpg" alt="Producto 1" style={{ width: '60px', borderRadius: '4px' }} />
                <img src="/images/producto-2.jpg" alt="Producto 2" style={{ width: '60px', borderRadius: '4px' }} />
                <img src="/images/producto-3.jpg" alt="Producto 3" style={{ width: '60px', borderRadius: '4px' }} />
            </div>
            {/* Información del producto */}
            <div className="product-info" style={{ marginTop: '20px' }}>
                <h2>Nombre del Producto</h2>
                <p><strong>Precio:</strong> $199.99</p>
                <p><strong>Descripción:</strong> Este producto es ideal para tus necesidades. Cuenta con materiales de alta calidad y un diseño moderno.</p>
                <ul>
                    <li>Característica 1</li>
                    <li>Característica 2</li>
                    <li>Característica 3</li>
                </ul>
            </div>
            {/* Recomendaciones */}
            <div className="recommended-products" style={{ marginTop: '30px' }}>
                <h3>Te puede interesar:</h3>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div className="recommended-item" style={{ textAlign: 'center' }}>
                        <img src="/images/recomendado-1.jpg" alt="Recomendado 1" style={{ width: '80px', borderRadius: '4px' }} />
                        <p>Producto Recomendado 1</p>
                    </div>
                    <div className="recommended-item" style={{ textAlign: 'center' }}>
                        <img src="/images/recomendado-2.jpg" alt="Recomendado 2" style={{ width: '80px', borderRadius: '4px' }} />
                        <p>Producto Recomendado 2</p>
                    </div>
                    <div className="recommended-item" style={{ textAlign: 'center' }}>
                        <img src="/images/recomendado-3.jpg" alt="Recomendado 3" style={{ width: '80px', borderRadius: '4px' }} />
                        <p>Producto Recomendado 3</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categorias