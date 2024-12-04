import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../ui/button"
import getCurrentPlayer from "@/utils/currentPlayer"
import { PlayerScript, Question } from "@exploregame/types"
import { setLocalScenario } from "@/utils/localScenario"
import { gql, useQuery } from "@apollo/client"

export const PLAYER_SCRIPTS = gql`
  query FindPlayerScripts {
    playerScripts {
      id
      playerId
      scriptId
      stepId
      questionId
    }
  }
`

const QuestionCell = ({
  questions
} : {
  questions: Question[]
}) => {
  const navigate = useNavigate()
  const { depId, sceId, stepId, queId } = useParams()
  const currentPlayer = getCurrentPlayer()

  const { data, loading, error } = useQuery(PLAYER_SCRIPTS)

  if (loading || error) return null

  const playerScripts = data.playerScripts
  const playerScriptId = playerScripts.find((ps: PlayerScript) => ps.playerId === currentPlayer!.id && ps.scriptId === sceId).id

  const question = questions.find((q: Question) => q.id === queId)
  const nextQuestion = questions[questions.indexOf(question!) + 1]

  const redirect = (
    stepId: string,
    questionId: string
  ) => {
    navigate(`/departments/${depId}/scenarios/${sceId}/steps/${stepId}/questions/${questionId}`)
  }

  const handleAnswer = () => {
    if (true) {
      // ! correct
      if (nextQuestion !== undefined) {
        setLocalScenario(playerScriptId, currentPlayer!.id, sceId!, stepId!, nextQuestion.id)
        redirect(stepId!, nextQuestion.id)
      } else {
        // ! fin de l'étape
        // TODO: incrémenter l'étapeId
      }
      // TODO: mettre à jour le localStorage en incrémentant la questionId
      // TODO: rediriger vers la page de la prochaine question (navigate)
    } else {
      // ! incorrect
      // TODO: pénaliser le joueur (score)
    }
  }

  return (
    <div>
      <p>scenario {sceId} - étape {stepId} - question {queId}</p>
      <p>{question!.id} - {question!.question}</p>
      <Button onClick={handleAnswer}>
        Next question
      </Button>
    </div>
  )
}

export default QuestionCell