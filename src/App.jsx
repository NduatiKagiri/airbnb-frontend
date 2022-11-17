import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import MenuOpener from './components/NavBar/MenuOpener';
// import Navbar from './components/NavBar/Navbar';
import Routernavigation from './navigation/Routernavigation';

function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Routernavigation />
    </div>
  );
}

export default App;
