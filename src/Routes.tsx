import { BrowserRouter, Navigate, Routes as Paths, Route } from 'react-router-dom'
import Accueil from './pages/accueil/page'

const Routes = () => {
  return (
    <BrowserRouter>
      <Paths>
        <Route path="/" element={<Accueil />} />
      </Paths>
    </BrowserRouter>
  )
}

export default Routes