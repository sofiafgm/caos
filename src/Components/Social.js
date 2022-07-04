import React from 'react'

const Social = () => (
  <section className="section-redes">
    <ul className="lista-redes">
      <li>
        <a href="https://www.instagram.com/uncaosorganizado/">
          <img src={process.env.PUBLIC_URL + '/svgs/ig.svg'} alt="Logo de Instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/uncaosorganizado/">
          <img src={process.env.PUBLIC_URL + '/svgs/fb.svg'} alt="Logo de Facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/uncaosorganizado/">
          <img src={process.env.PUBLIC_URL + '/svgs/tk.svg'} alt="Logo de TikTok" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/uncaosorganizado/">
          <img src={process.env.PUBLIC_URL + '/svgs/yt.svg'} alt="Logo de Youtube" />
        </a>
      </li>
    </ul>
  </section>
)

export default Social
