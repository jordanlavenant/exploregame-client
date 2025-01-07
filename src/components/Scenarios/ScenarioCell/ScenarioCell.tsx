import StepCell from "@/components/Step/StepCell/StepCell"
import { Button } from "@/components/ui/button"
import getCurrentPlayer from "@/utils/currentPlayer"

const ScenarioCell = ({
  currentStep,
  incrementStep
}: {
  currentStep: string
  incrementStep: () => void
}) => {
  const currentPlayer = getCurrentPlayer()

  return (
    <div>
      ScenarioCell
      <p>{currentPlayer?.firstName}</p>
      <Button onClick={incrementStep}>Next step</Button>
      <StepCell 
        currentStep={currentStep}
        incrementStep={incrementStep} 
      />
    </div>
  )
}

export default ScenarioCell