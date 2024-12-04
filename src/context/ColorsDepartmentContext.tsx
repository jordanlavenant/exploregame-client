import React, { createContext, useContext, useState, useEffect } from "react"

interface ColorsDepartment {
    primary: string;
    secondary: string;
    tertiary: string;
}

const ColorsDepartmentContext = createContext<ColorsDepartment | undefined>(undefined);

export const ColorsDepartmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [colors, setColors] = useState<ColorsDepartment>({
        primary: '',
        secondary: '',
        tertiary: ''
    });

    return (
        <ColorsDepartmentContext.Provider value={{colors, setColors }}>
            {children}
        </ColorsDepartmentContext.Provider>
    );
};

export const useColorsDepartments = () => {
    const context = useContext(ColorsDepartmentContext);
    if (context === undefined) {
      throw new Error('useDepartments must be used within a DepartmentProvider');
    }
    return context;
  };
  