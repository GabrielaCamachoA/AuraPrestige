import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Contactos from './pages/Contactos'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Inicio />} />
          <Route path='contactos' element={<Contactos />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
