import SubmitQuestion from "@/components/SubmitQuestion/SubmitQuestion"
import { Form } from "@/components/ui/form"
import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import { Question } from "@exploregame/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <div className="flex flex-col">
          <section className="grid grid-row gap-y-2 mx-8">
            <label className="text-2xl font-bold text-gray-500 w-full text-center my-4">{question.question}</label>
            <input
              className="bg-gray-100 text-black border-gray-200 p-4 border-4 rounded-3xl font-bold text-2xl flex justify-center items-center"
              {...form.register("answer")}
            >
            </input>
          </section>
          <SubmitQuestion question={question} />
        </div>
      </form>
    </Form>
  )
}

export default QuestionTextField