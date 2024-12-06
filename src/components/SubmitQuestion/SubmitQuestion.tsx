import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import { Question } from "@exploregame/types"
import { Check, Flag } from "lucide-react"

const SubmitQuestion = ({
  question,
} : {
  question: Question
}) => {
  const { questionState } = useCurrentQuestionState()


  // TODO: faire le front propre mon léo d'amour  
  return (
    <section className="fixed bottom-0 h-44 w-full p-2 space-y-2">
        <div className={
          `grid grid-cols-6 min-h-24 
          ${questionState.answered 
            ? questionState.correct 
              ? 'bg-green-500' 
              : 'bg-red-500' 
            : 'bg-transparent'}`
          }
        >
          {questionState.answered && (
            <>
              <div className='col-span-5'>
                <div className="flex items-center gap-x-2 text-3xl">
                  <Check />
                  <p>{questionState.correct ? 'Correcte' : 'Incorrecte'}</p>
                </div>
                <p>description</p>
              </div>
              <div className="col-span-1">
                <Flag />
              </div>
            </>
          )}
        </div>
      <button
        className="bg-blue-500 text-white h-14 p-2 w-full rounded-md"
        type="submit"
      >
        {!questionState.answered ? "Valider" : "Continuer"}
      </button>
    </section>
  )
}

export default SubmitQuestion