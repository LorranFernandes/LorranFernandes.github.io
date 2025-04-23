// pages/Home.tsx
import SocialIcons from '../components/SocialIcons'

export default function Home() {
  return (
    <section id="home" className="py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">{/*6*/}
            <h1 className="display-4 fw-bold mb-3">Lorran Fernandes</h1>
            <h2 className="text-muted mb-4">Desenvolvedor Back-End | Java | Spring Boot |  Graduando em Sistemas de Informação CEFET/RJ</h2>
            <p className="lead mb-4">
              Construo soluções robustas e escaláveis para o back-end.
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  )
}