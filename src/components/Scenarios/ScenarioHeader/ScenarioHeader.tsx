import { Script } from "api/types/graphql"

const ScenarioHeader = ({
  scenario
}: {
  scenario: Script
}) => {

  console.log(scenario)

  return (
    <div className="scenario-header">
    <h1>Scenario Header</h1>
    </div>
  )
}

export default ScenarioHeader