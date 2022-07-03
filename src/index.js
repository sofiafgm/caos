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

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="tattoo" element={<Tattoo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
