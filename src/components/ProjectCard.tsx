// components/ProjectCard.tsx
import { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 d-flex flex-column">
        <div className="card-body d-flex flex-column">
          <div>
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            <div className="mb-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge bg-secondary me-1 mb-1">{tech}</span>
              ))}
            </div>
          </div>
          
          {/* Container dos botões que vai para o final */}
          <div className="mt-auto pt-3">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary me-2"
            >
              Ver código
            </a>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-success"
              >
                Ver projeto
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}