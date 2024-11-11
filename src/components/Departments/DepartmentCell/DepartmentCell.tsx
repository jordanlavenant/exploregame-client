import { useCurrentDepartment } from "@/context/CurrentDepartmentContext"
import { useDepartments } from "@/context/DepartmentDataContext"

const DepartmentCell = () => {
  const { departments, loading: departmentsLoading, error: departmentsError } = useDepartments()
  const { currentDepartmentIndex, loading: currentDepartmentLoading, error: currentDepartmentError } = useCurrentDepartment()

  if (departmentsLoading || currentDepartmentLoading) {
    return <header className="header">Loading...</header>
  }

  if (departmentsError || currentDepartmentError) {
    return <header className="header">Error</header>
  }

  const currentDepartment = departments![currentDepartmentIndex!]
  return (
    <div>
      <p>{currentDepartment.name}</p>
      <p>{currentDepartment.description}</p>
    </div>
  )
}

export default DepartmentCell