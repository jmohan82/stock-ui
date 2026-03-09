interface Props {
  required: "free" | "pro" | "institutional"
  children: React.ReactNode
}

export const FeatureGate = ({ required, children }: Props) => {

  const { tier } = useSubscription()

  const allowed =
    tier === "institutional" ||
    (tier === "pro" && required !== "institutional") ||
    (tier === "free" && required === "free")

  if (!allowed) return null

  return <>{children}</>
}