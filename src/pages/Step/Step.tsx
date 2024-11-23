import StepCell from "@/components/Step/StepCell/StepCell"
import StepHeader from "@/components/Step/StepHeader/StepHeader"
import { useParams } from "react-router-dom"

const StepPage = () => {
  const { sceId, stepId } = useParams()
  console.log(sceId, stepId)

  return (
    <main>
      <StepHeader />
      <StepCell />
    </main>
  )

}

export default StepPage