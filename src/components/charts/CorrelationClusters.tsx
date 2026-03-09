export default function CorrelationClusters({
  data
}: {
  data: any[]
}) {

  return (

    <div className="bg-card p-4 rounded">

      <h3 className="text-sm text-gray-400 mb-4">
        Correlation Clusters
      </h3>

      <div className="space-y-3">

        {data.map((cluster) => (

          <div
            key={cluster.cluster}
            className="border border-border p-3 rounded"
          >

            <div className="text-xs text-gray-400">
              Cluster {cluster.cluster}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">

              {cluster.symbols.map((s: string) => (

                <span
                  key={s}
                  className="bg-slate-800 px-2 py-1 rounded text-xs"
                >
                  {s}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}