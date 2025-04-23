// src/pages/About.tsx
import React from 'react'
import SectionTitle from '../components/SectionTitle'

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <SectionTitle title="Sobre Mim" subtitle="Conheça mais sobre meu trabalho" />
        
        <div className="row">
          <div className="col-lg-6">
            <p className="lead">
            Sou graduando no 6º período de Sistemas de Informação no CEFET/RJ, com foco em desenvolvimento back-end.
            </p>
            <p>
            Sou uma pessoa ativa, apaixonada por esportes e que valoriza momentos com amigos e família.
            Atualmente tenho me dedicado especialmente à linguagem Java e ao ecossistema Spring Boot, buscando construir APIs seguras e bem estruturadas.
            </p>
          </div>
          
          <div className="col-lg-6">
            <h4 className="mb-3">Minhas Skills</h4>
            <div className="mb-4">
              {['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'PHP', 'JavaScript', 'Python', 'TypeScript', 'Kotlin', 'Docker', 'Swagger'].map((skill, index) => (
                <span key={index} className="badge bg-primary me-2 mb-2 p-2">{skill}</span>
              ))}
            </div>
            
            <h4 className="mb-3">Ferramentas</h4>
            <div>
              {['VS Code', 'IntelliJ IDEA', 'Postman','Git', 'Maven', 'Linux'].map((tool, index) => (
                <span key={index} className="badge bg-secondary me-2 mb-2 p-2">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About