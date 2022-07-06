import React from 'react'


const Nav = () => (
  <nav>
    <ul className="lista-navegacion">
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="pages/about.html">¿Quiénes somos?</a>
      </li>
      <li>
        <a href="../pages/products.html">Productos</a>
      </li>
      <li>
        <a href="/">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + 'svgs/logo.svg'}
            alt="Un caos organizado"
          />
        </a>
      </li>
      <li>
        <a href="pages/gallery.html">Galería</a>
      </li>
      <li>
        <a href="pages/tattoo.html">Tatuajes</a>
      </li>
      <li>
        <a href="pages/contact.html">Contacto</a>
      </li>
    </ul>
  </nav>
)

export default Nav
