function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-600">
          {title}
        </p>

        <div className="rounded-lg bg-blue-50 p-2">
          <Icon className="text-blue-600" size={22} />
        </div>
      </div>

      <h2 className="mt-4 text-3xl font-bold text-slate-900">
        {value}
      </h2>
    </div>
  )
}

export default StatCard