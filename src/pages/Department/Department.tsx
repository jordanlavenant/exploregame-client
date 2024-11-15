import DepartmentCell from "@/components/Departments/DepartmentCell/DepartmentCell"
import DepartmentHeader from "@/components/Departments/DepartmentHeader/DepartmentHeader"
import { useCurrentDepartment } from "@/context/CurrentDepartmentContext"
import { gql, useQuery } from "@apollo/client"

export const QUERY = gql`
  query FindDepartments {
    departments {
      id
      name
      description
      Script {
        id
      }
    }
  }
`

const DepartmentPage = () => {
  const { 
    data,
    loading: departmentsLoading,
    error: departmentsError,
  } = useQuery(QUERY)
  const { 
    currentDepartmentIndex,
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

  const departments = data.departments

  const currentDepartment = departments![currentDepartmentIndex!]
  const previousDepartment = departments![(currentDepartmentIndex! - 1 + departments!.length) % departments!.length];
  const nextDepartment = departments![(currentDepartmentIndex! + 1) % departments!.length]

  const handleNextClick = () => {
    setCurrentDepartmentIndex((currentDepartmentIndex + 1) % departments.length)
  }

  const handlePrevClick = () => {
    setCurrentDepartmentIndex((currentDepartmentIndex - 1 + departments.length) % departments
    .length)
  }

	return (
		<main>
			<DepartmentHeader 
        currentDepartment={currentDepartment} 
        nextDepartment={nextDepartment}
        previousDepartment={previousDepartment}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
			<DepartmentCell department={currentDepartment} />
		</main>
	)
}

export default DepartmentPage