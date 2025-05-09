import { motion, useAnimation } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  id: string
  className?: string
}

export default function AnimatedSection({ children, id, className = '' }: AnimatedSectionProps) {
  const controls = useAnimation()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Guardamos a referência atual em uma variável
    const currentRef = sectionRef.current
    
    if (!currentRef) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      })
    }, { threshold: 0.1 })

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls]) // Adicione todas as dependências necessárias aqui

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className={`animated-section ${className}`}
      initial="visible"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
      
      <div className="container">
        {children}
      </div>
    </motion.section>
  )
}