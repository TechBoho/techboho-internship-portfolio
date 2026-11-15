import { Link } from 'react-router-dom'
import { Code2 } from 'lucide-react'

function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <Code2 className="text-blue-500" size={28} />
          <span className="text-xl font-bold text-white">
            TechBoho<span className="text-blue-500">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-5 text-sm text-slate-300">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>

          <Link to="/daily-logs" className="hover:text-blue-400">
            Daily Logs
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar