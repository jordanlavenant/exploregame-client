import { useNavigate, useParams } from "react-router-dom"
import { Progress } from "@components/ui/progress"
import { Lock } from "lucide-react"
import { gql, useMutation } from "@apollo/client"
import { clearLocalScenario, getLocalScenario } from "@/utils/localScenario"
import { useColorsDepartments } from "@/context/ColorsDepartmentContext"
import { useScriptProgress } from "@/context/ScriptProgressContext"

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
  const { getColors } = useColorsDepartments()
  const { currentQuestion, totalQuestions } = useScriptProgress()
  const { primary } = getColors()
  // TODO: get the progress from the context
  const progress = totalQuestions === 0 ? 0 : (currentQuestion / totalQuestions) * 100

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
    <header className="mt-5">
      <section className="flex justify-between items-center gap-2 px-6 py-2">
        <button onClick={exit} className="z-10">
          <img src="/exit.svg" alt="timer" className="w-6" />
        </button>
        <h3 className="text-black text-xl font-bold text-center w-full">BATIMENTS ADMINISTRATIF</h3>
      </section>
      <section className="flex justify-center items-center gap-2 px-6 py-2">
        <Progress 
          className='w-full'
          value={progress}
          color={primary}
        />
        <Lock 
          size={36}
          className='translate-x-[-0.7em] translate-y-[-0.4em]'
          style={{ color: primary }}
        />
      </section>
    </header>
  )
}

export default QuestionHeader