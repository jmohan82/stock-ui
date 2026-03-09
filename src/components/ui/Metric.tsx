interface Props {
  label: string
  value: string | number
}

export default function Metric({ label, value }: Props) {
  return (
    <div className="bg-card p-4 rounded">

      <div className="text-xs text-gray-400">
        {label}
      </div>

      <div className="text-xl font-semibold">
        {value}
      </div>

    </div>
  )
}