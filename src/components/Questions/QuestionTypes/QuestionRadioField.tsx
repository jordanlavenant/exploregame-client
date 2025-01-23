import SubmitQuestion from "@/components/SubmitQuestion/SubmitQuestion";
import { Form } from "@/components/ui/form";
import { useColorsDepartments } from "@/context/ColorsDepartmentContext";
import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext";
import { Maybe, Question } from "@exploregame/types"
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleDot } from "lucide-react";
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
  next,
}: {
  question: Question
  checkAnswer: (answers: string[]) => void
  next: () => void
}) => {
  const { questionState } = useCurrentQuestionState()
  const { getColors } = useColorsDepartments()
  const { primary, secondary } = getColors()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { answered, userAnswers, answers: realAnswers } = questionState

  async function submit(data: z.infer<typeof formSchema>) {
    const answer = [data.answer]
    try {
      !answered ? checkAnswer(answer) : next()
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
              {answers.map((answer, index) => {
                let buttonStyle = {}
                if (answered) {
                  if (realAnswers.includes(answer.answer)) {
                    buttonStyle = { backgroundColor: '#46E54E', color: '#fff', borderColor: '#46E54E' }
                  } else if (userAnswers.includes(answer.answer)) {
                    buttonStyle = { backgroundColor: '#C53030', color: '#fff', borderColor: '#C53030' }
                  }
                } else {
                  buttonStyle = form.watch("answer") === answer.answer 
                    ? { backgroundColor: secondary, color: primary, borderColor: primary } 
                    : {}
                }

                return (
                  <button
                    key={index}
                    disabled={questionState.answered}
                    type="button"
                    className='bg-gray-100 text-gray-400 border-gray-200 p-4 border-4 rounded-3xl font-bold text-2xl flex justify-center items-center'
                    style={buttonStyle}
                    onClick={() => {
                      if (form.watch("answer") === answer.answer) {
                        form.setValue("answer", "")
                        return
                      }
                      form.setValue("answer", answer.answer)
                    }}
                  >
                    {form.watch('answer') === answer.answer && <CircleDot size={32} className={`text-[${primary}]`} />}
                    <p className="w-full">
                      {answer.answer}
                    </p>
                  </button>
                )
              })}
            </section>
          </div>
          <SubmitQuestion />
        </div>
      </form>
    </Form>
  )
}

export default QuestionRadioField;