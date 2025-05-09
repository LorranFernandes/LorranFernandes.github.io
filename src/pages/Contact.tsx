// src/pages/Contact.tsx
import React from 'react'
import SectionTitle from '../components/SectionTitle'

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!')
  }

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <SectionTitle title="Contato" subtitle="Entre em contato comigo" />
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea className="form-control" id="message" rows={5} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact