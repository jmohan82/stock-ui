import React from "react"

interface Column<T> {
  header: string
  accessor: keyof T
  render?: (value: any, row: T) => React.ReactNode
}

interface Props<T> {
  columns: Column<T>[]
  data: T[]
}

export default function DataTable<T>({
  columns,
  data
}: Props<T>) {

  return (
    <table className="w-full text-sm">

      <thead className="border-b border-border text-gray-400">
        <tr>
          {columns.map((col) => (
            <th
              key={String(col.accessor)}
              className="text-left p-2"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row: any, i) => (
          <tr
            key={i}
            className="border-b border-border hover:bg-slate-800"
          >
            {columns.map((col) => {

              const value = row[col.accessor]

              return (
                <td
                  key={String(col.accessor)}
                  className="p-2"
                >
                  {col.render
                    ? col.render(value, row)
                    : value}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>

    </table>
  )
}