import { useCurrentQuestionState } from "@/context/CurrentQuestionStateContext"
import { gql, useMutation } from "@apollo/client"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../ui/button"
import { useNextStep } from "@/context/NextStepContext"

export const UPDATE_PLAYER_SCRIPT = gql`
  mutation updatePlayerScript($id: String!, $input: UpdatePlayerScriptInput!) {
    updatePlayerScript(id: $id, input: $input) {
      id
    }
  }
`

const StepLetter = () => {
  const navigate = useNavigate()
  const { depId, sceId } = useParams()
  const [updatePlayerScript] = useMutation(UPDATE_PLAYER_SCRIPT)
  const { setQuestionState } = useCurrentQuestionState()
  const { stepProps } = useNextStep()

  const { playerScriptId, currentStep, nextStep } = stepProps
  
  const handleNext = () => {
    updatePlayerScript({
      variables: {
        id: playerScriptId,
        input: {
          stepId: nextStep.id,
          questionId: nextStep.Step.Questions[0].id
        }
      }
    })
    .then(() => setQuestionState({
      answered: false,
      correct: false
    }))
    .then(() => navigate(`/departments/${depId}/scenarios/${sceId}`))
  }

  return (
    <section>
      <Button onClick={handleNext}>Next</Button>
      {currentStep.lettre}
    </section>
  )
}

export default StepLetter