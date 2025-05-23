import React from 'react'

function HeroEgresados() {
  return (
            <section className="heroEgresados">
            {/* {<!-- Efectos flotantes -->} */}
            <div className="floating-elements">
                <div className="floating-element" style={{width: '300px', height: "300px", top: "10%", left: "5%", animationDelay: "0s"}}></div>
                <div className="floating-element" style={{width: '200px', height: '200px', bottom: '15%', right: '10%', animationDelay: '-5s'}}></div>
            </div>
            
            {/* <!-- Partículas --> */}
            <div className="particles" id="particles-js"></div>
            
            <div className="hero-content">
                <h1 className="hero-title">EGRESADOS <span>2024</span></h1>
                <p className="hero-subtitle">TU CAMPERA EXCLUSIVA - UPD 2025</p>
                <a href="#promociones" className="cta-button">VER PROMOCIONES</a>
                <div className="year-badge">EDICIÓN LIMITADA</div>
            </div>
        </section>
  )
}

export default HeroEgresados