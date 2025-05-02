// src/components/SectionTitle.tsx
import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-5">
      <h2 className="text-success fw-bold">lorran@user<span className='text-light'>:~# {title}</span><span className="blinking-cursor">|</span></h2>
      {subtitle && <p className="">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle