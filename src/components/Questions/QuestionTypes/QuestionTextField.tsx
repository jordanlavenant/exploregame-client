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
      // handleAnswer(data.answer)
    } catch (err) {
      console.error("Erreur de connexion:", err)
    }
  }

  return (
    <div></div>
  )
}

export default QuestionTextField