import React from 'react'
import './Tarjeta.css'

function Tarjeta({ imagen , descripcion, fecha}) {
  return (
    <div className='postDiv'>
        
            <img src={imagen} alt="" id='paisaje'/>

            <section className='postSection'>
                <h1 className='postDescripcion'>{descripcion}</h1>
                <div><p>{new Date(fecha).toDateString()}</p> <img src="./star-outline.png" alt="" id='starIcon'/></div>
            </section>

    </div>
  )
}

export default Tarjeta