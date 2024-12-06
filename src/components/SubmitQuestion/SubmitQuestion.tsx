import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import { Question } from "@exploregame/types"
import { Check, Flag } from "lucide-react"
import { useState } from "react"

enum SubmitState {
  Pending,
  Next
}

const SubmitQuestion = ({
  question,
} : {
  question: Question
}) => {
  const { questionState } = useCurrentQuestionState()

  return (
    <section className="fixed bottom-0 h-44 w-full p-2 space-y-2">
        <div className="grid grid-cols-6 min-h-24">
          {questionState && (
            <>
              <div className="col-span-5 bg-green-500">
                <div className="flex items-center gap-x-2 text-3xl">
                  <Check />
                  <p></p>
                </div>
                <p>description</p>
              </div>
              <div className="col-span-1 bg-yellow-500">
                <Flag />
              </div>
            </>
          )}
        </div>
      <button
        className="bg-blue-500 text-white h-14 p-2 w-full rounded-md"
        type="submit"
      >
        {!questionState ? "Valider" : "Continuer"}
      </button>
    </section>
  )
}

export default SubmitQuestion