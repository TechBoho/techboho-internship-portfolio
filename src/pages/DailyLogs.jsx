import { useState } from 'react'
import { CalendarDays, Clock3, ChevronDown, ChevronUp } from 'lucide-react'
import { activities } from '../data/internshipData'

function DailyLogs() {
  const [category, setCategory] = useState('All')
  const [status, setStatus] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const categories = [
    'All',
    ...new Set(activities.map((activity) => activity.category)),
  ]

  const filteredActivities = activities
    .filter((activity) => category === 'All' || activity.category === category)
    .filter((activity) => status === 'All' || activity.status === status)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold text-blue-700">
          INTERNSHIP DOCUMENTATION
        </p>

        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          Daily Activity Logs
        </h1>

        <p className="mt-3 text-slate-600">
          Explore my daily internship activities, technical work,
          and professional development.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Filter by category"
            className="rounded-lg border border-slate-300 bg-white px-4 py-3"
          >
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            aria-label="Filter by status"
            className="rounded-lg border border-slate-300 bg-white px-4 py-3"
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>

        <div className="mt-8 space-y-5">
          {filteredActivities.map((activity) => (
            <article
              key={activity.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-700">
                    {activity.category}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">
                    {activity.title}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-5 text-sm text-slate-600">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {activity.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {activity.hours} hours
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                  {activity.status}
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  setExpandedId(expandedId === activity.id ? null : activity.id)
                }
                aria-expanded={expandedId === activity.id}
                className="mt-5 flex items-center gap-2 font-medium text-blue-700 hover:text-blue-900"
              >
                {expandedId === activity.id ? 'Hide Details' : 'View Details'}
                {expandedId === activity.id
                  ? <ChevronUp size={18} />
                  : <ChevronDown size={18} />}
              </button>

              {expandedId === activity.id && (
                <div className="mt-5 border-t border-slate-200 pt-5">
                  <h3 className="font-semibold">Activity Description</h3>
                  <p className="mt-2 text-slate-600">
                    {activity.description}
                  </p>

                  {activity.challenges && (
                    <>
                      <h3 className="mt-5 font-semibold">Challenges</h3>
                      <p className="mt-2 text-slate-600">{activity.challenges}</p>
                    </>
                  )}

                  {activity.solutions && (
                    <>
                      <h3 className="mt-5 font-semibold">Solutions</h3>
                      <p className="mt-2 text-slate-600">{activity.solutions}</p>
                    </>
                  )}

                  <h3 className="mt-5 font-semibold">Supporting Evidence</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {activity.evidence.length === 0
                      ? 'No evidence uploaded yet.'
                      : `${activity.evidence.length} evidence item(s) available.`}
                  </p>
                </div>
              )}
            </article>
          ))}

          {filteredActivities.length === 0 && (
            <p className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
              No activities match your selected filters.
            </p>
          )}
        </div>

        <p className="mt-8 text-xs text-slate-500">
          Development preview: activities currently use sample data.
        </p>
      </div>
    </main>
  )
}

export default DailyLogs