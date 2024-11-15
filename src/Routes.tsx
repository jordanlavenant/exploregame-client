import { BrowserRouter, Routes as Paths, Route } from 'react-router-dom'
import HomePage from '@pages/Home/Home'
import DepartmentPage from '@pages/Department/Department'
import ScenarioPage from '@pages/Scenario/Scenario'

import ProfilPage from '@pages/Profil/Profil'
import ProfilCheckPage from '@pages/Profil/ProfilCheck'
import ProfilModifPage from '@/pages/Profil/ProfilUpdate'
import AchievementPage from '@pages/Achievements/Achievements'
import LoginPage from '@pages/Login/Login'
import RegisterPage from './pages/Register/RegisterPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Paths>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/departments" element={<DepartmentPage />} />
        <Route path="/departments/:depId/scenarios/:sceId" element={<ScenarioPage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/profil/check" element={<ProfilCheckPage />} />
        <Route path="/profil/update" element={<ProfilModifPage />} />
        <Route path="/achievements" element={<AchievementPage />} />
      </Paths>
    </BrowserRouter>
  )
}

export default Routes