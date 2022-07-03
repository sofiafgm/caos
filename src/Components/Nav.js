import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <ul class="lista-navegacion">
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="about">Acerca de</NavLink>
      </li>
      <li>
        <NavLink to="products">Productos</NavLink>
      </li>
      <li>
        <NavLink to="gallery">Galeria</NavLink>
      </li>
      <li>
        <NavLink to="tattoo">Tatuajes</NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
