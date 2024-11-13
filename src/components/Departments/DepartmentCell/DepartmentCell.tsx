import { useCurrentDepartment } from "@/context/CurrentDepartmentContext"
import { useDepartments } from "@/context/DepartmentDataContext"
import { useNavigate } from "react-router-dom"

const DepartmentCell = () => {
  const navigate = useNavigate()

  const { departments, loading: departmentsLoading, error: departmentsError } = useDepartments()
  const { currentDepartmentIndex, loading: currentDepartmentLoading, error: currentDepartmentError } = useCurrentDepartment()

  if (departmentsLoading || currentDepartmentLoading) {
    return <header className="header">Loading...</header>
  }

  if (departmentsError || currentDepartmentError) {
    return <header className="header">Error</header>
  }

  const currentDepartment = departments![currentDepartmentIndex!]
  console.log(currentDepartment)


  const handleScript = () => {
    //TODO: resume or start scenario
    //TODO: redirect to the correct url
    navigate(`${currentDepartment.id}/scenarios/${currentDepartment.Script[0]!.id}`)

  }

  return (
    <div>
      <p>{currentDepartment.name}</p>
      <p>{currentDepartment.description}</p>
      <button onClick={handleScript}>Explorer</button>
    </div>
  )
}

export default DepartmentCell