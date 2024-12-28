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
      <div className="w-full flex flex-wrap justify-center items-center mt-10 gap-5">
        <img src="/IUTO.png" alt="iuto" className="w-40" />
        <h1 className="text-center text-5xl  text-[#000] font-bold w-full">Connexion</h1>
      </div>
      <div className="w-full justify-center items-center mt-32 px-8">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginCell