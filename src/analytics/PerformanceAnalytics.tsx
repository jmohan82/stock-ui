import { useQuery } from "@tanstack/react-query"

import { usePortfolio } from "../portfolios/portfolioContext"

import {
  getPerformanceMetrics,
  getEquityCurve,
  getDrawdownCurve,
  getMonthlyReturns
} from "../api/analyticsApi"

import Metric from "../components/ui/Metric"
import EquityCurve from "../components/charts/EquityCurve"
import DrawdownChart from "../components/charts/DrawdownChart"
import MonthlyHeatmap from "../components/charts/MonthlyHeatmap"

export default function PerformanceAnalytics() {

  const { portfolioId } = usePortfolio()

  const { data: metrics } = useQuery({

    queryKey: ["performanceMetrics", portfolioId],

    queryFn: () => getPerformanceMetrics(portfolioId!),

    enabled: !!portfolioId
  })

  const { data: equity } = useQuery({

    queryKey: ["equityCurve", portfolioId],

    queryFn: () => getEquityCurve(portfolioId!),

    enabled: !!portfolioId
  })

  const { data: drawdown } = useQuery({

    queryKey: ["drawdownCurve", portfolioId],

    queryFn: () => getDrawdownCurve(portfolioId!),

    enabled: !!portfolioId
  })

  const { data: monthly } = useQuery({

    queryKey: ["monthlyReturns", portfolioId],

    queryFn: () => getMonthlyReturns(portfolioId!),

    enabled: !!portfolioId
  })

  if (!metrics) return null

  return (

    <div className="space-y-8">

      <h2 className="text-lg">
        Performance Analytics
      </h2>

      <div className="grid grid-cols-4 gap-6">

        <Metric
          label="CAGR"
          value={`${metrics.cagr}%`}
        />

        <Metric
          label="Sharpe Ratio"
          value={metrics.sharpe}
        />

        <Metric
          label="Sortino Ratio"
          value={metrics.sortino}
        />

        <Metric
          label="Max Drawdown"
          value={`${metrics.maxDrawdown}%`}
        />

        <Metric
          label="Win Rate"
          value={`${metrics.winRate}%`}
        />

        <Metric
          label="Average R"
          value={metrics.avgR}
        />

        <Metric
          label="Capital Efficiency"
          value={metrics.capitalEfficiency}
        />

      </div>

      {equity && <EquityCurve data={equity} />}

      {drawdown && <DrawdownChart data={drawdown} />}

      {monthly && <MonthlyHeatmap data={monthly} />}

    </div>
  )
}