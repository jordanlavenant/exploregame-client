import { Question } from "@exploregame/types"

const QuestionDefault = ({
  question,
  handleAnswer
} : {
  question: Question
  handleAnswer: (answer: string) => void
}) => {
  return (
    <div>
      <h1>QuestionDefault</h1>
      {question.id} - {question.question}
    </div>
  )
}

export default QuestionDefault