import { Button } from "@/components/ui/button"
import { Script } from "@exploregame/types"
import { X } from "lucide-react"

const ScenarioHeader = ({
  scenario,
  saveStep
}: {
  scenario: Script
  saveStep: () => void
}) => {
  return (
    <div className="bg-slate-500 p-2 flex justify-between items-center">
      <Button 
        variant="default"
        onClick={saveStep}
      >
        <X size={24} />
      </Button>
      {scenario.name}
    </div>
  )
}

export default ScenarioHeader