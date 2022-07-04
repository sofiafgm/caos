import React from 'react'

const Social = () => (
  <section className="section-redes">
    <ul className="lista-redes">
      <li>
        <a href="https://www.instagram.com/uncaosorganizado/">
          <img src={process.env.PUBLIC_URL + '/svgs/ig.svg'} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/uncaosorganizado/">
          <img src={process.env.PUBLIC_URL + '/svgs/fb.svg'} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.titok.com/uncaosorganizado/">
          <img src={process.env.PUBLIC_URL + '/svgs/tk.svg'} alt="TikTok" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/uncaosorganizado/">
          <img src={process.env.PUBLIC_URL + '/svgs/yt.svg'} alt="Youtube" />
        </a>
      </li>
    </ul>
  </section>
)

export default Social
