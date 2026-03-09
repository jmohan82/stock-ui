interface Props {

  label: string

  value: number

  onChange: (v: number) => void

  suffix?: string
}

export default function RiskInput({
  label,
  value,
  onChange,
  suffix
}: Props) {

  return (
    <div className="flex flex-col space-y-1">

      <label className="text-xs text-gray-400">
        {label}
      </label>

      <div className="flex">

        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="bg-slate-900 border border-border p-2 rounded w-full"
        />

        {suffix && (
          <span className="ml-2 text-gray-400 self-center">
            {suffix}
          </span>
        )}

      </div>

    </div>
  )
}