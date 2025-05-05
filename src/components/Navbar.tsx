import { useState } from 'react'

export default function Navbar() {
  const initialTabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' },
  ]

  const [tabs, setTabs] = useState(initialTabs.slice(0, 2)) // exibe só algumas inicialmente (opcional)
  const [activeTab, setActiveTab] = useState('home')

  const scrollTo = (id: string) => {
    setActiveTab(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const closeTab = (id: string) => {
    const newTabs = tabs.filter((tab) => tab.id !== id)
    setTabs(newTabs)
    if (activeTab === id && newTabs.length > 0) {
      setActiveTab(newTabs[0].id)
      scrollTo(newTabs[0].id)
    }
  }


  const addTab = () => {
    // encontra o próximo item da lista original que ainda não está visível
    const nextTab = initialTabs.find((tab) => !tabs.some((t) => t.id === tab.id))
    if (nextTab) {
      setTabs([...tabs, nextTab])
    }
  }

  return (
    <nav
  className="navbar fixed-top"
  style={{
    backgroundImage: "url('/images/sand.png')", 
    borderBottom: '0',
    opacity: 0.8,
    padding: '0.5rem 1rem 0',
  }}
>
  <div className="d-flex"
    style={{
      overflowX: 'auto',
      whiteSpace: 'nowrap',    // IE/Edge antigo
    }}
  >
    {tabs.map((tab, index) => (
      <div
        key={tab.id}
        className="me-2 d-flex align-items-center justify-content-between"
        onClick={() => scrollTo(tab.id)}
        role="button"
        style={{
          backgroundColor: activeTab === tab.id ? '#0f0d0d' : '',
          color: '#fff',
          padding: '12px 20px 12px 25px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          minWidth: '190px',
          height: '50px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = '#1c1818'
        }}
        onMouseLeave={(e) => {
          if (activeTab !== tab.id) e.currentTarget.style.backgroundColor =
            activeTab === tab.id ? '#000' : ''
        }}
      >
        <span style={{ flexGrow: 1, textAlign: 'left' }}>{tab.label}</span>
        <span
          onClick={(e) => {
            e.stopPropagation()
            closeTab(tab.id)
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2b2b2b'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
          style={{
            marginRight: '-10px',
            marginLeft: '10px',
            padding: '2px 8px',
            borderRadius: '4px',
            fontWeight: 'lighter',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
        >
          x
        </span>
      </div>
    ))}

    {/* Divisor | se a última aba não estiver ativa */}
    {activeTab !== tabs[tabs.length - 1]?.id && (
      <div
        style={{
          color: '#888',
          alignSelf: 'center',
          marginLeft: '-10px',
          marginRight: '8px',
          fontSize: '18px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        |
      </div>
    )}

    {/* Botão + */}
    <div
      onClick={addTab}
      role="button"
      style={{
        backgroundColor: '',
        color: '#fff',
        padding: '8px 8px',
        borderRadius: '4px',
        fontWeight: 'lighter',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        height: '25px', 
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#4a4a4a'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = ''
      }}
    >
      +
    </div>
  </div>
</nav>
  )
}
