import React from 'react'

import './App.css'
import Navbar from './Navbar'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Services from './Services'
 const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Services' element={<Services/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App