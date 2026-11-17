import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Code2,
  Database,
  CalendarDays,
} from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Building practical software solutions.',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Working with APIs and databases.',
  },
  {
    icon: CalendarDays,
    title: 'Internship Documentation',
    description: 'Tracking daily work and progress.',
  },
]

function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-semibold text-blue-700">
          TECHBOHO SOLUTIONS
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          Building Solutions.
          <br />
          <span className="text-blue-600">
            Documenting Progress.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Welcome to my internship portfolio, where I document
          my daily activities, technical projects, professional
          development and practical experience.
        </p>

        <Link
          to="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          View Internship Dashboard
          <ArrowRight size={18} />
        </Link>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                  <Icon className="text-blue-600" size={26} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Home