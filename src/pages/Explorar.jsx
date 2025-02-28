import React, { useEffect, useState } from 'react'
import Tarjeta from '../components/Tarjeta'
import './Explorar.css'

function Explorar() {
  const [producto, setProducto] = useState();

  async function conseguirInfo() {
    const respuesta = await fetch("https://cx1.davcs.workers.dev/api/gallery");
    const data = await respuesta.json();

    setProducto(data)
  }

  useEffect(() => {
    conseguirInfo()
  }, [])

  if (producto == undefined) return <p>Cargando...</p>

  return (
    <div className='mainExplorar'>
      {producto.map((item) => {
        return <Tarjeta key={item.id} imagen={item.url} descripcion={item.description} fecha={item.created_at} />
      })}
    </div>
  )
}

export default Explorar