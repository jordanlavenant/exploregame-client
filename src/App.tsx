import { DepartmentProvider } from './context/DepartmentContext'
import Routes from './Routes'

function App() {
  return (
    <DepartmentProvider>
      <Routes />
    </DepartmentProvider>
  )
}

export default App
