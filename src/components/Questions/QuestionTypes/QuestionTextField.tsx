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
      !questionState ? checkAnswer(data.answer) : next()
    } catch (err) {
      console.error("Erreur de connexion:", err)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <div className="flex flex-col">
          <label className="text-lg font-bold">{question.question}</label>
          <input
            className="border-2 border-gray-300 p-2 rounded-md"
            {...form.register("answer")}
          />
          <SubmitQuestion question={question} />
        </div>
      </form>
    </Form>
  )
}

export default QuestionTextField