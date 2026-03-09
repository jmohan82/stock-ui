import { useMutation } from "@tanstack/react-query"
import { runPortfolioOptimization } from "../api/optimizationApi"

export default function OptimizationSimulator({ portfolioId }: any) {

  const mutation = useMutation({
    mutationFn: () => runPortfolioOptimization(portfolioId)
  })

  return (
    <div className="bg-card p-4 rounded">

      <h3 className="text-sm text-gray-400 mb-4">
        Portfolio Optimization
      </h3>

      <button
        onClick={() => mutation.mutate()}
        className="bg-emerald-600 px-4 py-2 rounded"
      >
        Run Optimization
      </button>

    </div>
  )
}