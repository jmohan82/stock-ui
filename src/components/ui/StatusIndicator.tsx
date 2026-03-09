interface Props {
  status: "ok" | "warning" | "danger"
  label: string
}

export default function StatusIndicator({
  status,
  label
}: Props) {

  const color =
    status === "ok"
      ? "text-emerald-400"
      : status === "warning"
      ? "text-amber-400"
      : "text-red-400"

  return (
    <span className={`text-xs ${color}`}>
      {label}
    </span>
  )
}