import { useQuery } from "@tanstack/react-query"
import { getOrgMetrics } from "../api/orgApi"
import { useOrganization } from "./organizationContext"
import Metric from "../components/ui/Metric"

export default function OrganizationDashboard() {

  const { organizationId } = useOrganization()

  const { data } = useQuery({
    queryKey: ["orgMetrics", organizationId],
    queryFn: () => getOrgMetrics(organizationId!),
    enabled: !!organizationId
  })

  if (!data) return null

  return (
    <div className="grid grid-cols-4 gap-6">

      <Metric
        label="Total AUM"
        value={`$${data.totalAUM}`}
      />

      <Metric
        label="Total P&L"
        value={`$${data.totalPnL}`}
      />

      <Metric
        label="Max Drawdown"
        value={`${data.drawdown}%`}
      />

      <Metric
        label="Active Portfolios"
        value={data.portfolios}
      />

    </div>
  )
}