import SubmitQuestion from "@/components/SubmitQuestion/SubmitQuestion";
import { Form } from "@/components/ui/form";
import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext";
import { Maybe, Question } from "@exploregame/types"
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
      !questionState ? checkAnswer(data.answer) : next()
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