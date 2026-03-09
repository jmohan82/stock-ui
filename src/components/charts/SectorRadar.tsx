import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts"

export default function SectorRadar({
  data
}: {
  data: any[]
}) {

  return (

    <div className="bg-card p-4 rounded h-80">

      <h3 className="text-sm text-gray-400 mb-2">
        Sector Exposure
      </h3>

      <ResponsiveContainer width="100%" height="100%">

        <RadarChart data={data}>

          <PolarGrid />

          <PolarAngleAxis dataKey="sector" />

          <Radar
            dataKey="exposure"
            stroke="#F59E0B"
            fill="#F59E0B"
            fillOpacity={0.4}
          />

        </RadarChart>

      </ResponsiveContainer>

    </div>

  )
}