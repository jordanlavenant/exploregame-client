import DepartmentHeader from "@/components/Departments/DepartmentHeader/DepartmentHeader"
import { useCurrentDepartment } from "@/context/CurrentDepartmentContext"
import { gql, useQuery } from "@apollo/client"
import { Department } from "@exploregame/types"
import { useNavigate, useParams } from "react-router-dom"
import BoutonExplorer from "@/components/Home/BoutonExplorer"
import HomeCell from "@/components/Home/HomeCell"
import { useColorsDepartments } from "@/context/ColorsDepartmentContext"


const DEPARTMENTS = gql`
  query FindDepartments {
    departments {
      id
      name
      description
      Script {
        id
      }
      ColorSet {
        primary
        secondary
        tertiary
      }
    }
  }
`

const DEPARTMENT = gql`
  query FindDepartmentById($id: String!) {
    department(id: $id) {
      id
      name
      description
      Script {
        id
      }
      ColorSet {
        primary
        secondary
        tertiary
      }
    }
  }
`

const DepartmentPage = () => {
  const { depId } = useParams<{ depId: string }>()
  const { setColors } = useColorsDepartments()
  const navigate = useNavigate()
  const { 
    data,
    loading: departmentsLoading,
    error: departmentsError,
  } = useQuery(DEPARTMENTS)
  const { 
    currentDepartmentIndex,
    setCurrentDepartmentIndex,
    loading: currentDepartmentLoading,
    error: currentDepartmentError
  } = useCurrentDepartment()
  const { 
    data: departmentData, 
    loading: departmentLoading,
    error: departmentError 
  } = useQuery(DEPARTMENT, {
    variables: { id: depId },
    skip: !depId, // * skip the query if there is no depId
  })

  if (
    departmentsLoading || 
    currentDepartmentLoading || 
    departmentLoading
  ) {
    return <header className="header">Loading...</header>
  }
  if (departmentsError || 
    currentDepartmentError || 
    departmentError
  ) {
    return <header className="header">Error</header>
  }

  const departments = data.departments

  //! Department's attributions are different if we are on the department page or on the departments page
  let currentDepartment
  if (depId && departmentData.department) {
    currentDepartment = departmentData.department
    const index = departments.findIndex((dept: Department) => dept.id === depId)
    setCurrentDepartmentIndex(index)
  } else {
    currentDepartment = departments![currentDepartmentIndex!]
  }

  setColors(currentDepartment.ColorSet)

  const previousDepartment = departments![(currentDepartmentIndex! - 1 + departments!.length) % departments!.length]
  const nextDepartment = departments![(currentDepartmentIndex! + 1) % departments!.length]

  const handleNextClick = () => {
    if (depId) navigate('/departments')
    setCurrentDepartmentIndex((currentDepartmentIndex + 1) % departments.length)
  }

  const handlePrevClick = () => {
    if (depId) navigate('/departments')
    setCurrentDepartmentIndex((currentDepartmentIndex - 1 + departments.length) % departments.length)
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
      <BoutonExplorer positionBas={false} department={currentDepartment} />
      <HomeCell title="Bienvenue" />
      <HomeCell title="Carte" />
      <HomeCell title="Acutalités" />

      {/* <DepartmentCell department={currentDepartment} /> */}
    </main>
  )
}

export default DepartmentPage