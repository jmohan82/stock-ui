export type MarketRegime =
  | "BULL_TREND"
  | "RANGE"
  | "HIGH_VOL"
  | "CRISIS"

export interface RegimeData {
  regime: MarketRegime
  confidence: number
  volatility: number
  breadth: number
  momentum: number
}