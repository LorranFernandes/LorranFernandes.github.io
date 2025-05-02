// pages/Home.tsx
import SocialIcons from '../components/SocialIcons'

export default function Home() {
  return (
<section id="home" className="py-5 position-relative" style={{ overflow: 'hidden' }}>


  <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h1 className="display-4 fw-bold mb-3">Lorran Fernandes<span className="blinking-cursor">|</span></h1>
        <h2 className="mb-4">
          Desenvolvedor Full Stack | Java | Spring Boot | Graduando em Sistemas de Informação CEFET/RJ
        </h2>
        <p className="lead mb-4">
          Construo soluções robustas e escaláveis para o seu negócio.
        </p>
        <SocialIcons />
      </div>
      <div className="col-lg-6 text-center mt-4 mt-lg-0">
        <img
          src="./images/profile.jpg"
          alt="Lorran Fernandes"
          className="rounded-circle img-fluid"
          style={{ width: '350px', height: '350px', objectFit: 'cover', border: '2px solid #444' }}
        />
      </div>
    </div>
  </div>
</section>

  )
}