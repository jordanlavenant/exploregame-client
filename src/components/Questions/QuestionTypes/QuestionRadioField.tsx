import { Maybe, Question } from "@exploregame/types"
import QuestionBottom from "@components/Questions/QuestionBottom"
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
    <section className="flex flex-wrap justify-center items-center h-[80vh]">
      <p className="text-2xl font-bold text-gray-500 w-full text-center my-4 "
      >{question.question}</p>
        <section className="grid grid-row gap-y-2 mx-8 rounded w-full">
          {answers.map((a: Answer) => (
            // ! Ici composant pour les bontons radio
            <button 
              onClick={() => {
                answer?.id === a.id ? setAnswer(null) : setAnswer(a)
              }}
              key={a.id}
              className={`${answer === a ? 'bg-yellow-400 text-yellow-600 border-yellow-600' : 'bg-gray-100 text-black border-gray-200'} p-4 border-4 rounded-3xl font-bold text-2xl`}
            >
              {a.answer}
            </button>
          ))}
        </section>
      <QuestionBottom valide={answer} answer={answer?.answer} handleAnswer={handleAnswer} />
    </section>  
  )
}

export default QuestionRadioField;
