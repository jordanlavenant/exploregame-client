import { Button } from "@/components/ui/button"
import { Script } from "@exploregame/types"
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { X } from "lucide-react"

const ScenarioHeader = ({
  scenario,
  saveStep
}: {
  scenario: Script
  saveStep: () => void
}) => {

  console.log(scenario)
  const progress = 50; // Example progress value

  return (
    <div className="bg-slate-500 p-2 flex justify-between items-center">
      <Button 
        variant="default"
        onClick={saveStep}
      >
        <X size={24} />
        </Button>
      {scenario.name}
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