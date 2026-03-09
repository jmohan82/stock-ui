export default function LiquidityTable({ data }: { data: any[] }) {

  return (
    <table className="w-full text-sm">

      <thead className="border-b border-border text-gray-400">
        <tr>
          <th className="p-2 text-left">Symbol</th>
          <th className="p-2 text-left">ADV</th>
          <th className="p-2 text-left">Participation</th>
          <th className="p-2 text-left">Liquidity Score</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.symbol} className="border-b border-border">

            <td className="p-2">{row.symbol}</td>
            <td className="p-2">{row.adv}</td>
            <td className="p-2">{row.participation}%</td>
            <td className="p-2">{row.liquidityScore}</td>

          </tr>
        ))}
      </tbody>

    </table>
  )
}