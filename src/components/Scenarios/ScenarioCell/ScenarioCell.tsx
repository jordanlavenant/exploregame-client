import { Script } from "@/types/graphql"

const ScenarioCell = ({
  scenario
}: {
  scenario: Script
}) => {

  console.log(scenario)

  return (
    <div>
      ScenarioCell
    </div>
  )
}

export default ScenarioCell