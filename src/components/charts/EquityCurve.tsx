import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function EquityCurve({
  data
}: {
  data: any[]
}) {

  return (

    <div className="bg-card p-4 rounded h-72">

      <h3 className="mb-2 text-sm text-gray-400">
        Equity Curve
      </h3>

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

          <XAxis dataKey="date" hide />

          <YAxis hide />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#10B981"
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}