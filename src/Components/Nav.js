import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <div className="lista-navegacion">
      <ul className="menu-1">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="pages/about.html">¿Quiénes somos?</NavLink>
        </li>
      </ul>
      <ul className="menu-2 desktop-only">
        <li>
          <NavLink to="/">
            <img
              className="logo"
              src={process.env.PUBLIC_URL + 'svgs/logo.svg'}
              alt="Un caos organizado"
            />
          </NavLink>
        </li>
      </ul>
      <ul className="menu-3">
        <li>
          <NavLink to="pages/products.html">Productos</NavLink>
        </li>
        <li>
          <NavLink to="pages/gallery.html">Galería</NavLink>
        </li>
        <li>
          <NavLink to="pages/contact.html">Contacto</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav
