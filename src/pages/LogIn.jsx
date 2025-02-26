import React from 'react'
import { Link } from 'react-router'   

function LogIn() {
  return (
    <div className='main'>
      <div className='divRegistro'>
      <div className='divTitulo'>
        <h1>Inicio de Sesión</h1>
      </div>
      <div className='divInputs'>
        <input id='1' placeholder='Nombre de usuario' type="text" />
        <input id='2' placeholder='Contraseña' type="password" />
      </div>
      <div className='divBotones'>
        <Link to={'/registro'} className='btnIniciar'>Registrarse</Link>
        <button className='btnRegistrarse'>Iniciar Sesión</button>
      </div>
      </div>
    </div>
  )
}

export default LogIn