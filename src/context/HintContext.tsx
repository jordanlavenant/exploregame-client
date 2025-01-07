import React, { createContext, ReactNode, useContext, useState, useEffect } from "react"

interface HintContextType {
  hintsOpened: boolean[]
  setHintsOpened: React.Dispatch<React.SetStateAction<boolean[]>>
}

const HintContext = createContext<HintContextType | undefined>(undefined)

export const HintProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hintsOpened, setHintsOpened] = useState<boolean[]>(() => {
    const storedHints = localStorage.getItem('hintsOpened')
    return storedHints ? JSON.parse(storedHints) : [false, false, true]
  })

  useEffect(() => {
    localStorage.setItem('hintsOpened', JSON.stringify(hintsOpened))
  }, [hintsOpened])

  return (
    <HintContext.Provider value={{ hintsOpened, setHintsOpened }}>
        {children}
    </HintContext.Provider>
  )
}

export const useHints = () => {
  const context = useContext(HintContext)
  if (context === undefined) {
    throw new Error('useHints must be used within a HintProvider')
  }
  return context
}