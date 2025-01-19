import { useNavigate, useParams } from "react-router-dom"
import getCurrentPlayer from "@/utils/currentPlayer"
import { PlayerScript, Question, ScriptStep, Step } from "@exploregame/types"
import { getLocalScenario, setLocalScenario } from "@/utils/localScenario"
import { gql, useMutation, useQuery } from "@apollo/client"
import { lazy, useEffect, useState, Suspense, LazyExoticComponent, ComponentType } from "react"
import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import { useNextStep } from "@/context/NextStepContext"
import Hint from "@/components/Hint/Hint"
import { useHints } from "@/context/HintContext"
import { useScriptProgress } from "@/context/ScriptProgressContext"

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
        lettre
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

export const QUESTION = gql`
  query FindQuestionById($id: String!) {
    question(id: $id) {
      id
      Answer {
        id
        answer
        isCorrect
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

export const CHECK_ANSWER = gql`
  mutation checkAnswer($input: CheckAnswerInput!) {
    checkAnswer(input: $input) {
      isCorrect
      correctAnswer
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
  const { setQuestionState } = useCurrentQuestionState()
  const { setCurrentQuestion } = useScriptProgress()
  const { setStepProps } = useNextStep()
  const currentPlayer = getCurrentPlayer()
  const localScenario = getLocalScenario()
  const { setHintsOpened } = useHints()
  const [QuestionModule, setQuestionModule] = useState<LazyExoticComponent<ComponentType<{
    question: Question
    checkAnswer: (answer: string) => void
    next: () => void
  }>> | null>(null)

  const [verifyAnswer] = useMutation(CHECK_ANSWER)

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

  const scriptStep: ScriptStep = steps.find((s: Step) => s.id === stepId)
  const nextScriptStep: ScriptStep = steps[steps.indexOf(scriptStep) + 1]

  function checkAnswer(answer: string) {
    try {
      verifyAnswer({
        variables: {
          input: {
            questionId: question!.id,
            answer
          }
        }
      }).then((response) => {
        const correct = response.data.checkAnswer.isCorrect
        const answer = response.data.checkAnswer.correctAnswer
        setQuestionState({
          answered: true,
          correct,
          answer,
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  function next() {
    setCurrentQuestion((prev) => prev + 1)
    if (nextQuestion !== undefined) {
      setQuestionState({
        answered: false,
        correct: false,
        answer: ''
      })
      setHintsOpened([false, false, false])
      setLocalScenario(playerScript.id, currentPlayer!.id, sceId!, stepId!, nextQuestion.id)
      navigate(`/departments/${depId}/scenarios/${sceId}/steps/${stepId}/questions/${nextQuestion.id}`)
    } else {
      setStepProps({
        currentStep: scriptStep,
        nextStep: nextScriptStep,
        playerScriptId: playerScript.id
      })
      setHintsOpened([false, false, false])
      navigate(`/departments/${depId}/scenarios/${sceId}/steps/${stepId}`)
    }
  }
  
  return (
    <div>
      {QuestionModule && question && (
        <Suspense fallback={<div>Loading...</div>}>
          <Hint question={question} />
          <QuestionModule 
            question={question}
            checkAnswer={checkAnswer}
            next={next}
          />
        </Suspense>
      )}
    </div>
  )
}

export default QuestionCell