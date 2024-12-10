import { CurrentDepartmentProvider } from '@context/CurrentDepartmentContext'
import { DepartmentProvider } from '@context/DepartmentDataContext'
import Routes from '@/Routes'
import { Toaster } from 'react-hot-toast';
import { ColorsDepartmentProvider } from '@context/ColorsDepartmentContext'
import { CurrentQuestionStateProvider } from './context/CurrentQuestionStateContext';

function App() {
  return (
    <>
      <Toaster />
      <DepartmentProvider>
        <CurrentDepartmentProvider>
          <ColorsDepartmentProvider>
            <CurrentQuestionStateProvider>
              <Routes />
            </CurrentQuestionStateProvider>
          </ColorsDepartmentProvider>
        </CurrentDepartmentProvider>
      </DepartmentProvider>
    </>
  )
}

export default App
