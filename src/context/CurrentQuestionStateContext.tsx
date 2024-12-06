import { createContext, useContext, useState } from "react";

const CurrentQuestionStateContext = createContext<{
    questionState: boolean
    setQuestionState: (questionState: boolean) => void
}>({
    questionState: false,
    setQuestionState: () => {},
});

export const CurrentQuestionStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questionState, setQuestionState] = useState<boolean>(false);

  return (
    <CurrentQuestionStateContext.Provider value={{ questionState, setQuestionState }}>
      {children}
    </CurrentQuestionStateContext.Provider>
  )
}

export const useCurrentQuestionState = () => {
  const context = useContext(CurrentQuestionStateContext)
  if (context === undefined) {
    throw new Error('useCurrentQuestionState must be used within a CurrentQuestionStateProvider')
  }
  return context
}