import React from 'react'
import './inicio.css'
import Catalogo from '../components/catalogo'

function Inicio() {
  return (
    <main className='inicio'>
        <section className="headerImg">
          <h2>Aura Prestige</h2>
        </section>
        <section className='section2'>
        <div className="catalogo">
          <Catalogo img={"/hg.webp"} hoverImg={"/iluminadorliquido.webp"} title={"Highlighter"} price={"22.000"}/>
          <Catalogo img={"/blush2.png"} hoverImg={"/blushcolors.png"} title={"Blush"} price={"22.000"}/>
          <Catalogo img={"/amarena.webp"} hoverImg={"/labiales.png"} title={"Labial"} price={"22.000"}/>
          <Catalogo img={"/contorno2.png"} hoverImg={"/coloresC.webp"} title={"Contorno"} price={"22.000"}/>
          <Catalogo img={"/comes.png"} hoverImg={"/comes1.png"} title={"Comestiquera"} price={"22.000"}/>
          <Catalogo img={"/comes2.jpg"}  hoverImg={"/comes2.1.jpg"} title={"Comestiquera"} price={"22.000"}/>
        </div>
        </section>
    </main>
  )
}

export default Inicio