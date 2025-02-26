import React from 'react'
import { Link } from 'react-router'
import './Registro.css'

function Registro() {
  return (
    <div className='main'>
      <div className='divRegistro'>
      <div className='divTitulo'>
        <h1>Registro</h1>
      </div>
      <div className='divInputs'>
        <input id='1' placeholder='Nombre de usuario' type="text" />
        <input id='2' placeholder='Contraseña' type="password" />
        <input id='3' placeholder='Repita su contraseña' type="password" />
      </div>
      <div className='divBotones'>
        <Link to={'/login'} className='btnIniciar'>Iniciar Sesión</Link>
        <button className='btnRegistrarse'>Registrarse</button>
      </div>
      </div>
    </div>
  )
}

export default Registro