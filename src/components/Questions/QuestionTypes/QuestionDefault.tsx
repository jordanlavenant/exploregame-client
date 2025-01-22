import { Question } from "@exploregame/types"

const QuestionDefault = ({
  question,
  checkAnswer,
  next,
}: {
  question: Question
  checkAnswer: (answers: string[]) => void
  next: () => void
}) => {
  console.log(checkAnswer, next)
  return (
    <div>
      <h1>QuestionDefault</h1>
      {question.id} - {question.question}
    </div>
  )
}

export default QuestionDefault