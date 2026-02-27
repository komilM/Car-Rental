import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Vehicles from './Vehicles/Vehicles'
import Details from './Details/Details'
import About from './About/About'
import Contact from './Contact/Contact'
import Info from './Info/Info'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/details' element={<Details />} />
        <Route path='/info/:id' element={<Info/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
