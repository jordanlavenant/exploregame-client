import { CurrentDepartmentProvider } from '@context/CurrentDepartmentContext'
import { DepartmentProvider } from '@context/DepartmentDataContext'
import Routes from '@/Routes'
import { Toaster } from '@components/ui/toaster'

function App() {
  return (
    <>
      <Toaster />
      <DepartmentProvider>
        <CurrentDepartmentProvider>
          <Routes />
        </CurrentDepartmentProvider>
      </DepartmentProvider>
    </>
  )
}

export default App
