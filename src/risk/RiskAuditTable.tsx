import type { RiskAuditLog } from "../types/risk"

export default function RiskAuditTable({
  data
}: {
  data: RiskAuditLog[]
}) {

  return (

    <table className="w-full text-sm mt-6">

      <thead className="border-b border-border text-gray-400">
        <tr>
          <th className="text-left p-2">User</th>
          <th className="text-left p-2">Field</th>
          <th className="text-left p-2">Old</th>
          <th className="text-left p-2">New</th>
          <th className="text-left p-2">Time</th>
        </tr>
      </thead>

      <tbody>

        {data.map((row) => (

          <tr
            key={row.id}
            className="border-b border-border"
          >

            <td className="p-2">{row.user}</td>

            <td className="p-2">{row.field}</td>

            <td className="p-2">{row.oldValue}</td>

            <td className="p-2">{row.newValue}</td>

            <td className="p-2 text-gray-400">
              {new Date(row.timestamp).toLocaleString()}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )
}