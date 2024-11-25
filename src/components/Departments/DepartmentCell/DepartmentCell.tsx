import { Button } from "@/components/ui/button"
import { Department } from "@exploregame/types"
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
    navigate(`/departments/${department.id}/scenarios/${department.Script[0]!.id}`)

  }

  return (
    <section>
      <p>{department.name}</p>
      <p>{department.description}</p>
      <Button 
        onClick={handleScript}
        variant="default"
      >
        Explorer
      </Button>
    </section>
  )
}

export default DepartmentCell