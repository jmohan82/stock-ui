export interface Position {
  id: string
  symbol: string
  sector: string
  entryPrice: number
  currentPrice: number
  positionValue: number
  unrealizedPnL: number
  stopLoss: number
  riskPercent: number
  correlationFlag: boolean
  status: "OPEN" | "CLOSING"
}