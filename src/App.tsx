import { CurrentDepartmentProvider } from '@context/CurrentDepartmentContext'
import { DepartmentProvider } from '@context/DepartmentDataContext'
import Routes from '@/Routes'
import { Toaster } from 'react-hot-toast'
import { NextStepProvider } from '@context/NextStepContext'
import { ColorsDepartmentProvider } from '@context/ColorsDepartmentContext'
import { CurrentQuestionStateProvider } from '@context/CurrentQuestionStateContext';
import { HintProvider } from '@context/HintContext'

function App() {
  return (
    <>
      <Toaster />
      <HintProvider>
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
      </HintProvider>
    </>
  )
}

export default App
