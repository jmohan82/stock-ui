import { useQuery } from "@tanstack/react-query"
import { usePortfolio } from "../portfolios/portfolioContext"
import { getPositions } from "../api/positionsApi"

import DataTable from "../components/tables/DataTable"
import StatusIndicator from "../components/ui/StatusIndicator"
import RoleGuard from "../components/guards/RoleGuard"
import ClosePositionButton from "../components/actions/ClosePositionButton"

export default function PositionsPage() {

  const { portfolioId } = usePortfolio()

  const { data } = useQuery({
    queryKey: ["positions", portfolioId],
    queryFn: () => getPositions(portfolioId!),
    enabled: !!portfolioId
  })

  if (!data) return null

  const columns = [

    { header: "Symbol", accessor: "symbol" },

    { header: "Sector", accessor: "sector" },

    { header: "Entry", accessor: "entryPrice" },

    { header: "Current", accessor: "currentPrice" },

    { header: "Value", accessor: "positionValue" },

    {
      header: "Unrealized P&L",
      accessor: "unrealizedPnL",
      render: (v: number) => (
        <span
          className={
            v >= 0
              ? "text-emerald-400"
              : "text-red-400"
          }
        >
          {v}
        </span>
      )
    },

    { header: "Stop Loss", accessor: "stopLoss" },

    {
      header: "Risk %",
      accessor: "riskPercent",
      render: (v: number) => `${v}%`
    },

    {
      header: "Correlation",
      accessor: "correlationFlag",
      render: (v: boolean) =>
        v
          ? <StatusIndicator status="warning" label="Clustered" />
          : <StatusIndicator status="ok" label="Normal" />
    },

    {
      header: "Status",
      accessor: "status"
    },

    {
      header: "Action",
      accessor: "id",
      render: (id: string) => (
        <RoleGuard allowed={["admin", "pm"]}>
          <ClosePositionButton id={id} />
        </RoleGuard>
      )
    }

  ]

  return (
    <div className="bg-card p-4 rounded">

      <h2 className="text-lg mb-4">
        Portfolio Positions
      </h2>

      <DataTable columns={columns} data={data} />

    </div>
  )
}