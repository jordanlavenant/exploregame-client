import { BrowserRouter, Routes as Paths, Route } from 'react-router-dom'
import HomePage from '@pages/Home/Home'
import DepartmentPage from '@pages/Department/Department'
import ScenarioPage from '@pages/Scenario/Scenario'

const Routes = () => {
  return (
    <BrowserRouter>
      <Paths>
        <Route path="/" element={<HomePage />} />
        <Route path="/departments" element={<DepartmentPage />} />
        <Route path="/departments/:depId/scenarios/:sceId" element={<ScenarioPage />} />
      </Paths>
    </BrowserRouter>
  )
}

export default Routes