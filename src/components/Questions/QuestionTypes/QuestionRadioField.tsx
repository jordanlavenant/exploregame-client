import SubmitQuestion from "@/components/SubmitQuestion/SubmitQuestion";
import { Form } from "@/components/ui/form";
import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext";
import { Department, Maybe, Question } from "@exploregame/types"
import QuestionBottom from "@components/Questions/QuestionBottom"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CurrentDepartmentProvider } from "@/context/CurrentDepartmentContext";
import DepartmentPage from "@/pages/Department/Department";

interface Answer {
  __typename: string
  id: string
  answer: string
}

interface colors {
    currentDepartment: Department
}

const colors = ({ currentDepartment }: colors) => {
    return {
        backgroundColor: currentDepartment.ColorSet.primary
    }
}

const formSchema = z.object({
  answer: z.string().min(1, {
    message: 'La réponse est requise',
  }),
})

const QuestionRadioField = ({
  question,
  checkAnswer,
  next,
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <div className="flex flex-col">
          <div className="flex justify-center items-center h-96">
            <section className="grid grid-row gap-y-2 mx-8 w-full">
            <label className="text-2xl font-bold text-gray-500 w-full text-center my-4">{question.question}</label>
            {answers.map((answer, index) => (
              <button
                key={index}
                disabled={questionState.answered}
                type="button"
                className={`${form.watch("answer") === answer.answer ? `bg-[${colors}] text-yellow-600 border-yellow-600` : "bg-gray-100 text-gray-400  border-gray-200"} p-4 border-4 rounded-3xl font-bold text-2xl flex justify-center items-center`}
                onClick={() => {
                  if (form.watch("answer") === answer.answer) {
                    form.setValue("answer", "")
                    return
                  }
                  form.setValue("answer", answer.answer)
                }}
              >
                <img src="/icon-round.svg" alt="" className="" />
                <p className="w-full">
                  {answer.answer}
                </p>
              </button>
            ))}
            </section>
          </div>
          <SubmitQuestion question={question} />
        </div>
      </form>
    </Form>
  )
}

export default QuestionRadioField;