import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import NavbarHome from './components/navbar/NavbarHome'
import Navbar from './components/navbar/Navbar'
import Partners from './pages/Partners'
import About from './pages/About'

const App = () => {
  const location = useLocation()

  return (
    <div className='app'>
      {/* Wrap your App component with Router */}

      {location.pathname === '/' ? <NavbarHome /> : <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tltHelaLanding' element={<Home />} />
        {/* <Route path='/talantlanding' element={<Home />} /> */}
        <Route path='/partners' element={<Partners />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
