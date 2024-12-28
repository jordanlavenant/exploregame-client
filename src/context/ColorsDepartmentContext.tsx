import React, { createContext, useContext, useEffect, useState } from "react"

interface Colors {
  primary: string
  secondary: string
  tertiary: string
}

interface ColorsDepartmentContextType {
  setColors: React.Dispatch<React.SetStateAction<Colors>>
  getColors: () => Colors
}

const ColorsDepartmentContext = createContext<ColorsDepartmentContextType | undefined>(undefined)

export const ColorsDepartmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colors, setColors] = useState<Colors>(() => {
    const storedColors = localStorage.getItem('colors')
    return storedColors ? JSON.parse(storedColors) : { primary: '', secondary: '', tertiary: '' }
  })

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors))
  }, [colors])

  const getColors = () => {
    return JSON.parse(localStorage.getItem('colors')!)
  }

  return (
    <ColorsDepartmentContext.Provider value={{ setColors, getColors }}>
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