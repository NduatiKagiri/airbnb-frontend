import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import LoginScreen from './routes/Login';
import SignupScreen from './routes/Signup';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<LoginScreen />} path="/login" />
      <Route element={<SignupScreen />} path="/signup" />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  <App />,
);
