import type{ CrashEvent } from "../types/crash"

export default function CrashEventTable({
  data
}: {
  data: CrashEvent[]
}) {

  return (

    <table className="w-full text-sm mt-6">

      <thead className="border-b border-border text-gray-400">
        <tr>
          <th className="text-left p-2">Time</th>
          <th className="text-left p-2">Event</th>
          <th className="text-left p-2">Exposure Before</th>
          <th className="text-left p-2">Exposure After</th>
        </tr>
      </thead>

      <tbody>

        {data.map((row) => (

          <tr
            key={row.id}
            className="border-b border-border"
          >

            <td className="p-2">
              {new Date(row.timestamp).toLocaleString()}
            </td>

            <td className="p-2">
              {row.event}
            </td>

            <td className="p-2">
              {row.exposureBefore}%
            </td>

            <td className="p-2 text-amber-400">
              {row.exposureAfter}%
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )
}