import RegisterForm from "@/components/Register/RegisterForm/RegisterForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const RegisterCell = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const player = localStorage.getItem("player")
    if (player) {
      navigate("/login")
    }
  }, [navigate])

  return (
    <div>
      <RegisterForm />
    </div>
  )
}

export default RegisterCell