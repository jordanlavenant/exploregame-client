import QuestionCell from "@/components/Questions/QuestionCell"
import QuestionHeader from "@/components/Questions/QuestionHeader"
import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
export const QUESTIONS_RELATED = gql`
  query FindStepById($id: String!) {
    step(id: $id) {
      id
      Questions {
        id
        question
        Answer {
          id
          answer
        }
        QuestionType {
          id
        }
      }
    }
  }
`

const QuestionPage = () => {
  const { stepId } = useParams()
  const { data, loading, error } = useQuery(QUESTIONS_RELATED, {
    variables: { id: stepId }
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const questions = data.step.Questions

  return (
    <main>
      <QuestionHeader />
      <QuestionCell questions={questions} />
    </main>
  )
}

export default QuestionPage