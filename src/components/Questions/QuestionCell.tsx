import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import getCurrentPlayer from "@/utils/currentPlayer"
import { PlayerScript, Question, Step } from "@exploregame/types"
import { getLocalScenario, setLocalScenario } from "@/utils/localScenario"
import { gql, useMutation, useQuery } from "@apollo/client"
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

export const SCRIPT = gql`
  query FindScriptById($id: String!) {
    script(id: $id) {
      id
      ScriptStep {
        id
        Step {
          id
          Questions {
            id
          }
        }
      }
    }
  }
`

export const UPDATE_PLAYER_SCRIPT = gql`
  mutation updatePlayerScript($id: String!, $input: UpdatePlayerScriptInput!) {
    updatePlayerScript(id: $id, input: $input) {
      id
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

  const [updatePlayerScript] = useMutation(UPDATE_PLAYER_SCRIPT)

  useEffect(() => {
    if (!localScenario) {
      navigate(`/departments/${depId}`)
    }
  }, [localScenario, navigate, depId])

  const { 
    data: dataPS,
    loading: loadingPS,
    error: errorPS
  } = useQuery(PLAYER_SCRIPTS)

  const { 
    data: dataScript,
    loading: loadingScript,
    error: errorScript
  } = useQuery(SCRIPT, {
    variables: { id: sceId }
  })


  useEffect(() => {
    if (loadingPS || errorPS) return

    const playerScripts = dataPS.playerScripts
    const playerScript = playerScripts.find((ps: PlayerScript) => ps.playerId === currentPlayer!.id && ps.scriptId === sceId)

    if (queId !== localScenario.questionId) {
      console.info("Redirecting to the last question answered")
      navigate(`/departments/${depId}/scenarios/${sceId}/steps/${stepId}/questions/${playerScript.questionId}`)
    }
  }, [
    loadingPS,
    errorPS,
    dataPS,
    currentPlayer,
    depId,
    sceId,
    stepId,
    queId,
    localScenario,
    navigate
  ])

  // ! Logique du composant
  useEffect(() => {
    if (!queId) return

    const question = questions.find((q: Question) => q.id === queId)
    if (!question) return

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

  if (
    loadingPS || 
    loadingScript || 
    errorPS || 
    errorScript || 
    !QuestionModule
  ) return null

  const playerScripts = dataPS.playerScripts
  const playerScript = playerScripts.find((ps: PlayerScript) => ps.playerId === currentPlayer!.id && ps.scriptId === sceId)

  const steps = dataScript.script.ScriptStep

  const question = questions.find((q: Question) => q.id === queId)
  const nextQuestion = questions[questions.indexOf(question!) + 1]

  const step = steps.find((s: Step) => s.id === stepId)
  const nextStep = steps[steps.indexOf(step) + 1]

  function handleAnswer(answer: string) {
    if (true) {
      // ! correct
      if (nextQuestion !== undefined) {
        setLocalScenario(playerScript.id, currentPlayer!.id, sceId!, stepId!, nextQuestion.id)
        navigate(`/departments/${depId}/scenarios/${sceId}/steps/${stepId}/questions/${nextQuestion.id}`)
      } else {
        // ! fin de l'étape
        updatePlayerScript({
          variables: {
            id: playerScript.id,
            input: {
              stepId: nextStep.id,
              questionId: nextStep.Step.Questions[0].id
            }
          }
        }).then(() => navigate(`/departments/${depId}/scenarios/${sceId}`))
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