export default function MonthlyHeatmap({
  data
}: {
  data: any[]
}) {

  return (

    <div className="bg-card p-4 rounded">

      <h3 className="mb-4 text-sm text-gray-400">
        Monthly Returns
      </h3>

      <div className="grid grid-cols-6 gap-2">

        {data.map((m) => {

          const color =
            m.return > 0
              ? "bg-emerald-700"
              : "bg-red-700"

          return (

            <div
              key={m.month}
              className={`${color} p-3 text-xs rounded`}
            >

              <div>{m.month}</div>

              <div>{m.return}%</div>

            </div>

          )
        })}

      </div>

    </div>

  )
}