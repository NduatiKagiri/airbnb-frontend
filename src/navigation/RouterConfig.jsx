import { Routes, Route } from 'react-router-dom';
import Reservation from '../pages/Reserve/Reservation';
import SignUp from '../pages/Home/SignUp';
import Splash from '../pages/Home/Splash';
import PrivateRoutes from './PrivateRoutes';
import AddHouseForm from '../pages/AddHouse/AddHouseForm';
import House from '../pages/ListOfHouse/House';
import DeleteHouse from '../pages/DeleteHouse/DeleteCar';
// import MyReservations from '../pages/MyReservations/MyReservations';
// import Reserve from '../pages/Reserve/Reserve';

export default function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route
          path="/add_car"
          element={(
            <PrivateRoutes requiresAdmin>
              <AddHouseForm />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/delete_car"
          element={(
            <PrivateRoutes requiresAdmin>
              <DeleteHouse />
            </PrivateRoutes>
          )}
        />
        <Route
          path="/cars"
          element={(
            <PrivateRoutes>
              <House />
            </PrivateRoutes>
          )}
        />

      </Routes>
    </div>
  );
}
