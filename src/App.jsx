import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'


function Placeholder({ title }) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-semibold text-blue-700">
          INTERNSHIP DOCUMENTATION
        </p>

        <h1 className="text-3xl font-bold md:text-4xl">
          {title}
        </h1>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-600">
            This section is currently under development.
            Daily internship activities, tasks and supporting
            evidence will be displayed here.
          </p>
        </div>
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