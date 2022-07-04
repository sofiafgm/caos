import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <ul className="lista-navegacion">
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="about">¿Quiénes somos?</NavLink>
      </li>
      <li>
        <NavLink to="products">Productos</NavLink>
      </li>
      <li>
        <NavLink to="products">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + 'svgs/logo.svg'}
            alt="Un caos organizado"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="gallery">Galería</NavLink>
      </li>
      <li>
        <NavLink to="tattoo">Tatuajes</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contacto</NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
