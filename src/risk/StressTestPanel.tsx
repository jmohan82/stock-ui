export default function StressTestPanel({ data }: { data: any[] }) {

  return (

    <div className="bg-card p-4 rounded">

      <h3 className="text-sm text-gray-400 mb-4">
        Stress Test Scenarios
      </h3>

      <table className="w-full text-sm">

        <thead className="border-b border-border text-gray-400">
          <tr>
            <th className="p-2 text-left">Scenario</th>
            <th className="p-2 text-left">Expected Drawdown</th>
            <th className="p-2 text-left">Portfolio Impact</th>
          </tr>
        </thead>

        <tbody>

          {data.map((s) => (

            <tr key={s.scenario} className="border-b border-border">

              <td className="p-2">{s.scenario}</td>

              <td className="p-2 text-red-400">
                {s.expectedDrawdown}%
              </td>

              <td className="p-2">
                {s.portfolioImpact}%
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}