import { useOrganization } from "../../organizations/organizationContext"

export default function RoleGuard({
  allowed,
  children
}: {
  allowed: string[]
  children: React.ReactNode
}) {

  const { role } = useOrganization()

  if (!allowed.includes(role)) return null

  return <>{children}</>
}