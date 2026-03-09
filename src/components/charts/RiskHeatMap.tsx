export default function RiskHeatMap({
  data
}: {
  data: any[]
}) {

  return (

    <div className="bg-card p-4 rounded">

      <h3 className="text-sm text-gray-400 mb-4">
        Risk Contribution Heat Map
      </h3>

      <div className="grid grid-cols-6 gap-2">

        {data.map((p) => {

          const color =
            p.riskContribution > 10
              ? "bg-red-700"
              : p.riskContribution > 5
              ? "bg-amber-600"
              : "bg-emerald-700"

          return (

            <div
              key={p.symbol}
              className={`${color} p-3 text-xs rounded`}
            >

              <div>{p.symbol}</div>

              <div>{p.riskContribution}%</div>

            </div>

          )
        })}

      </div>

    </div>

  )
}