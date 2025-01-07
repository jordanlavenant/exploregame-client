import { Question } from "@exploregame/types"

const QuestionDefault = ({
  question,
  next
} : {
  question: Question
  next: () => void
}) => {
  console.log(question)
  return (
    <div>
      <h1>QuestionDefault</h1>
      {question.id} - {question.question}
    </div>
  )
}

export default QuestionDefault