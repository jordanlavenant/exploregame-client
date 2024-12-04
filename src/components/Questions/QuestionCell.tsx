import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import getCurrentPlayer from "@/utils/currentPlayer"
import { PlayerScript, Question } from "@exploregame/types"
import { getLocalScenario, setLocalScenario } from "@/utils/localScenario"
import { gql, useQuery } from "@apollo/client"
import { lazy, useEffect, useState, Suspense } from "react"

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
  const localScenario = getLocalScenario()
  const [QuestionModule, setQuestionModule] = useState<React.LazyExoticComponent<any> | null>(null)

  useEffect(() => {
    if (!localScenario) {
      navigate(`/departments/${depId}`)
    }
  }, [localScenario, navigate, depId])

  const { data, loading, error } = useQuery(PLAYER_SCRIPTS)

  useEffect(() => {
    if (loading || error) return

    const playerScripts = data.playerScripts
    const playerScript = playerScripts.find((ps: PlayerScript) => ps.playerId === currentPlayer!.id && ps.scriptId === sceId)

    if (queId !== localScenario.questionId) {
      console.info("Redirecting to the last question answered")
      navigate(`/departments/${depId}/scenarios/${sceId}/steps/${stepId}/questions/${playerScript.questionId}`)
    }
  }, [loading, error, data, currentPlayer, depId, sceId, stepId, queId, localScenario, navigate])

  // ! Logique du composant
  useEffect(() => {
    if (!queId) return

    const question = questions.find((q: Question) => q.id === queId)
    if (!question) return

    console.log(question.QuestionType)

    let Component
    switch (question.QuestionType.id) {
      case "1":
        Component = lazy(() => import("./QuestionTypes/QuestionTextField"))
        break
      case "2":
        Component = lazy(() => import("./QuestionTypes/QuestionRadioField"))
        break
      default:
        Component = lazy(() => import("./QuestionTypes/QuestionDefault"))
    }
    setQuestionModule(() => Component)
  }, [queId, questions])

  if (loading || error || !QuestionModule) return null

  const playerScripts = data.playerScripts
  const playerScript = playerScripts.find((ps: PlayerScript) => ps.playerId === currentPlayer!.id && ps.scriptId === sceId)

  const question = questions.find((q: Question) => q.id === queId)
  const nextQuestion = questions[questions.indexOf(question!) + 1]

  function handleAnswer(answer: string) {
    console.log(answer)
    if (true) {
      // ! correct
      if (nextQuestion !== undefined) {
        setLocalScenario(playerScript.id, currentPlayer!.id, sceId!, stepId!, nextQuestion.id)
        navigate(`/departments/${depId}/scenarios/${sceId}/steps/${stepId}/questions/${nextQuestion.id}`)
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
      <Suspense fallback={<div>Loading...</div>}>
        <QuestionModule 
          question={question!} 
          handleAnswer={handleAnswer}
        />
      </Suspense>
    </div>
  )
}

export default QuestionCell