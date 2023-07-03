import { useState } from 'react'
import './styles/App.css'

import Home from './Pages/Home'
import Committee from './Pages/Committee'
import ContactUs from './Pages/ContactUs'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Speakers from './Pages/Speakers'
import Biocard from './components/Speakers/Biocard'
function App() {
 
  return (
   
    <Routes>
      <Route path='/' element={<PageLayout />} >
      <Route index element={<Home />} />
      <Route path='/committee' element={<Committee />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/speaker' element={<Speakers />} />
      <Route path='/Bio' element={<Biocard/>} />
      </Route>
    </Routes>
  )
}

export default App
