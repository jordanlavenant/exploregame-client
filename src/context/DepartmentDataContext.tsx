import { gql, useQuery } from "@apollo/client";
import { createContext, useContext } from "react";
import { Department } from 'api/types/graphql'

export const QUERY = gql`
  query FindDepartments {
    departments {
      id
      name
      description
    }
  }
`
interface DepartmentContextType {
  departments: Department[] | undefined;
  loading: boolean;
  error: Error | undefined;
}

const DepartmentContext = createContext<DepartmentContextType | undefined>(undefined);

export const DepartmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loading, error, data } = useQuery(QUERY);

  const departments = data?.departments;

  return (
    <DepartmentContext.Provider value={{ departments, loading, error }}>
      {children}
    </DepartmentContext.Provider>
  );
};

export const useDepartments = () => {
  const context = useContext(DepartmentContext);
  if (context === undefined) {
    throw new Error('useDepartments must be used within a DepartmentProvider');
  }
  return context;
};
