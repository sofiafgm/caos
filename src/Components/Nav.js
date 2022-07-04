import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <ul className="lista-navegacion">
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="about">Conócenos</NavLink>
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
