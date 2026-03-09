export function RiskAlertBanner() {

  const { portfolioId } = usePortfolio()

  const { data } = useQuery({
    queryKey: ["riskAlerts", portfolioId],
    queryFn: getRiskAlerts,
    refetchInterval: 60000
  })

  if (!data?.length) return null

  return (
    <div className="bg-amber-700 text-white p-2">

      {data.map((alert) => (
        <span key={alert.id}>
          {alert.message}
        </span>
      ))}

    </div>
  )
}