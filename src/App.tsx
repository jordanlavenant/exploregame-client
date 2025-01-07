import { CurrentDepartmentProvider } from '@context/CurrentDepartmentContext'
import { DepartmentProvider } from '@context/DepartmentDataContext'
import Routes from '@/Routes'
import { Toaster } from 'react-hot-toast'
import { NextStepProvider } from '@context/NextStepContext'
import { ColorsDepartmentProvider } from '@context/ColorsDepartmentContext'
import { CurrentQuestionStateProvider } from '@context/CurrentQuestionStateContext';
import { HintProvider } from '@context/HintContext'
import { ScriptProgressProvider } from './context/ScriptProgressContext'

function App() {
  return (
    <>
      <Toaster />
      <ScriptProgressProvider>
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
      </ScriptProgressProvider>
    </>
  )
}

export default App
