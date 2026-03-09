import { useState } from "react"
import { resetPasswordApi } from "../../api/authApi"

export default function ResetPasswordPage() {

  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    await resetPasswordApi(email)

    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center">
        Reset link sent to email
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        placeholder="Email"
        className="w-full p-2 bg-slate-900 border border-border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="w-full bg-emerald-600 p-2 rounded">
        Send Reset Link
      </button>

    </form>
  )
}