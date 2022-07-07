import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <ul className="lista-navegacion">
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="pages/about.html">¿Quiénes somos?</NavLink>
      </li>
      <li>
        <NavLink to="pages/products.html">Productos</NavLink>
      </li>
      <li>
        <NavLink to="/">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + 'svgs/logo.svg'}
            alt="Un caos organizado"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="pages/gallery.html">Galería</NavLink>
      </li>
      <li>
        <NavLink to="pages/tattoo.html">Tatuajes</NavLink>
      </li>
      <li>
        <NavLink to="pages/contact.html">Contacto</NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
