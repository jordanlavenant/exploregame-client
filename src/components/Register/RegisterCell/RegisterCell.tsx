import RegisterForm from "@/components/Register/RegisterForm/RegisterForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const RegisterCell = () => {
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
        <h1 className="text-center text-5xl  text-[#000] font-bold w-full">Inscription</h1>
      </div>
      <div className="w-full justify-center items-center mt-15 px-8">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterCell;