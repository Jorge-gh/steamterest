import React from 'react'
import './Header.css'
import { Link } from 'react-router'

function Header() {
  return (
    <nav>
        <div>
            <Link to={'/'}><img src="./steamterest.png" alt="" /></Link>
        </div>
        <div>
            <Link to={'/'} className='btnExplorar'>Explorar</Link>
            <Link to={'/login'} className='btnLogIn'>Log in</Link>
            <Link to={'/registro'} className='btnRegistro'>Registro</Link>
        </div>
    </nav>
  )
}

export default Header