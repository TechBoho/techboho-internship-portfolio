import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function Placeholder({ title }) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-slate-400">
          This section is currently under development.
        </p>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/daily-logs"
          element={<Placeholder title="Daily Activity Logs" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App