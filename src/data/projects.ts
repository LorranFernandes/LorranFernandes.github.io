// data/projects.ts
import { Project } from '../types'

export const projects: Project[] = [
  {
    name: "API para Biblioteca",
    description:
      "API RESTful desenvolvida para gerenciamento de livros, autores e usuários. Conta com autenticação via OAuth2 e tokens JWT, além de endpoints protegidos por roles e documentação interativa com Swagger.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "OAuth2", "Docker", "Swagger"],
    githubUrl: "https://github.com/LorranFernandes/library-api",
    /*liveUrl: "https://api-order-system.example.com/docs"*/
  }
]