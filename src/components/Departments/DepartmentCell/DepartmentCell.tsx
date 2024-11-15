import { Department } from "api/types/graphql"
import { useNavigate } from "react-router-dom"

const DepartmentCell = ({
  department,
}: {
  department: Department
}) => {
  const navigate = useNavigate()

  const handleScript = () => {
    //TODO: resume or start scenario
    //TODO: redirect to the correct url
    navigate(`${department.id}/scenarios/${department.Script[0]!.id}`)

  }

  return (
    <div>
      <p>{department.name}</p>
      <p>{department.description}</p>
      <button onClick={handleScript}>Explorer</button>
    </div>
  )
}

export default DepartmentCell