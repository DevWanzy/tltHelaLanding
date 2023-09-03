import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'

import Partners from './pages/Partners'
import About from './pages/About'
const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tltHelaLanding' element={<Home />} />
          <Route path='/talantlanding' element={<Home />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      {/* <SemiFooter /> */}
    </div>
  )
}

export default App
