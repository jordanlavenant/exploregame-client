import { Script } from "@exploregame/types"
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const ScenarioHeader = ({
  scenario
}: {
  scenario: Script
}) => {

  console.log(scenario)
  const progress = 50; // Example progress value

  return (
    <div className="scenario-header">
      <h1>Scenario Header</h1>
      <Progress
        value={progress}
        className={cn(
          "w-full h-4 rounded-md bg-gray-200",
          "overflow-hidden shadow-md"
        )}
      />
    </div>
  )
}

export default ScenarioHeader