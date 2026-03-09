import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function DrawdownChart({
  data
}: {
  data: any[]
}) {

  return (

    <div className="bg-card p-4 rounded h-72">

      <h3 className="mb-2 text-sm text-gray-400">
        Drawdown Curve
      </h3>

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

          <XAxis dataKey="date" hide />

          <YAxis hide />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="drawdown"
            stroke="#EF4444"
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}