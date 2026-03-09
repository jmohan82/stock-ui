import { useQuery } from "@tanstack/react-query"
import { usePortfolio } from "./portfolioContext"
import { getPortfolioSummary } from "../api/portfolioApi"

import Metric from "../components/ui/Metric"

export default function PortfolioDashboard() {

  const { portfolioId } = usePortfolio()

  const { data } = useQuery({
    queryKey: ["portfolioSummary", portfolioId],
    queryFn: () => getPortfolioSummary(portfolioId!),
    enabled: !!portfolioId
  })

  if (!data) return null

  return (
    <div className="grid grid-cols-4 gap-6">

      <Metric
        label="Portfolio Value"
        value={`$${data.value}`}
      />

      <Metric
        label="Daily P&L"
        value={`$${data.dailyPnL}`}
      />

      <Metric
        label="Drawdown"
        value={`${data.drawdown}%`}
      />

      <Metric
        label="Exposure"
        value={`${data.exposure}%`}
      />

    </div>
  )
}