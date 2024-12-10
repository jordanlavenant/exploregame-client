import SubmitQuestion from "@/components/SubmitQuestion/SubmitQuestion";
import { Form } from "@/components/ui/form";
import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext";
import { Maybe, Question } from "@exploregame/types"
import QuestionBottom from "@components/Questions/QuestionBottom"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Answer {
  __typename: string
  id: string
  answer: string
}

const formSchema = z.object({
  answer: z.string().min(1, {
    message: 'La réponse est requise',
  }),
})

const QuestionRadioField = ({
  question,
  checkAnswer,
  next
}: {
  question: Question
  checkAnswer: (answer: string) => void
  next: () => void
}) => {
  const { questionState } = useCurrentQuestionState()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function submit(data: z.infer<typeof formSchema>) {
    try {
      !questionState.answered ? checkAnswer(data.answer) : next()
    } catch (err) {
      console.error("Erreur de connexion:", err)
    }
  }

  const answers: Maybe<Answer[]> = question.Answer as Maybe<Answer[]>
  if (!answers) return

  return (
    // <section className="flex flex-wrap justify-center items-center h-[80vh]">
    //   <p className="text-2xl font-bold text-gray-500 w-full text-center my-4 "
    //   >{question.question}</p>
    //     <section className="grid grid-row gap-y-2 mx-8 rounded w-full">
    //       {answers.map((a: Answer) => (
    //         // ! Ici composant pour les bontons radio
    //         <button 
    //           onClick={() => {
    //             answer?.id === a.id ? setAnswer(null) : setAnswer(a)
    //           }}
    //           key={a.id}
    //           className={`${answer === a ? 'bg-yellow-400 text-yellow-600 border-yellow-600' : 'bg-gray-100 text-black border-gray-200'} p-4 border-4 rounded-3xl font-bold text-2xl`}
    //         >
    //           {a.answer}
    //         </button>
    //       ))}
    //     </section>
    //   <QuestionBottom valide={answer} answer={answer?.answer} handleAnswer={handleAnswer} />
    // </section>  
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <div className="flex flex-col">
          <label className="text-lg font-bold">{question.question}</label>
          <section className="grid grid-row gap-y-2 mx-8">
          {answers.map((answer, index) => (
            <button
              key={index}
              type="button"
              className={`${form.watch("answer") === answer.answer ? "bg-blue-500 text-white" : "bg-gray-300"} p-2 rounded-md`}
              onClick={() => {
                if (form.watch("answer") === answer.answer) {
                  form.setValue("answer", "")
                  return
                }
                form.setValue("answer", answer.answer)
              }}
            >
              {answer.answer}
            </button>
          ))}
          </section>
          <SubmitQuestion question={question} />
        </div>
      </form>
    </Form>
  )
}

export default QuestionRadioField;