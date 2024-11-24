import getCurrentPlayer from "@/utils/currentPlayer"
import { gql, useQuery } from "@apollo/client"

export const STEP = gql`
  query FindStepByIf($id: String!) {
    step(id: $id) {
      id
      name
      Questions {
        question
      }
      ScriptStep {
        lettre
      }
    }
  }
`



const ScenarioCell = ({
  currentStep,
  incrementStep
}: {
  currentStep: string
  incrementStep: () => void
}) => {
  const currentPlayer = getCurrentPlayer()
  const { data, loading, error } = useQuery(STEP, {
    variables: { id: currentStep }
  })

  if (loading) {
    return <header className="header">Loading...</header>
  }
  if (error) {
    return <header className="header">Error</header>
  }

  return (
    <div>
      ScenarioCell
      <p>{currentPlayer?.firstName}</p>
      <p>{currentStep}</p>
      <button onClick={incrementStep}>increment</button>
    </div>
  )
}

export default ScenarioCell