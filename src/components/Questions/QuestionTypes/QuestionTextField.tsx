import SubmitQuestion from "@/components/SubmitQuestion/SubmitQuestion"
import { Form } from "@/components/ui/form"
import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import { Question } from "@exploregame/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Department } from "@exploregame/types"

const formSchema = z.object({
  answer: z.string().min(1, {
    message: 'La réponse est requise',
  }),
})

const QuestionTextField = ({
  question,
  checkAnswer,
  next
} : {
  question: Question
  checkAnswer: (answer: string) => boolean
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

interface colors {
  currentDepartment: Department
}

const colors = ({ currentDepartment }: colors) => {
    return {
        backgroundColor: currentDepartment.ColorSet.primary
    }
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <div className="flex flex-col">
          <div className="flex justify-center items-center h-96">
            <section className="grid grid-row gap-y-2 mx-8">
              <label className="text-2xl font-bold text-gray-500 w-full text-center my-4">
                {question.question}
              </label>
              <div className="relative flex justify-center items-center min-h-screen">
                <section className="grid grid-row gap-y-2 ">
                  <label className="text-2xl font-bold text-gray-500 w-full text-center my-4">
                    {question.question}
                  </label>
                  <div className="relative w-full">
                    <img src="/icon-write.svg" alt="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6" />
                    <input
                      disabled={questionState.answered}
                      className={`bg-gray-100 text-gray-400 border-gray-200 p-4 pl-12 border-4 rounded-3xl font-bold text-2xl w-full`}
                      placeholder="Écrivez ici"
                      {...form.register("answer")}
                    />
                  </div>
                </section>
              </div>
            </section>
          </div>
          <SubmitQuestion question={question} />
        </div>
      </form>
    </Form>
  )
}

export default QuestionTextField