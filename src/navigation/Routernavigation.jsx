import {Routes, Route } from 'react-router-dom';
import SignUp from '../page/HomePage/SignUp';
import Splash from '../page/HomePage/Splash';
import ReservationScreen from '../page/Reservation/Reservation';
import PrivateRoutes from './PrivateRoutes';

export default function RouterConfig() {
  return (
    <div>

        <Routes>
          {/* <Route path="/" element={<Splash />} /> */}
          {/* <Route path="/sign_up" element={<SignUp />} /> */}
          <Route path="/" element={<ReservationScreen />} />
        </Routes>
    
    </div>
  );
}
