import type{ StressMode } from "../../types/crash"

export default function StressModeIndicator({
  mode
}: {
  mode: StressMode
}) {

  const color =
    mode === "NORMAL"
      ? "text-emerald-400"
      : mode === "CRASH"
      ? "text-amber-400"
      : "text-red-500"

  return (

    <div className={`text-lg font-semibold ${color}`}>

      {mode}

    </div>

  )
}