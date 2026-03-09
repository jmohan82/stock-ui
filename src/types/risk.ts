export interface RiskSettings {

  maxPositions: number

  maxExposurePerStock: number

  maxTotalExposure: number

  maxDrawdown: number

  dynamicHeatCap: number

  correlationThreshold: number

  sectorExposureCap: number
}

export interface RiskAuditLog {

  id: string

  user: string

  timestamp: string

  field: string

  oldValue: number

  newValue: number
}
