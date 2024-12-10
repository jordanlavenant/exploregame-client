import React, { createContext, useContext, useState } from "react"

interface Colors {
  primary: string
  secondary: string
  tertiary: string
}

interface ColorsDepartmentContextType {
  colors: Colors
  setColors: React.Dispatch<React.SetStateAction<Colors>>
}

const ColorsDepartmentContext = createContext<ColorsDepartmentContextType | undefined>(undefined)

export const ColorsDepartmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<Colors>({
    primary: '',
    secondary: '',
    tertiary: ''
  })

  return (
    <ColorsDepartmentContext.Provider value={{ colors, setColors }}>
        {children}
    </ColorsDepartmentContext.Provider>
  )
}

export const useColorsDepartments = () => {
  const context = useContext(ColorsDepartmentContext)
  if (context === undefined) {
    throw new Error('useColorsDepartments must be used within a ColorsDepartmentProvider')
  }
  return context
}