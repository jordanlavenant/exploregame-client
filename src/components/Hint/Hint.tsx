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
import { BoxIcon, Lightbulb, CircleHelp, X } from "lucide-react"
import { Hint as HintType, Question } from "@exploregame/types"
import { gql, useQuery } from "@apollo/client"
import { useHints } from "@/context/HintContext"
import { useState } from "react"
import { useColorsDepartments } from "@/context/ColorsDepartmentContext"

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

const Hint = (
  {
    question, 
    penalty
  } : {
  penalty: (importance: string) => void; 
  question: Question
}) => {
  const { questionState, setQuestionState } = useCurrentQuestionState()
  const { getColors } = useColorsDepartments()
  const { primary } = getColors()
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
    penalty(hints[hintId].hintLevelId);
    setHintsOpened((prevHintsOpened) => {
      const newHintsOpened = [...prevHintsOpened]
      newHintsOpened[hintId] = true
      return newHintsOpened
    })
    setHintState({
      revealed: true,
      type: hintLevels[hintId],
      hint: hints[hintId].help
    })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button 
          variant="default"
          className="z-10 fixed m-2 bottom-28 right-0 w-14 h-14 rounded-full text-white"
          style={{ backgroundColor: primary }}
        >
          <CircleHelp style={{ width: '100%', height: '100%' }} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col gap-y-24 min-w-full h-full bg-transparent border-transparent shadow-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="mt-24 flex flex-col items-center gap-y-8 min-w-full">
            <Lightbulb size={48} style={{ color: primary }} />
            <p className='text-4xl font-bold' style={{ color: primary }}>
              {hintState.revealed ? `Indice : ${hintState.type}` : "Niveau d'indice"}
            </p>
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        {!hintState.revealed ? (
          <section className="flex flex-col gap-8 w-full">
            {hints.map((hint: HintType) => {
              const hintId = parseInt(hint.hintLevelId) - 1
              return (
                <Button 
                  disabled={hintsOpened[hintId]}
                  onClick={() => handleHint(hintId)}
                  variant="ghost"
                  className="text-white font-bold text-3xl hover:bg-transparent" 
                  style={{ color: primary }}
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
            className="bg-transparent border-transparent hover:bg-transparent w-16 h-16 absolute top-0 left-0"
            style={{ color: primary }}
            onClick={() => setHintState({ revealed: false, type: null, hint: null })}
          >
            <X size={48} style={{ color: '#000', width: '100%', height: '100%' }}/>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Hint