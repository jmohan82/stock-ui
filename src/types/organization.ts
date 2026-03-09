export type OrgRole = "admin" | "pm" | "viewer"

export interface Organization {
  id: string
  name: string
  role: OrgRole
}

export interface Portfolio {
  id: string
  name: string
  value: number
  pnl: number
  drawdown: number
}