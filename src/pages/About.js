import React from 'react'
import SectionTitle from '../components/SectionTitle'

import {
  FaJava, FaDocker, FaPython, FaPhp, FaGit, FaLinux, FaNodeJs, FaVuejs 
} from 'react-icons/fa'
import {
  SiSpringboot, SiMysql, SiPostgresql, SiJavascript, SiTypescript,
  SiSwagger, SiIntellijidea, SiPostman, SiApachemaven, SiJunit5
} from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";

import { MdViewKanban } from "react-icons/md";
import { DiScrum } from "react-icons/di";

export default function About() {
  const skills = [
    { icon: <FaJava size={50} />, name: 'Java' },
    { icon: <SiSpringboot size={50} />, name: 'Spring Boot' },
    { icon: <SiMysql size={50} />, name: 'MySQL' },
    { icon: <SiPostgresql size={50} />, name: 'PostgreSQL' },
    { icon: <SiJunit5 size={50} />, name: 'JUnit' },
    { icon: <SiTypescript size={50} />, name: 'TypeScript' },
    { icon: <SiJavascript size={50} />, name: 'JavaScript' },
    { icon: <FaNodeJs size={50} />, name: 'Node Js' },
    { icon: <FaPhp size={50} />, name: 'PHP' },
    { icon: <FaPython size={50} />, name: 'Python' },
    { icon: <FaDocker size={50} />, name: 'Docker' },
    { icon: <SiSwagger size={50} />, name: 'Swagger' },
  ]

  const softskills = [
    { icon: <MdViewKanban size={50} />, name: 'Kanban' },
    { icon: <DiScrum size={50} />, name: 'Scrum' },
  ]
  

  const tools = [
    { icon: <VscVscode size={50} />, name: 'VS Code' },
    { icon: <SiIntellijidea size={50} />, name: 'IntelliJ IDEA' },
    { icon: <SiPostman size={50} />, name: 'Postman' },
    { icon: <FaGit size={50} />, name: 'Git' },
    { icon: <SiApachemaven size={50} />, name: 'Maven' },
    { icon: <FaLinux size={50} />, name: 'Linux' },
  ]

  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <SectionTitle title="Sobre Mim" subtitle="Conheça mais sobre meu trabalho" />
        <div className="row g-5">
          <div className="col-lg-6">
            <p className="lead">
              Sou graduando no 6º período de Sistemas de Informação no CEFET/RJ, com foco em desenvolvimento back-end.
            </p>
            <p>
              Sou uma pessoa ativa, apaixonada por esportes e que valoriza momentos com amigos e família.
              Atualmente tenho me dedicado especialmente à linguagem Java e TypeScript,
              buscando construir APIs seguras e bem estruturadas.
            </p>
          </div>

          <div className="col-lg-6">
            <h4 className="mb-3">Hard Skills</h4>
            <div className="d-flex flex-wrap justify-content-center gap-5 mb-4">
              {skills.map((skill, index) => (
                <span key={index} className="text-primary" title={skill.name}>
                  {skill.icon}
                </span>
              ))}
            </div>

            <h4 className="mb-3">Soft Skills</h4>
            <div className="d-flex flex-wrap justify-content-center gap-5 mb-4">
              {softskills.map((skill, index) => (
                <span key={index} className="text-success" title={skill.name}>
                  {skill.icon}
                </span>
              ))}
            </div>

            <h4 className="mb-3">Ferramentas</h4>
            <div className="d-flex flex-wrap justify-content-center gap-5">
              {tools.map((tool, index) => (
                <span key={index} className="text-secondary" title={tool.name}>
                  {tool.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
