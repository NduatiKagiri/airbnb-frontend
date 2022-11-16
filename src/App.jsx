import React from 'react'
import Home from './page/Home';
import LoginScreen from './routes/Login';
import SignupScreen from './routes/Signup';
import { Route, Routes } from 'react-router-dom';
import SideBarItem from './components/global/SideBar';

function App() {
  return (
    <div className="App">
      <SideBarItem/>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginScreen />} path="/login" />
          <Route element={<SignupScreen />} path="/signup" />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
