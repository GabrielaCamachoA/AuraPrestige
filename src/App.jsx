import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Contactos from './pages/Contactos'
import Header from './components/Header'
import Footer from './components/Footer'
import { context } from './context/useOscuro'
import { useContext } from 'react'

function App() {
  const {oscuro, setOscuro} = useContext(context)
  return (
    <main className={oscuro ? "dark" : ""}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Inicio />} />
          <Route path='contactos' element={<Contactos />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  )
}

export default App
