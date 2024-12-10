import { Step } from "@exploregame/types";
import { createContext, useContext, useState } from "react";

interface NextStep {
  currentStep: Step
  nextStep: Step
  playerScriptId: String
}

interface NextStepContextType {
  stepProps: NextStep | undefined
  setStepProps: (nextStep: NextStep) => void
}

const NextStepContext = createContext<NextStepContextType | undefined>(undefined)

export const NextStepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stepProps, setStepProps] = useState<NextStep | undefined>(undefined)

  return (
    <NextStepContext.Provider value={{ stepProps, setStepProps }}>
      {children}
    </NextStepContext.Provider>
  )
}

export const useNextStep = () => {
  const context = useContext(NextStepContext);
  if (context === undefined) {
    throw new Error('useNextStep must be used within a NextStepProvider')
  }
  return context;
}