import { useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import Sidebar from './Sidebar'

export default function Shell({ children }) {
  const { pathname } = useLocation()
  const isHero = pathname === '/'

  // Hero is full-bleed: no shell chrome. Fixed viewport, clip any exit-transform.
  if (isHero)
    return (
      <div className="fixed inset-0 h-screen w-screen overflow-hidden">
        {children}
      </div>
    )

  return (
    <div className="flex h-full w-full flex-col">
      <TopBar />
      <div className="flex min-h-0 flex-1">
        <Sidebar />
        <main className="az-scroll chapter-surface relative flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
