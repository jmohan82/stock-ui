import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function TradeAttributionChart({
  data
}: {
  data: any[]
}) {

  const colors = [
    "#10B981",
    "#F59E0B",
    "#3B82F6",
    "#EF4444",
    "#8B5CF6"
  ]

  return (

    <div className="bg-card p-4 rounded h-72">

      <h3 className="text-sm text-gray-400 mb-2">
        Trade Attribution
      </h3>

      <ResponsiveContainer width="100%" height="100%">

        <PieChart>

          <Pie
            data={data}
            dataKey="contribution"
            nameKey="category"
            outerRadius={100}
          >

            {data.map((_, i) => (

              <Cell
                key={i}
                fill={colors[i % colors.length]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  )
}