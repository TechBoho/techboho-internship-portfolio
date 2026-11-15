import { Link } from 'react-router-dom'
import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  Images,
  ArrowRight,
} from 'lucide-react'

import StatCard from '../components/StatCard'
import { activities } from '../data/internshipData'

function Dashboard() {
  const daysLogged = new Set(
    activities.map((activity) => activity.date)
  ).size

  const totalHours = activities.reduce(
    (total, activity) => total + activity.hours,
    0
  )

  const completedTasks = activities.filter(
    (activity) => activity.status === 'Completed'
  ).length

  const evidenceUploaded = activities.reduce(
    (total, activity) => total + activity.evidence.length,
    0
  )

  const recentActivities = [...activities]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5)

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="font-medium text-blue-400">
            INTERNSHIP OVERVIEW
          </p>

          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            Internship Dashboard
          </h1>

          <p className="mt-3 text-slate-400">
            Track daily activities, working hours,
            completed tasks and internship progress.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Days Logged"
            value={daysLogged}
            icon={CalendarDays}
          />

          <StatCard
            title="Hours Worked"
            value={totalHours}
            icon={Clock3}
          />

          <StatCard
            title="Tasks Completed"
            value={completedTasks}
            icon={CheckCircle2}
          />

          <StatCard
            title="Evidence Uploaded"
            value={evidenceUploaded}
            icon={Images}
          />
        </div>

        <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">
              Recent Activities
            </h2>

            <Link
              to="/daily-logs"
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex flex-col justify-between gap-3 rounded-lg border border-slate-800 p-4 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-medium">
                    {activity.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {activity.category}
                  </p>
                </div>

                <div className="text-sm text-slate-400">
                  {activity.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-5 text-xs text-slate-500">
          Development preview: statistics currently use sample data.
        </p>
      </div>
    </main>
  )
}

export default Dashboard