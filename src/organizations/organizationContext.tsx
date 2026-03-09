import { createContext, useContext, useState } from "react"

interface OrganizationContextType {
  organizationId: string | null
  role: "admin" | "pm" | "viewer"
  setOrganization: (id: string, role: any) => void
}

const OrganizationContext =
  createContext<OrganizationContextType | null>(null)

export const OrganizationProvider = ({
  children
}: {
  children: React.ReactNode
}) => {

  const [organizationId, setOrgId] = useState<string | null>(null)
  const [role, setRole] = useState<any>("viewer")

  const setOrganization = (id: string, role: any) => {
    setOrgId(id)
    setRole(role)
  }

  return (
    <OrganizationContext.Provider
      value={{
        organizationId,
        role,
        setOrganization
      }}
    >
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganization = () => {

  const ctx = useContext(OrganizationContext)

  if (!ctx) {
    throw new Error("useOrganization must be used inside provider")
  }

  return ctx
}