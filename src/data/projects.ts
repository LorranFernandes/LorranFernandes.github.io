// data/projects.ts
import { Project } from '../types'

export const projects: Project[] = [
  {
    name: "API para Biblioteca",
    description:
      "API RESTful desenvolvida para gerenciamento de livros, autores e usuários. Conta com autenticação via OAuth2 e tokens JWT, além de endpoints protegidos por roles e documentação interativa com Swagger.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "OAuth2", "Docker", "Swagger"],
    githubUrl: "https://github.com/LorranFernandes/library-api"
  },
  {
    name: "Sistema de Gestão de Avisos",
    description:
      "Aplicação Full Stack para gerenciamento e exibição de avisos em tempo real. O Frontend foi construído em TypeScript puro, enquanto o Backend em PHP implementa segurança avançada com criptografia SHA-512 (Salt & Pepper) e controle de sessões.",
    technologies: ["PHP 8", "TypeScript", "MySQL", "Playwright", "Vitest", "PHPStan",],
    githubUrl: "https://github.com/LorranFernandes/acme-avisos",
    liveUrl: "https://adaptable-manifestation-production.up.railway.app/"
  },
  {
    name: "Kings Quest - Jogo em JavaScript",
    description:
      "Jogo interativo desenvolvido com HTML, CSS e JavaScript puro. Inspirado em um desafio do freeCodeCamp, com narrativa medieval, sistema de combate, upgrades e progressão por fases.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/LorranFernandes/Game-KingsQuest",
    liveUrl: "https://game-kings-quest.vercel.app"
  }
]