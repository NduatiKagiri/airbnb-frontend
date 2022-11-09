import React from 'react'
import Home from './page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNavigation from './components/global/SideNavigation'

function App() {
  return (
    <>

     <BrowserRouter>
  <Routes>
 <Route path="/" element={<Home />} />
  </Routes>
    </BrowserRouter>
    </>


  )
}

export default App
