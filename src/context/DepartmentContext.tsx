import React, { createContext, useState, useContext, ReactNode } from 'react'

interface DepartmentContextType {
    currDepartmentIndex: number;
    setCurrDepartmentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const defaultContextValue: DepartmentContextType = {
    currDepartmentIndex: 0,
    setCurrDepartmentIndex: () => {}
};

export const DepartmentContext = createContext<DepartmentContextType>(defaultContextValue);

export const DepartmentProvider = ({ children }: { children: ReactNode }) => {
    const [currDepartmentIndex, setCurrDepartmentIndex] = useState(0);

    return (
        <DepartmentContext.Provider value={{ currDepartmentIndex, setCurrDepartmentIndex }}>
            {children}
        </DepartmentContext.Provider>
    )
}

export const useDepartmentIndex = () => useContext(DepartmentContext);