import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts"

export default function AllocationChart({ data }: { data: any[] }) {

  const colors = ["#10B981","#3B82F6","#F59E0B","#EF4444"]

  return (
    <div className="bg-card p-4 rounded h-72">

      <h3 className="text-sm text-gray-400 mb-2">
        Strategy Allocation
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>

          <Pie
            data={data}
            dataKey="weight"
            nameKey="strategy"
            outerRadius={100}
          >

            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}

          </Pie>

        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}