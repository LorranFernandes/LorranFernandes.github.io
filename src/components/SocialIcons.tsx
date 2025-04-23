// src/components/SocialIcons.tsx
import React from 'react'

const SocialIcons: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/LorranFernandes',
      icon: 'bi bi-github',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lorranparreira/',
      icon: 'bi bi-linkedin',
      color: '#0077b5'
    },
    {
      name: 'E-mail',
      url: 'mailto:lorranfparreira@gmail.com?subject=Contato%20via%20Portfólio',
      icon: 'bi bi-envelope-fill',
      color: '#d44638'
    },
    {
      name: 'Currículo',
      url: '/LorranParreira-Curriculo.pdf',
      icon: 'bi bi-file-earmark-pdf',
      color: '#e63946',
      target: '_blank'
    }
  ]

  return (
    <div className="social-icons mt-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-secondary me-3"
          style={{ color: social.color }}
          aria-label={social.name}
          download={social.name === 'Currículo' ? 'LorranFernandes-Curriculo.pdf' : undefined}
        >
          <i className={social.icon}></i> {social.name}
        </a>
      ))}
    </div>
  )
}

export default SocialIcons