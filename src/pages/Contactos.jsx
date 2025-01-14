import React, { useState } from 'react'
import './contacto.css'

function Contactos() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [completado, setCompletado] = useState(false)

    function onSubmit(event) {
        event.preventDefault();
        setCompletado(true);
    }

    return (
        <div className='contactos'>
            {completado == false ? <form onSubmit={onSubmit}>
                <label>
                    Nombre
                    <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
                </label>
                <label>
                    Apellido
                    <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} required/>
                </label>
                <label>
                    Email
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </label>
                <input type="submit" value="Submit" />
            </form> : <div className='newContainer'>
                <div className="datos">
                    <h2>Datos</h2>
                </div>
                <p className='nameFull'>{nombre} {apellido}</p>
                <p>{email}</p>
                <hr />
                <button onClick={() => setCompletado(false)}>🚮</button>
            </div>}
            <div className='container-thanks'>
                <h2>Regístrate para recibir las últimas noticias</h2>
            </div>
        </div>
    )
}

export default Contactos