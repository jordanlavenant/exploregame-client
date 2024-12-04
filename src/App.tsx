import { CurrentDepartmentProvider } from '@context/CurrentDepartmentContext'
import { DepartmentProvider } from '@context/DepartmentDataContext'
import Routes from '@/Routes'
import { Toaster } from 'react-hot-toast';
import { ColorsDepartmentProvider } from '@context/ColorsDepartmentContext'

function App() {
  return (
    <>
      <Toaster />
      <DepartmentProvider>
        <CurrentDepartmentProvider>
          <ColorsDepartmentProvider>
            <Routes />
          </ColorsDepartmentProvider>
        </CurrentDepartmentProvider>
      </DepartmentProvider>
    </>
  )
}

export default App
