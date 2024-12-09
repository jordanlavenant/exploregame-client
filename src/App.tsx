import { CurrentDepartmentProvider } from '@context/CurrentDepartmentContext'
import { DepartmentProvider } from '@context/DepartmentDataContext'
import Routes from '@/Routes'
import { Toaster } from 'react-hot-toast'
import { CurrentQuestionStateProvider } from '@context/CurrentQuestionStateContext'
import { NextStepProvider } from '@context/NextStepContext'

function App() {
  return (
    <>
      <Toaster />
      <DepartmentProvider>
        <CurrentDepartmentProvider>
          <CurrentQuestionStateProvider>
            <NextStepProvider>
              <Routes />
            </NextStepProvider>
          </CurrentQuestionStateProvider>
        </CurrentDepartmentProvider>
      </DepartmentProvider>
    </>
  )
}

export default App
