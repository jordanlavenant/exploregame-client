import { createContext, useContext, useState } from "react";

interface QuestionState {
  userAnswers: string[]
  answered: boolean
  correct: boolean
  answers: string[]
}

const CurrentQuestionStateContext = createContext<{
    questionState: QuestionState
    setQuestionState: React.Dispatch<React.SetStateAction<QuestionState>>
}>({
    questionState: {
      userAnswers: [],
      answered: false,
      correct: false,
      answers: [],
    },
    setQuestionState: () => {}
});

export const CurrentQuestionStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [questionState, setQuestionState] = useState<QuestionState>({
    userAnswers: [],
    answered: false,
    correct: false,
    answers: [],
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