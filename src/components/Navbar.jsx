import { NavLink, Link } from 'react-router-dom'
import { Code2 } from 'lucide-react'

function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Daily Logs', path: '/daily-logs' },
  ]

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <Code2 className="text-blue-600" size={28} />
          <span className="text-xl font-bold text-slate-900">
            TechBoho<span className="text-blue-600">.</span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-blue-700'
                  : 'text-slate-600 hover:text-blue-700'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar