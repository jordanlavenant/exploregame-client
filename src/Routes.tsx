import { BrowserRouter, Routes as Paths, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Departments from './pages/Departments/Departments'

const Routes = () => {
  return (
    <BrowserRouter>
      <Paths>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
      </Paths>
    </BrowserRouter>
  )
}

export default Routes