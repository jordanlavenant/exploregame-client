import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@components/ui/button"
import { X } from "lucide-react"
import { gql, useMutation } from "@apollo/client"
import { clearLocalScenario, getLocalScenario } from "@/utils/localScenario"

export const UPDATE_PLAYER_SCRIPT = gql`
  mutation updatePlayerScript($id: String!, $input: UpdatePlayerScriptInput!) {
    updatePlayerScript(id: $id, input: $input) {
      id
    }
  }
`

const QuestionHeader = () => {
  const navigate = useNavigate()
  const { depId } = useParams() 

  const [updatePlayerScript] = useMutation(UPDATE_PLAYER_SCRIPT)

  const saveStep = () => {
    const { id, playerId, scriptid, stepId, questionId } = getLocalScenario()
    updatePlayerScript({
      variables: {
        id,
        input: {
          playerId,
          scriptid,
          stepId,
          questionId,
          score: 0,
          remainingTime: 3600
        }
      }
    })
  }

  const exit = () => {
    saveStep()
    clearLocalScenario()
    navigate(`/departments/${depId}`)
  }
  
  return (
    <header className="bg-slate-600">
      <Button onClick={exit}>
        <X size={24} />
      </Button>
    </header>
  )
}

export default QuestionHeader