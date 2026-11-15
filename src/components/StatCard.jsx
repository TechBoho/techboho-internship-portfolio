function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{title}</p>
        <Icon className="text-blue-400" size={22} />
      </div>

      <h2 className="mt-4 text-3xl font-bold text-white">
        {value}
      </h2>
    </div>
  )
}

export default StatCard