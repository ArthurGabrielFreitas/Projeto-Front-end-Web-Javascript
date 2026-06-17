import React from 'react'
import { Link } from 'react-router-dom'
import style from './Menu.module.css'

function Menu() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/prototipo">Protótipo</Link>
    </nav>
  )
}

export default Menu