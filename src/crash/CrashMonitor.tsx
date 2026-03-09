import { useQuery } from "@tanstack/react-query"

import { getCrashMetrics, getCrashEvents } from "../api/crashApi"

import Metric from "../components/ui/Metric"
import StressModeIndicator from "../components/ui/StressModeIndicator"
import CrashEventTable from "./CrashEventTable"

export default function CrashMonitor() {

  const { data: metrics } = useQuery({

    queryKey: ["crashMetrics"],

    queryFn: getCrashMetrics,

    refetchInterval: 60000
  })

  const { data: events } = useQuery({

    queryKey: ["crashEvents"],

    queryFn: getCrashEvents
  })

  if (!metrics) return null

  return (

    <div className="space-y-8">

      <h2 className="text-lg">
        Market Stress Monitor
      </h2>

      <div className="grid grid-cols-4 gap-6">

        <Metric
          label="VIX"
          value={metrics.vix}
        />

        <Metric
          label="VIX Spike"
          value={`${metrics.vixSpikePercent}%`}
        />

        <Metric
          label="SPY 3-Day Drop"
          value={`${metrics.spy3DayDrop}%`}
        />

        <Metric
          label="Exposure Reduction"
          value={`${metrics.exposureReduction}%`}
        />

      </div>

      <div className="bg-card p-4 rounded">

        <div className="flex justify-between items-center">

          <div className="text-sm text-gray-400">
            System Stress Mode
          </div>

          <StressModeIndicator
            mode={metrics.stressMode}
          />

        </div>

      </div>

      {events && (

        <div className="bg-card p-4 rounded">

          <h3 className="mb-2">
            Crash Events
          </h3>

          <CrashEventTable data={events} />

        </div>

      )}

    </div>
  )
}