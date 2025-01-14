import React from 'react'
import { Link } from 'react-router'
import './header.css'

function Header() {
  return (
    <header>
      <Link to={'/'}>
        <img src="/public/home.png" className='icon' />
      </Link>
      <nav>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/contactos'}>Contactos</Link>
      </nav>
    </header>
  )
}

export default Header