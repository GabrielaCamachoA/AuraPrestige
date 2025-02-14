import React, { useContext } from 'react'
import { Link } from 'react-router'
import './header.css'
import { context } from '../context/useOscuro'

function Header() {
  const { oscuro, setOscuro } = useContext(context)
  return (
    <header>
      <Link to={'/'}>
        <img src="/home.png" className='icon' />
      </Link>
      <nav>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/contactos'}>Contactos</Link>
        <button onClick={() => setOscuro(!oscuro)}>
          <img src={oscuro ?
            "/claro.png" :
            "/oscuro.png"} />
        </button>
      </nav>
    </header>
  )
}

export default Header