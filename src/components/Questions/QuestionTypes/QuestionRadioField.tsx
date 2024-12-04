import { Maybe, Question } from "@exploregame/types"
import { useState } from "react";

interface Answer {
  __typename: string
  id: string
  answer: string
}

const QuestionRadioField = ({
  question,
  handleAnswer,
}: {
  question: Question;
  handleAnswer: (answer: string) => void;
}) => {
  const answers: Maybe<Answer[]> = question.Answer as Maybe<Answer[]>
  if (!answers) return

  const [answer, setAnswer] = useState<Answer | null>(null)

  function submit() {
    if (!answer) return
    console.log(answer)
    handleAnswer(answer.answer)
  }

  return (
    <section>
      <p>{question.question}</p>
      <section className="grid grid-row gap-y-2 mx-8">
        {answers.map((a: Answer) => (
          // ! Ici composant pour les bontons radio
          <button 
            onClick={() => {
              answer?.id === a.id ? setAnswer(null) : setAnswer(a)
            }}
            key={a.id}
            className={`${answer === a ? 'bg-green-400' : 'bg-gray-100'} p-2`}
          >
            {a.answer}
          </button>
        ))}
      </section>
      <button onClick={submit} className="bg-blue-500 text-white p-2 mt-4">
        Submit
      </button>
    </section>
  )
}

export default QuestionRadioField;
