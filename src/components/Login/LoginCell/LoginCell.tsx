import LoginForm from "@/components/Login/LoginForm/LoginForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const LoginCell = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/departments")
    }
  }, [navigate])

  return (
    <div>
      loginCell
      <LoginForm />
    </div>
  )
}

export default LoginCell