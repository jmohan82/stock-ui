import { useQuery } from "@tanstack/react-query"
import { getOrganizations } from "../api/orgApi"
import { useOrganization } from "./organizationContext"

export default function OrganizationSwitcher() {

  const { organizationId, setOrganization } = useOrganization()

  const { data } = useQuery({
    queryKey: ["organizations"],
    queryFn: getOrganizations
  })

  return (
    <select
      value={organizationId || ""}
      onChange={(e) => {

        const org = data?.find(o => o.id === e.target.value)

        if (org) {
          setOrganization(org.id, org.role)
        }
      }}
      className="bg-slate-900 border border-border p-1 rounded"
    >

      {data?.map((org) => (
        <option key={org.id} value={org.id}>
          {org.name}
        </option>
      ))}

    </select>
  )
}