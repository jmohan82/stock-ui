import { useQuery } from "@tanstack/react-query"
import { getMarketRegime } from "../../api/regimeApi"

export default function RegimePanel() {

  const { data } = useQuery({
    queryKey: ["marketRegime"],
    queryFn: getMarketRegime,
    refetchInterval: 60000
  })

  if (!data) return null

  const color =
    data.regime === "BULL_TREND"
      ? "text-emerald-400"
      : data.regime === "CRISIS"
      ? "text-red-400"
      : "text-amber-400"

  return (
    <div className="bg-card p-4 rounded">

      <h3 className="text-sm text-gray-400 mb-2">
        AI Market Regime
      </h3>

      <div className={`text-lg font-semibold ${color}`}>
        {data.regime}
      </div>

      <div className="text-xs text-gray-400 mt-2">
        Confidence: {data.confidence}%
      </div>

    </div>
  )
}