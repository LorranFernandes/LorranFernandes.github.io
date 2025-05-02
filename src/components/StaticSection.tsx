// components/StaticSection.tsx
import { ReactNode } from 'react'

interface StaticSectionProps {
  children: ReactNode
  id: string
  className?: string
}

export default function StaticSection({ children, id, className = '' }: StaticSectionProps) {
  return (
    <section 
      id={id}
      className={`static-section ${className}`}
      style={{
        minHeight: '100vh',
        padding: '80px 0',
        scrollMarginTop: '70px',
        boxSizing: 'border-box',
        position: 'relative'
      }}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}