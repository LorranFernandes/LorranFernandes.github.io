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
    name: "Controle Financeiro Frontend",
    description:
    "Interface web desenvolvida em Vue 3 com TypeScript para gerenciamento de despesas. Permite lançamentos do tipo parcelado, periódico e cheque, com formulário dinâmico, tabela interativa, e comunicação com API REST via Axios.",
    technologies: ["Vue 3", "TypeScript", "Axios", "Vite"],
    githubUrl: "https://github.com/LorranFernandes/ControleFinanceiroFrontend",
    liveUrl: "https://controle-financeiro-frontend-zeta.vercel.app/"
  },
  {
    name: "Controle Financeiro Backend",
    description:
    "API RESTful desenvolvida com Node.js, Express e MySQL para controle de despesas. Inclui atualização de status de pagamento e testes automatizados com Jest.",
    technologies: ["TypeScript", "Node.js", "Express", "MySQL", "Jest"],
    githubUrl: "https://github.com/LorranFernandes/ControleFinanceiroBackend"
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