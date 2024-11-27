import { Button } from "@/components/ui/button"
import getLocalScenario from "@/utils/localScenario"
import { gql, useQuery } from "@apollo/client"
import { Question } from "@exploregame/types"
import { useEffect, useState } from "react"

export const STEP = gql`
  query FindStepByIf($id: String!) {
    step(id: $id) {
      id
      name
      Questions {
        id
        question
      }
      ScriptStep {
        lettre
      }
    }
  }
`

const StepCell = ({
  currentStep,
  incrementStep
}: {
  currentStep: string
  incrementStep: () => void
}) => {
  const { data, loading, error } = useQuery(STEP, {
    variables: { id: currentStep }
  })

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)

  useEffect(() => {
    if (data) {
      const { questionId } = getLocalScenario()
      const step = data.step
      const questions = step.Questions
      const foundQuestion = questions.find((question: Question) => question.id === questionId)
      setCurrentQuestion(foundQuestion || null)
    }
  }, [data])

  useEffect(() => {
    const handleStorageChange = () => {
      const { questionId } = getLocalScenario()
      if (data) {
        const step = data.step
        const questions = step.Questions
        const foundQuestion = questions.find((question: Question) => question.id === questionId)
        setCurrentQuestion(foundQuestion || null)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [data])

  if (loading) {
    return <header className="header">Loading...</header>
  }
  if (error) {
    return <header className="header">Error</header>
  }

  const step = data.step
  const questions = step.Questions

  const incrementQuestion = () => {
    const localScenario = getLocalScenario()
    const currentQuestionIndex = questions.findIndex((question: Question) => question.id === localScenario.questionId)
    if (currentQuestionIndex < questions.length - 1) {
      const newQuestionId = questions[currentQuestionIndex + 1].id
      localScenario.questionId = newQuestionId
      localStorage.setItem('scenario', JSON.stringify(localScenario))
      setCurrentQuestion(questions[currentQuestionIndex + 1])
    } else {
      console.log('increment step')
      incrementStep()
    }
  }

  return (
    <div>
      étape {step.id}
      <div>
        {currentQuestion?.id} - {currentQuestion?.question}
      </div>
      <Button variant="default" onClick={incrementQuestion}>increment question</Button>
    </div>
  )
}

export default StepCell