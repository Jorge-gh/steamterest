import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Explorar from './pages/Explorar'
import LogIn from './pages/LogIn'
import Registro from './pages/Registro'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Explorar />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </>
  )
}

export default App
