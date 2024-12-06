import { CurrentDepartmentProvider } from '@context/CurrentDepartmentContext'
import { DepartmentProvider } from '@context/DepartmentDataContext'
import Routes from '@/Routes'
import { Toaster } from 'react-hot-toast';
import { CurrentQuestionStateProvider } from './context/CurrentQuestionStateContext';

function App() {
  return (
    <>
      <Toaster />
      <DepartmentProvider>
        <CurrentDepartmentProvider>
          <CurrentQuestionStateProvider>
            <Routes />
          </CurrentQuestionStateProvider>
        </CurrentDepartmentProvider>
      </DepartmentProvider>
    </>
  )
}

export default App
