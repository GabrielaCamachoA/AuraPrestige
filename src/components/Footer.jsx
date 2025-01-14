import React from 'react'
import { Link } from 'react-router'
import './footer.css'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="infoAdicional">
                <h5>INFORMACION ADICIONAL</h5>
                <p>Politica de Privacidad</p>
                <p>Politica de Envios</p>
                <p>Cambios y devoluciones</p>
            </div>
            <div className="contacto">
                <h5>CONTACTO</h5>
                <Link to={'/contactos'}>
                <p>Contactanos</p>
                </Link>
            </div>
            <div className="redes">
                <h5>FOLLOW US</h5>
                <a href="https://www.instagram.com/" target='blank'>
                <img src="/public/ig.png" alt="" />
                </a>
                <a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des" target='blank'>
                <img src="/public/tiktok.png" alt="" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer