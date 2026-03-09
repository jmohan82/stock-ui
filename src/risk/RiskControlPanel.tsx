import { useQuery, useMutation } from "@tanstack/react-query"
import { useState, useEffect } from "react"

import { usePortfolio } from "../portfolios/portfolioContext"

import {
  getRiskSettings,
  updateRiskSettings,
  getRiskAuditLog
} from "../api/riskApi"

import { queryClient } from "../app/queryClient"

import RiskInput from "../components/ui/RiskInput"
import RoleGuard from "../components/guards/RoleGuard"
import RiskAuditTable from "./RiskAuditTable"

export default function RiskControlPanel() {

  const { portfolioId } = usePortfolio()

  const { data } = useQuery({

    queryKey: ["riskSettings", portfolioId],

    queryFn: () => getRiskSettings(portfolioId!),

    enabled: !!portfolioId
  })

  const { data: audit } = useQuery({

    queryKey: ["riskAudit", portfolioId],

    queryFn: () => getRiskAuditLog(portfolioId!),

    enabled: !!portfolioId
  })

  const [form, setForm] = useState<any>(null)

  useEffect(() => {

    if (data) {
      setForm(data)
    }

  }, [data])

  const mutation = useMutation({

    mutationFn: updateRiskSettings,

    onSuccess: () => {

      queryClient.invalidateQueries(["riskSettings"])

      queryClient.invalidateQueries(["riskAudit"])
    }
  })

  if (!form) return null

  return (

    <div className="max-w-3xl">

      <h2 className="text-lg mb-6">
        Portfolio Risk Controls
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <RiskInput
          label="Max Positions"
          value={form.maxPositions}
          onChange={(v) =>
            setForm({ ...form, maxPositions: v })
          }
        />

        <RiskInput
          label="Max Exposure per Stock"
          value={form.maxExposurePerStock}
          suffix="%"
          onChange={(v) =>
            setForm({ ...form, maxExposurePerStock: v })
          }
        />

        <RiskInput
          label="Max Portfolio Exposure"
          value={form.maxTotalExposure}
          suffix="%"
          onChange={(v) =>
            setForm({ ...form, maxTotalExposure: v })
          }
        />

        <RiskInput
          label="Max Drawdown"
          value={form.maxDrawdown}
          suffix="%"
          onChange={(v) =>
            setForm({ ...form, maxDrawdown: v })
          }
        />

        <RiskInput
          label="Dynamic Heat Cap"
          value={form.dynamicHeatCap}
          suffix="%"
          onChange={(v) =>
            setForm({ ...form, dynamicHeatCap: v })
          }
        />

        <RiskInput
          label="Correlation Threshold"
          value={form.correlationThreshold}
          onChange={(v) =>
            setForm({ ...form, correlationThreshold: v })
          }
        />

        <RiskInput
          label="Sector Exposure Cap"
          value={form.sectorExposureCap}
          suffix="%"
          onChange={(v) =>
            setForm({ ...form, sectorExposureCap: v })
          }
        />

      </div>

      <RoleGuard allowed={["admin"]}>

        <button
          onClick={() =>
            mutation.mutate({
              portfolioId,
              settings: form
            })
          }
          className="mt-6 bg-emerald-600 px-6 py-2 rounded"
        >
          Save Risk Settings
        </button>

      </RoleGuard>

      {audit && <RiskAuditTable data={audit} />}

    </div>
  )
}