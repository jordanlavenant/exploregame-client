import React, { createContext, useContext, useState, useEffect } from "react"
import { useDepartments } from "@context/DepartmentDataContext"

interface CurrentDepartmentContextType {
  currentDepartmentIndex: number
  setCurrentDepartmentIndex: (id: number) => void
  loading: boolean
  error: Error | null
}

const CurrentDepartmentContext = createContext<CurrentDepartmentContextType | undefined>(undefined)

export const CurrentDepartmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { departments, loading: departmentsLoading, error: departmentsError } = useDepartments()
  const [currentDepartmentIndex, setCurrentDepartmentIndex] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (departmentsLoading) {
      setLoading(true)
      return
    }

    if (departmentsError) {
      setError(departmentsError)
      setLoading(false)
      return
    }

    if (departments && departments.length > 0) {
      setCurrentDepartmentIndex(Math.floor(Math.random() * departments.length))
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [departments, departmentsLoading, departmentsError])

  return (
    <CurrentDepartmentContext.Provider value={{ currentDepartmentIndex, setCurrentDepartmentIndex, loading, error }}>
      {children}
    </CurrentDepartmentContext.Provider>
  );
};

export const useCurrentDepartment = () => {
  const context = useContext(CurrentDepartmentContext);
  if (context === undefined) {
    throw new Error('useCurrentDepartment must be used within a CurrentDepartmentProvider')
  }
  return context;
}