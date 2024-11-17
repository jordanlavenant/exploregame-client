import { useCurrentDepartment } from "@/context/CurrentDepartmentContext"
import { useDepartments } from "@/context/DepartmentDataContext"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  const {
    departments,
    loading: departmentsLoading,
    error: departmentsError
  } = useDepartments()
  const { 
    setCurrentDepartmentIndex,
    loading: currentDepartmentLoading,
    error: currentDepartmentError
  } = useCurrentDepartment()

  if (departmentsLoading || currentDepartmentLoading) {
    return <header className="header">Loading...</header>
  }
  if (departmentsError || currentDepartmentError) {
    return <header className="header">Error</header>
  }

  const handleRedirect = (index: number) => {
    setCurrentDepartmentIndex(index)
    navigate(`/departments`)
  }

  return (
    <>
      <main>test</main>
      {departments?.map((department, index) => (
        <div key={department.id} onClick={() => handleRedirect(index)}>
          <button onClick={() => handleRedirect(index)}>{department.name}</button>
        </div>
      ))}
    </>
  )
}

export default HomePage