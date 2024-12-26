import { CurrentDepartmentProvider } from '@context/CurrentDepartmentContext'
import { DepartmentProvider } from '@context/DepartmentDataContext'
import Routes from '@/Routes'
import { Toaster } from 'react-hot-toast'
import { NextStepProvider } from '@context/NextStepContext'
import { ColorsDepartmentProvider } from '@context/ColorsDepartmentContext'
import { CurrentQuestionStateProvider } from './context/CurrentQuestionStateContext';

function App() {
  return (
    <>
      <Toaster />
      <DepartmentProvider>
        <CurrentDepartmentProvider>
          <NextStepProvider>
            <ColorsDepartmentProvider>
              <CurrentQuestionStateProvider>
                <Routes />
              </CurrentQuestionStateProvider>
            </ColorsDepartmentProvider>
          </NextStepProvider>
        </CurrentDepartmentProvider>
      </DepartmentProvider>
    </>
  )
}

export default App
