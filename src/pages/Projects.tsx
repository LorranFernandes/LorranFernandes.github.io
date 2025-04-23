// pages/Projects.tsx
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        <SectionTitle title="Meus Projetos" subtitle="Alguns dos meus trabalhos recentes" />
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}