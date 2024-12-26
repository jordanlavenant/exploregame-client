import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button"
import { BoxIcon } from "lucide-react"
import { Question } from "@exploregame/types"
import { gql, useQuery } from "@apollo/client"

export const QUESTION = gql`
  query FindQuestionById($id: String!) {
    question(id: $id) {
      id
      Hint {
        id
      }
    }
  }
`

const Hint = ({
  question
} : {
  question: Question
}) => {
  const { questionState } = useCurrentQuestionState()
  const { data, loading, error } = useQuery(QUESTION, {
    variables: { id: question.id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  if (questionState.answered) return

  const hints = data.question.Hints

  console.log(hints)

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button 
          variant="default"
          // ! Ici mettre la bonne couleur de la formation
          className="z-10 absolute m-2 bottom-28 right-0 w-14 h-14 rounded-full text-white"
        >
          <BoxIcon size={24} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-transparent border-transparent shadow-none h-screen w-screen">
        <AlertDialogCancel className="border-transparent absolute top-2 left-2" asChild>
          <Button variant="default" className="text-red-500">
            Annuler
          </Button>
        </AlertDialogCancel>
        {/* <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Hint