import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-left mb-5">
      <h2 className="text-success fw-bold section-title-responsive">
        lorran@Portfolio<span className='text-light'>:</span>
        <span className='text-primary'>~/<wbr />{title}</span>
        <span className='text-light'>$</span>
        <span className="blinking-cursor">|</span>
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
