// App.tsx
import AnimatedSection from './components/AnimatedSection'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <AnimatedSection id="home">
          <Home />
        </AnimatedSection>
        
        <AnimatedSection id="about">
          <About />
        </AnimatedSection>
        
        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection id="contact" >
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}

export default App