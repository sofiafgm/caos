import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
// import your route components too
import Home from './Views/Home'
import About from './Views/About'
import Products from './Views/Products'
import Tattoo from './Views/Tattoo'
import Gallery from './Views/Gallery'
// stylesheet
import './index.css'
import Contact from "./Views/Contact";

const root = ReactDOM.createRoot(document.body)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="pages/about.html" element={<About />} />
          <Route path="pages/products.html" element={<Products />} />
          <Route path="pages/contact.html" element={<Contact />} />
          <Route path="pages/gallery.html" element={<Gallery />} />
          <Route path="pages/tattoo.html" element={<Tattoo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
