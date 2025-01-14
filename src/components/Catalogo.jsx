import React from 'react'

function Catalogo({ img, hoverImg, title, price }) {
    return (
        <div className="carta">
            <div className="preview">
                <img src={img} className='normal' />
                <img src={hoverImg} className='hover' />
            </div>
            <p className='titulo'>{title}</p>
            <p className='precio'>${price}</p>
        </div>
    )
}

export default Catalogo