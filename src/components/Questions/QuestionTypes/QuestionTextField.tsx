import { Form } from "@/components/ui/form"
import { gql, useQuery } from "@apollo/client"
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
  handleAnswer
} : {
  question: Question
  handleAnswer: (answer: string) => void
}) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function submit(data: z.infer<typeof formSchema>) {
    try {
      console.log(data)
      handleAnswer(data.answer)
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
          <button className="bg-blue-500 text-white p-2 rounded-md mt-2" type="submit">Valider</button>
        </div>
      </form>
    </Form>
  )
}

export default QuestionTextField