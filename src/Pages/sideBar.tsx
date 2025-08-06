import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [activeLink, setActiveLink] = React.useState('dashboard')

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const links = [
    { title: 'Dashboard', icon: 'mdi:monitor-dashboard', href: '/' },
    { title: 'Messagerie', icon: 'mdi:message-text', href: '' },
    { title: 'Étudiants', icon: 'mdi:account-group', href: '' },
    { title: 'Personnels', icon: 'mdi:account-multiple', href: '' },
    { title: 'Cours', icon: 'mdi:book-open-page-variant', href: '' },
    { title: 'Matériels', icon: 'mdi:package-variant', href: '' },
    { title: 'Paramètres', icon: 'mdi:cog', href: '' },
  ]

  return (
    <div
      className={`h-screen border-r-2 border-gray-100 transition-all duration-300 
        ${isOpen ? 'w-64' : 'w-30'} 
        flex flex-col justify-between`}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon icon="mdi:school" className="text-green-500 text-5xl" />
            {isOpen && <h1 className="text-2xl font-bold text-green-500">LOGO</h1>}
          </div>

          <button onClick={toggleSidebar} className="ml-auto p-2 rounded hover:bg-gray-200 transition-colors cursor-pointer">
            <Icon
              icon={isOpen ? "mdi:chevron-left" : "mdi:chevron-right"}
              className="text-2xl text-gray-500"
            />
          </button>
        </div>

        <ul className="mt-12 space-y-6">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.title)}
                className={`flex items-center gap-3 transition-all px-2
          ${activeLink === link.title ? 'text-green-500' : 'text-gray-600'} 
          hover:text-green-500`} 
              >
                <Icon icon={link.icon} className="text-3xl" />
                {isOpen && <span className="text-base">{link.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 text-gray-500 hover:text-red-500 cursor-pointer">
          <Icon icon="mdi:logout" className="text-xl" />
          {isOpen && <span>Déconnexion</span>}
        </div>
      </div>
    </div>
  )
}

export default SideBar
