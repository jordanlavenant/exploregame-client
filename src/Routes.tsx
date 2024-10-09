import { BrowserRouter, Navigate, Routes as Paths, Route } from 'react-router-dom'
import Accueil from './pages/accueil/page'
import Scenario from './pages/scenario/page'
import Etape from './pages/etape/page'
import Login from './pages/login/page'
import Register from './pages/register/page'
import Classement from './pages/classement/page'
import ProfilExterne from './pages/profil/profilexterne/page'
import ProfilPerso from './pages/profil/profilperso/page'
import ProgressionGlobal from './pages/progression/progressionglobal/page'
import ProgressionScenario from './pages/progression/progressionscenario/page'
import ProgressionEtape from './pages/progression/progressionetape/page'

const Routes = () => {
  return (
    <BrowserRouter>
      <Paths>
        <Route path="/" element={<Accueil />} />
        <Route path="/scenario" element={<Scenario />} />
        <Route path="/etape" element={<Etape />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/profil/externe" element={<ProfilExterne />} />
        <Route path="/profil/perso" element={<ProfilPerso />} />
        <Route path="/progression/global" element={<ProgressionGlobal />} />
        <Route path="/progression/scenario" element={<ProgressionScenario />} />
        <Route path="/progression/etape" element={<ProgressionEtape />} />
      </Paths>
    </BrowserRouter>
  )
}

export default Routes