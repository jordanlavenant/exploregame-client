import { Question } from "@exploregame/types"

const QuestionDefault = ({
  question,
  checkAnswer,
  next,
}: {
  question: Question
  checkAnswer: (answer: string) => void
  next: () => void
}) => {
  return (
    <div>
      <h1>QuestionDefault</h1>
      {question.id} - {question.question}
    </div>
  )
}

export default QuestionDefault