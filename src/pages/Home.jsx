import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Database, CalendarDays } from 'lucide-react'

function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-semibold text-blue-400">
          TECHBOHO SOLUTIONS
        </p>

        <h1 className="mt-6 text-4xl font-bold md:text-6xl">
          Building Solutions.
          <br />
          <span className="text-blue-500">
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
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
        >
          View Internship Dashboard
          <ArrowRight size={18} />
        </Link>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
          {[
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
          ].map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <Icon className="mb-4 text-blue-400" size={30} />
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-400">
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