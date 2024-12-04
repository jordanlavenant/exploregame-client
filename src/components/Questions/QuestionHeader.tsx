import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@components/ui/button"
import { Progress } from "@components/ui/progress"
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
    <header className="">
      <section className="flex justify-between items-center gap-2 px-6 py-2">
        <button onClick={exit}><img src="/exit.svg" alt="timer" className="w-6" /></button>
        <h3 className="text-black text-xl font-bold text-center w-full">BATIMENTS ADMINISTRATIF</h3>
      </section>
      <section className="flex justify-center items-center gap-2 px-6 py-2">
        <Progress className="w-full" value={50} />
        <img src="/locker.svg" alt="timer" className="w-8 translate-x-[-1em] translate-y-[-0.4em]" />
      </section>
    </header>
  )
}

export default QuestionHeader