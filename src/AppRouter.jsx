import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import About from './components/About/About'


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
