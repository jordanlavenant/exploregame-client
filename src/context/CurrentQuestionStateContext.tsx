import { createContext, useContext, useState } from "react";

interface QuestionState {
  answered: boolean
  correct: boolean
  answer: string
}

const CurrentQuestionStateContext = createContext<{
    questionState: QuestionState
    setQuestionState: React.Dispatch<React.SetStateAction<QuestionState>>
}>({
    questionState: {
      answered: false,
      correct: false,
      answer: ''
    },
    setQuestionState: () => {}
});

export const CurrentQuestionStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questionState, setQuestionState] = useState<QuestionState>({
    answered: false,
    correct: false,
    answer: ''
  })

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