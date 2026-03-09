import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

import { tokenManager } from "../utils/tokenManager"
import { loginApi, registerApi, getMe} from "../api/authApi"

import type {
  LoginRequest,
  RegisterRequest,
  User,
  AuthContextType
} from "../types/auth"

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {

      const token = tokenManager.get()

      if (!token) {
        setLoading(false)
        return
      }

      try {
        const user = await getMe()
        setUser(user)
      } catch {
        tokenManager.clear()
      }

      setLoading(false)
    }

    init()

  }, [])

  const login = async (data: LoginRequest) => {

    const res = await loginApi(data)

    tokenManager.set(res.access_token)

    const user = await getMe()

    setUser(user)
  }

  const register = async (data: RegisterRequest) => {

    const res = await registerApi(data)

    tokenManager.set(res.access_token)

    const user = await getMe()

    setUser(user)
  }

  const logout = () => {
    tokenManager.clear()
    setUser(null)
    window.location.href = "/auth/login"
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {

  const ctx = useContext(AuthContext)

  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider")
  }

  return ctx
}