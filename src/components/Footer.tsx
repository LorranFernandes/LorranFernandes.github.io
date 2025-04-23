// src/components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-5">
          
          {/* E-mail - Centralizado */}
          <div className="order-1 order-md-1">
            <a 
              href="mailto:lorranfparreira@gmail.com" 
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <i className="bi bi-envelope-fill me-2"></i>
              lorranfparreira@gmail.com
            </a>
          </div>

          {/* Divisor - Visível apenas em desktop */}
          <div className="d-none d-md-block order-md-2">
            <div className="vr bg-white opacity-25" style={{height: '20px'}}></div>
          </div>

          {/* Copyright - Centralizado */}
          <div className="small order-2 order-md-3">
            &copy; {new Date().getFullYear()} Portfólio Dev Back-End
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer