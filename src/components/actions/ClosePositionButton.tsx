import { useMutation } from "@tanstack/react-query"
import { closePosition } from "../../api/positionsApi"
import { queryClient } from "../../app/queryClient"

export default function ClosePositionButton({
  id
}: {
  id: string
}) {

  const mutation = useMutation({
    mutationFn: () => closePosition(id),

    onSuccess: () => {
      queryClient.invalidateQueries(["positions"])
    }
  })

  return (
    <button
      onClick={() => mutation.mutate()}
      className="text-red-400 hover:text-red-300"
    >
      Close
    </button>
  )
}