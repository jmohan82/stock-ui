import { useQuery } from "@tanstack/react-query"
import { getOrgPortfolios } from "../api/orgApi"
import { useOrganization } from "../organizations/organizationContext"
import { usePortfolio } from "./portfolioContext"

export default function PortfolioSwitcher() {

  const { organizationId } = useOrganization()
  const { portfolioId, setPortfolio } = usePortfolio()

  const { data } = useQuery({
    queryKey: ["portfolios", organizationId],
    queryFn: () => getOrgPortfolios(organizationId!),
    enabled: !!organizationId
  })

  return (
    <select
      value={portfolioId || ""}
      onChange={(e) => setPortfolio(e.target.value)}
      className="bg-slate-900 border border-border p-1 rounded"
    >

      {data?.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}

    </select>
  )
}