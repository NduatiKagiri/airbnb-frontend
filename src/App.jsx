import React from 'react'
import Home from './page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBarItem from './components/global/SideBar';

function App() {
  return (
    <>
     <BrowserRouter>
     <SideBarItem/>
  <Routes>
 <Route path="/" element={<Home />} />
  </Routes>
    </BrowserRouter>
    </>


  )
}

export default App
