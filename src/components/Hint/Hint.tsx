import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button"
import { BoxIcon, Lightbulb, X } from "lucide-react"
import { Hint as HintType, Question } from "@exploregame/types"
import { gql, useQuery } from "@apollo/client"
import { useHints } from "@/context/HintContext"
import { useState } from "react"

export const QUESTION = gql`
  query FindQuestionById($id: String!) {
    question(id: $id) {
      id
      Hint {
        id
        hintLevelId
        help
      }
    }
  }
`
interface HintState {
  revealed: boolean;
  type: string | null;
  hint: string | null;
}

const Hint = ({
  question
} : {
  question: Question
}) => {
  const { questionState } = useCurrentQuestionState()
  const { hintsOpened, setHintsOpened } = useHints()
  const [ hintState, setHintState ] = useState<HintState>({
    revealed: false,
    type: null,
    hint: null
  })
  const hintLevels = ["Petit", "Moyen", "Grand"]
  const { data, loading, error } = useQuery(QUESTION, {
    variables: { id: question.id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  if (questionState.answered) return

  const hints = data.question.Hint

  const handleHint = (hintId: number) => {
    setHintsOpened((prevHintsOpened) => {
      const newHintsOpened = [...prevHintsOpened]
      newHintsOpened[hintId] = true
      return newHintsOpened
    })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button 
          variant="default"
          className="z-10 absolute m-2 bottom-28 right-0 w-14 h-14 rounded-full text-white"
        >
          <BoxIcon size={24} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="grid grid-rows-3 h-full my-20 bg-transparent border-transparent shadow-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col items-center gap-y-8">
            <Lightbulb size={48} className="text-yellow-500" />
            <p className="text-yellow-500 text-4xl font-bold">
              {hintState.revealed ? `Indice : ${hintState.type}` : "Niveau d'indice"}
            </p>
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        {!hintState.revealed ? (
          <section className="flex flex-col gap-8">
            {hints.map((hint: HintType) => {
              const hintId = parseInt(hint.hintLevelId) - 1
              return (
                <Button 
                  disabled={hintsOpened[hintId]}
                  onClick={() => {
                    handleHint(hintId)
                    setHintState({
                      revealed: true,
                      type: hintLevels[hintId],
                      hint: hint.help
                    })
                  }}
                  variant="ghost"
                  className="text-white font-bold text-3xl"
                  key={hint.id}
                >
                  {hint.hintLevelId === '1' ? "Petit" : hint.hintLevelId === '2' ? "Moyen" : "Grand"}
                </Button>
              )
            })}
          </section>
        ) : (
          <p className="text-center text-white font-bold text-3xl">{hintState.hint}</p>
        )}
        <AlertDialogFooter className="fixed top-0 left-0">
          <AlertDialogCancel
            className="bg-transparent border-transparent shadow-none text-yellow-500 w-16 h-16"
            onClick={() => setHintState({ revealed: false, type: null, hint: null })}
          >
            <X size={32} />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Hint