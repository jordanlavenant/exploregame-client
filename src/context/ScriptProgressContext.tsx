import { createContext, useContext, useState, useEffect } from "react"

interface ScriptProgressContextType {
  totalQuestions: number
  currentQuestion: number
  setTotalQuestions: React.Dispatch<React.SetStateAction<number>>
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
}

const ScriptProgressContext = createContext<ScriptProgressContextType | undefined>(undefined)

export const ScriptProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalQuestions, setTotalQuestions] = useState<number>(() => {
    const storedTotalQuestions = localStorage.getItem('totalQuestions')
    return storedTotalQuestions ? JSON.parse(storedTotalQuestions) : 0
  })

  const [currentQuestion, setCurrentQuestion] = useState<number>(() => {
    const storedCurrentQuestion = localStorage.getItem('currentQuestion')
    return storedCurrentQuestion ? JSON.parse(storedCurrentQuestion) : 0
  })

  useEffect(() => {
    localStorage.setItem('totalQuestions', JSON.stringify(totalQuestions));
  }, [totalQuestions])

  useEffect(() => {
    localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
  }, [currentQuestion])

  return (
    <ScriptProgressContext.Provider value={{ totalQuestions, currentQuestion, setTotalQuestions, setCurrentQuestion }}>
      {children}
    </ScriptProgressContext.Provider>
  )
}

export const useScriptProgress = () => {
  const context = useContext(ScriptProgressContext)
  if (context === undefined) {
    throw new Error('useScriptProgress must be used within a ScriptProgressProvider')
  }
  return context
}