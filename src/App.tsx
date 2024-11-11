import { CurrentDepartmentProvider } from '@context/CurrentDepartmentContext'
import { DepartmentProvider } from '@context/DepartmentDataContext'
import Routes from '@/Routes'

function App() {
  return (
    <DepartmentProvider>
      <CurrentDepartmentProvider>
        <Routes />
      </CurrentDepartmentProvider>
    </DepartmentProvider>
  )
}

export default App
